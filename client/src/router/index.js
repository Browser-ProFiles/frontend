import { createRouter, createWebHistory } from 'vue-router'

import InstanceNew from '../pages/Instance/InstanceNew.vue'

const routes = [
    { path: '/', component: InstanceNew },
]

export const router = new createRouter({
    history: createWebHistory(),
    routes,
})