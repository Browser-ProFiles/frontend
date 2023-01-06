import { createRouter, createWebHistory } from 'vue-router'

import InstanceList from '../pages/Instance/InstanceList.vue'
import InstanceNew from '../pages/Instance/InstanceNew.vue'
import InstanceEdit from '../pages/Instance/InstanceEdit.vue'

const routes = [
    { path: '/', redirect: '/profiles', meta: { hasSidebar: false } },
    { path: '/profiles', component: InstanceList, meta: { hasSidebar: false } },
    { path: '/profile/new', component: InstanceNew, meta: { hasSidebar: true } },
    { path: '/profile/edit/:name', component: InstanceEdit, meta: { hasSidebar: true } },
]

export const router = new createRouter({
    history: createWebHistory(),
    routes,
})