import { flat } from '~/helpers/flat.js'

import api from './index'

export const createInstance = (params) => api.post('/profile/create', flat(params))

export const editInstance = (name, params) => api.patch(`/profile/edit/${name}`, flat(params))

export const deleteInstance = (name, params) => api.delete(`/profile/remove/${name}`)
