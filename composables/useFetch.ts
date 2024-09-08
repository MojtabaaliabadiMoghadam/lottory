// composables/useApi.ts

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type RequestHeaders = Record<string, string>;

interface RequestOptions {
    path: string;  // We will use 'path' instead of 'url'
    method?: RequestMethod;
    body?: any;  // You can specify a more specific type if you know the structure.
    headers?: RequestHeaders;
}

// Define your base URL
const BASE_URL = 'https://ayandesabz.ir';

export function useApi() {
    /**
     * General function to make HTTP requests.
     * @param {RequestOptions} options - Options for the HTTP request.
     * @returns {Promise<T>} - Promise resolving with the response data.
     */
    const request = async <T>({ path, method = 'GET', body = null, headers = {} }: RequestOptions): Promise<T> => {
        try {
            const response: T = await $fetch(`${BASE_URL}${path}`, {
                method,
                headers,
                body: body ? JSON.stringify(body) : undefined,
            });
            return response;
        } catch (error: any) {
            throw new Error(`API request failed: ${error.message}`);
        }
    };

    // Specific functions for common HTTP methods
    const get = async <T>(path: string, headers: RequestHeaders = {}): Promise<T> => request<T>({ path, method: 'GET', headers });
    const post = async <T>(path: string, body: any, headers: RequestHeaders = {}): Promise<T> => request<T>({ path, method: 'POST', body, headers });
    const put = async <T>(path: string, body: any, headers: RequestHeaders = {}): Promise<T> => request<T>({ path, method: 'PUT', body, headers });
    const del = async <T>(path: string, headers: RequestHeaders = {}): Promise<T> => request<T>({ path, method: 'DELETE', headers });

    return {
        get,
        post,
        put,
        del,
    };
}
