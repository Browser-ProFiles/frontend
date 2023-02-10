import api from './index.js'

export const getPaymentUrl = (params) => api.post('/payment/request/freekassa', params)
