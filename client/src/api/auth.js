import api from './index.js'

export const login = (params) => api.post('/auth/sign-in', params)

export const signUp = (params) => api.post('/auth/sign-up', params)

export const confirmSignUp = (params) => api.post('/auth/confirm/sign-up', params)
