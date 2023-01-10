import axios from 'axios'
import { router } from '~/router'
import { useToast } from 'vue-toastification'

import { clearAuthToken } from '~/helpers/auth.js'

const toast = useToast()

const baseURL = import.meta.env.VITE_APP_API_BASE_URL
if (!baseURL) {
    console.error('No base URL')
}

const instance = axios.create({
    withCredentials: true,
    baseURL,
    headers: {
        common: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`
        }
    }
})

instance.interceptors.response.use(response => response, async error => {
    if (!error.response || error.response.status !== 401) {
        return Promise.reject(error)
    }

    toast.error('Authentication required');
    clearAuthToken();
    await router.push('/auth/login');

    return Promise.reject(error);
})

export default instance