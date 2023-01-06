import { flat } from '~/helpers/flat.js'

import api from './index'

export const createInstance = (params) => api.post('/instance/create', flat(params))

export const editInstance = (name, params) => api.post(`/instance/edit/${name}`, flat(params))
