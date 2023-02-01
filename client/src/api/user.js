import api from './index.js'

export const getUser = () => api.get('/user/current')
