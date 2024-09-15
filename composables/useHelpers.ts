import axios from 'axios';
// axios.defaults.withCredentials = true;

import { toast } from 'vue3-toastify'
axios.defaults.withCredentials = true;  // اصلاح با withCredentials
import type { AxiosResponse } from 'axios';
import type { SweetAlertIcon } from 'sweetalert2';

interface IResponse {
    status: number;
    message: string;
    data: {
        [key: string]: any;
    };
    errors: IError[];
    timestamp?: string;
}

interface IError {
    message: string;
    code: string;
    field: string;
}

interface FetchDataOptions {
    url: string;
    data?: any | null;
    method?: string | HttpMethods;
    headers?: Record<string, string>;
    parameters?: Record<string, string> | any;
    content_type?: string;
}

interface IAlertOptions {
    icon: string;
    text: string;
    title: string;
    timer: number;
    palette: string;
}

/**
 * @var HttpMethods Allowed http methods
 */
enum HttpMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

// A collection of helper functions.
export function useHelpers() {
    const runtimeConfig = useRuntimeConfig();
    const backEndUrl: string | null = runtimeConfig.public?.BACK_END_URL
    const isDev: boolean = process.env.NODE_ENV === 'development';
    const useAuthTokenHelpers = () => useState("auth_token_helpers");

    const setAuthTokenHelpers = (token: string | null) => {  // تعیین نوع token
        const authToken = useAuthTokenHelpers();
        authToken.value = token;
    };

    function isFilled(value: any): boolean {
        return value !== undefined && value !== null && value !== '';
    }

    function isSet(value: any): boolean {
        return typeof value !== 'undefined' && value !== null;
    }

    function isNumber(value: any): boolean {
        return typeof value === 'number' && !isNaN(value);
    }


    function objectOrArrayIsNotEmpty(value: any): boolean {
        if (value !== null && Array.isArray(value)) {
            return value.length > 0;
        } else if (value !== null && typeof value === 'object') {
            return Object.keys(value).length > 0;
        }
        return false;
    }

    function generateRandomString(n: number = 2): string {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        const alphabetLength = alphabet.length;
        for (let i = 0; i < n; i++) {
            const randomIndex = Math.floor(Math.random() * alphabetLength);
            result += alphabet.charAt(randomIndex);
        }
        const timestamp = Date.now().toString();
        result = `${result}_${timestamp}_${result}`;
        return result;
    }

    function searchInArray(items: any[] = [], search: string | null): any[] {
        return search && isFilled(search) ? items.filter(item => {
            const lowerSearch = search.toLowerCase();
            for (const key in item) {
                if (item.hasOwnProperty(key)) {
                    let value = item[key];
                    if (typeof value === 'number') {
                        value = value.toString();
                    }
                    if (typeof value === 'string' && isFilled(value) && value.toLowerCase().includes(lowerSearch)) {
                        return true;
                    }
                }
            }
            return false;
        }) : items;
    }

    function getUrl(url: string, api: boolean = true, hash_data: string | null = null): string {
        const baseUrl = backEndUrl;
        let normalizedUrl = url.replace(/\/+/g, '/');
        normalizedUrl = normalizedUrl.startsWith('/') ? normalizedUrl.slice(1) : normalizedUrl;
        normalizedUrl = api ? `api/${normalizedUrl}` : normalizedUrl;

        if (hash_data && isFilled(hash_data)) {
            normalizedUrl += `#${hash_data}`;
        }

        if (baseUrl.endsWith('/') && normalizedUrl.startsWith('/')) {
            normalizedUrl = normalizedUrl.slice(1);
        } else if (!baseUrl.endsWith('/') && !normalizedUrl.startsWith('/')) {
            normalizedUrl = `/${normalizedUrl}`;
        }

        return `${baseUrl}${normalizedUrl}`;
    }

    function addBackendToImageUrl(imageUrl: string): string {
        const cleanedImageUrl = imageUrl.replace(/^\/+/, '');
        const fullUrl = `${backEndUrl}/${cleanedImageUrl}`;
        return fullUrl;
    }

    async function fetchData(
        {
            url,
            data = null,
            method = 'get',
            headers = {},
            parameters = null,
        }: FetchDataOptions
    ): Promise<IResponse> {

        url = url.replace(/^\/|\/$/g, '');
        headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...headers,
        };
        const options = {
            url,
            method,
            headers: {
                ...headers,
            },
            data,
            params: parameters,
            withCredentials: false,
        };

        try {
            const res: AxiosResponse = await axios(options);
            const data: IResponse = res.data;
            return {
                status: res.status,
                data: data.data,
                errors: data.errors,
                message: data.message,
            };
        } catch (error: any) {
            if (error.response) {
                return {
                    status: error.response.status,
                    errors: error.response.data?.errors || [],
                    message: error.response.data?.message || 'An error occurred',
                };
            } else {
                return {
                    status: 500,
                    errors: [{ message: 'An unknown error occurred', code: '', field: '' }],
                    message: 'An error occurred',
                };
            }
        }
    }


     function showSuccessToast(message: string) {
        toast.success(message, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER,
        })
    }
     function showErrorToast(message: string) {
        toast.error(message, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER,
        })
    }
    return {
        backEndUrl,
        isDev,
        isFilled,
        isSet,
        isNumber,
        objectOrArrayIsNotEmpty,
        generateRandomString,
        searchInArray,
        fetchData,
        getUrl,
        addBackendToImageUrl,
        setAuthTokenHelpers,
        showSuccessToast,
        showErrorToast
    };
}
