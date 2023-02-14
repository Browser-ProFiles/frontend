import api from './index.js'

export const getFreekassaPaymentUrl = (params) => api.post('/payment/request/freekassa', params)
