import { createRouter, createWebHistory } from 'vue-router'

import AuthLogin from '~/pages/Auth/AuthLogin.vue'
import AuthSignUp from '~/pages/Auth/AuthSignUp.vue'

import InstanceList from '~/pages/Instance/InstanceList.vue'
import InstanceNew from '~/pages/Instance/InstanceNew.vue'
import InstanceEdit from '~/pages/Instance/InstanceEdit.vue'

const routes = [
    { path: '/auth/login', component: AuthLogin, meta: { hasSidebar: true } },
    { path: '/auth/sign-up', component: AuthSignUp, meta: { hasSidebar: true } },
    { path: '/', redirect: '/profiles', meta: { hasSidebar: false } },
    { path: '/profiles', component: InstanceList, meta: { hasSidebar: false } },
    { path: '/profile/new', component: InstanceNew, meta: { hasSidebar: true } },
    { path: '/profile/edit/:name', component: InstanceEdit, meta: { hasSidebar: true } },
]

export const router = new createRouter({
    history: createWebHistory(),
    routes,
})