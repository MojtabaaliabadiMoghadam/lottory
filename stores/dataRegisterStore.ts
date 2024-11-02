import { defineStore } from 'pinia'
export const useDataRegister = defineStore('dataRegister', () => {
    const dataStatusBar = ref([
        {text:'شروع',key:'/register/start'},
        {text:'فرم',key:'/register/personal-info'},
        {text:'احراز',key:'/register/verification'},
        {text:'پرداخت',key:'/register/payment'},
        {text:'تکمیل',key:'/register/completion'}
    ])
    const acceptRule = ref<boolean>(false)
    const kindNotMarried = ref<'not-married' | 'absolute' | 'deceased-wife' | 'separation'>('not-married');
    const kindMarried = ref<'american-citizen' | 'not-american-citizen'>('not-american-citizen');
    const step = ref<string>('')
    const isMarried = ref<number>(0)
    const birthDateData = ref({
        day:'',
        month:'',
        year:''
    })
    interface UserInfo {
        mobile: string;
        first_name_english: string;
        last_name_english: string;
        first_name_persian: string;
        last_name_persian: string;
        postal_code: string;
        birth_country_id: number;
        birth_province_id: number;
        birth_city_id: number;
        birthdate: string; // Format: YYYY-MM-DD
        nationality: string;
        citizenship_country_id: number;
        gender_status:'male'|'female';
        image: string; // Base64 encoded image data
        image_status: number; // 0: Not uploaded, 1: Uploaded, etc.
        married_status: number; // 0: Single, 1: Married
        wife_info: WifeInfo;
        children_count: number;
        children_info: ChildInfo[] | null;
        education_level:string,
        "residence_country_id": number,
        "residence_province": number,
        "residence_city": number,
        "current_address": string,
        emailL: string
    }

    interface ChildInfo {
        first_name_english: string;
        last_name_english: string;
        first_name_persian: string;
        last_name_persian: string;
        birth_country_id: number;
        // birth_province_id: number;
        gender_status:'male'|'female';
        birth_city_id: number;
        birthdate: string; // تاریخ تولد به فرمت YYYY-MM-DD
        nationality: string;
        // citizenship_country_id: number;
        image: string; // آدرس یا مسیر تصویر
        image_status: number; // وضعیت تصویر
    }

    interface WifeInfo {
        first_name_english: string;
        last_name_english: string;
        first_name_persian: string;
        last_name_persian: string;
        birth_country_id: number;
        // birth_province_id: number;
        birth_city_id: number;
        gender_status:'male'|'female';
        birthdate: string; // تاریخ تولد به فرمت YYYY-MM-DD
        nationality: string;
        // citizenship_country_id: number;
        image: string; // آدرس یا مسیر تصویر
        image_status: number; // وضعیت تصویر
    }
    const formData = ref<UserInfo>({
        mobile: '',
        first_name_english: '',
        last_name_english: '',
        first_name_persian: '',
        last_name_persian: '',
        postal_code: '',
        birth_country_id: 0,
        gender_status:'male',
        // birth_province_id: 0,
        birth_city_id: 0,
        birthdate: '', // Can use a default date if needed, e.g., '1990-01-01'
        nationality: '',
        // citizenship_country_id: 0,
        image: '', // Base64 string, initially empty
        image_status: 0, // Default to not uploaded
        married_status: 0, // Default to single
        wife_info: {}, // No wife info when single
        children_count: 0, // Default to no children
        children_info: [], // No children info when count is 0,
        education_level:'',
        residence_country_id:0,
        residence_province:1,
        residence_city:0,
        current_address:'',
        email:''
    });
    const formDataErrors = ref<Record<string, string[]>>({});
    const dataFactor = ref()
    return {
        dataStatusBar,
        kindNotMarried,
        step,
        kindMarried,
        formData,
        birthDateData,
        acceptRule,
        isMarried,
        formDataErrors,
        dataFactor
    }
})