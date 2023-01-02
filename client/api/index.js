import axios from 'axios'

const baseURL = import.meta.env.VITE_APP_API_BASE_URL
if (!baseURL) {
    console.error('No base URL')
}

export default axios.create({
    baseURL,
})