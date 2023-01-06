import api from './index.js'

export const login = (params) => api.post('/auth/sign-in', params)

export const signUp = (params) => api.post('/auth/sign-up', params)

export const logout = () => api.post('/auth/sign-out')