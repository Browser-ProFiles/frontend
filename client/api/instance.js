import { flat } from '~/helpers/flat.js'

import api from './index'

export const createInstance = (params) => api.post('/instance/create', flat(params))
