import api from './index'

export const createInstance = (params) => api.post('/instance/create', params)
