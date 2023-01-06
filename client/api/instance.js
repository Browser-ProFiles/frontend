import { flat } from '~/helpers/flat.js'

import api from './index'

export const login = (params) => api.post('/auth/sign-in', params)

export const signUp = (params) => api.post('/auth/sign-up', params)

export const logout = () => api.post('/auth/sign-out')

export const createInstance = (params) => api.post('/profile/create', flat(params))

export const editInstance = (name, params) => api.patch(`/profile/edit/${name}`, flat(params))

export const deleteInstance = (name) => api.delete(`/profile/remove/${name}`)
