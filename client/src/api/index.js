import axios from 'axios'
import { router } from '~/router'
import { useToast } from 'vue-toastification'

import i18n from '~/i18n'

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
            Authorization: localStorage.getItem('authToken') ? `Bearer ${localStorage.getItem('authToken')}` : null,
        }
    }
})

instance.interceptors.response.use(response => response, async error => {
    if (!error.response || error.response.status !== 401) {
        return Promise.reject(error)
    }

    toast.error(i18n.global.t('messages.error.authRequired'))
    clearAuthToken()
    await router.push('/auth/login')

    return Promise.reject(error)
})

export default instance
