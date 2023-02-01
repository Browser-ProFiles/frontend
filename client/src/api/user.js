import api from './index.js'

export const getUser = () => api.get('/user/current')

export const getSubscriptions = () => api.get('/subscriptions/list')
