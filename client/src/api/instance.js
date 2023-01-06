import api from './index.js'

export const getInstanceList = () => api.get('/instance/list')

export const getInstanceSingle = (name) => api.get(`/instance/view/${name}`)

export const createInstance = (params) => api.post('/instance/create', params)

export const editInstance = (name, params) => api.patch(`/instance/edit/${name}`, params)

export const deleteInstance = (name) => api.delete(`/instance/remove/${name}`)
