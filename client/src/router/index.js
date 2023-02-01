import { createRouter, createWebHistory } from 'vue-router'
import { useToast } from 'vue-toastification'

import { isAuth } from '~/helpers/auth.js'

import AuthLogin from '~/pages/Auth/AuthLogin.vue'
import AuthSignUp from '~/pages/Auth/AuthSignUp.vue'

import UserCabinet from '~/pages/User/Cabinet.vue'
import UserSubscriptions from '~/pages/User/Subscriptions.vue'

import InstanceList from '~/pages/Instance/InstanceList.vue'
import InstanceNew from '~/pages/Instance/InstanceNew.vue'
import InstanceEdit from '~/pages/Instance/InstanceEdit.vue'

const toast = useToast()

const routes = [
    { path: '/auth/login', component: AuthLogin, meta: { hasSidebar: true, onlyGuest: true, } },
    { path: '/auth/sign-up', component: AuthSignUp, meta: { hasSidebar: true, onlyGuest: true, } },
    { path: '/', redirect: '/cabinet', meta: { hasSidebar: false, onlyAuth: true, } },
    { path: '/cabinet', component: UserCabinet, meta: { hasSidebar: false, onlyAuth: true, } },
    { path: '/cabinet/subscriptions', component: UserSubscriptions, meta: { hasSidebar: false, onlyAuth: true, } },
    { path: '/profiles', component: InstanceList, meta: { hasSidebar: false, onlyAuth: true, } },
    { path: '/profile/new', component: InstanceNew, meta: { hasSidebar: true, onlyAuth: true, } },
    { path: '/profile/edit/:name', component: InstanceEdit, meta: { hasSidebar: true, onlyAuth: true, } },
]

export const router = new createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active"
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.onlyGuest)) {
        console.log('only guest')
        isAuth() ? next('/') : next()
    }

    if (to.matched.some((record) => record.meta.onlyAuth)) {
        if (isAuth()) {
            next()
        } else {
            toast.error('Authentication required')
            next('/auth/login')
        }
    }
})