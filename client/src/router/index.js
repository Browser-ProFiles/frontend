import { createRouter, createWebHistory } from 'vue-router'
import { useToast } from 'vue-toastification'
import { defineAsyncComponent } from 'vue'

import i18n from '~/i18n'

import { isAuth } from '~/helpers/auth.js'

const toast = useToast()

const routes = [
    {
        path: '/auth/login',
        component: defineAsyncComponent(() => import('~/pages/Auth/AuthLogin.vue')),
        meta: { hasSidebar: false, onlyGuest: true },
    },
    {
        path: '/auth/sign-up',
        component: defineAsyncComponent(() => import('~/pages/Auth/AuthSignUp.vue')),
        meta: { hasSidebar: false, onlyGuest: true },
    },
    {
        path: '/auth/confirm/:token',
        component: defineAsyncComponent(() => import('~/pages/Auth/AuthConfirm.vue')),
        meta: { hasSidebar: false, onlyGuest: true },
    },
    {
        path: '/',
        redirect: '/cabinet',
        meta: { hasSidebar: false, onlyAuth: true },
    },
    {
        path: '/cabinet',
        component: defineAsyncComponent(() => import('~/pages/User/Cabinet.vue')),
        meta: { hasSidebar: false, onlyAuth: true },
    },
    {
        path: '/cabinet/subscriptions',
        component: defineAsyncComponent(() => import('~/pages/User/Subscriptions.vue')),
        meta: { hasSidebar: false, onlyAuth: true },
    },
    {
        path: '/profiles',
        component: defineAsyncComponent(() => import('~/pages/Instance/InstanceList.vue')),
        meta: { hasSidebar: false, onlyAuth: true },
    },
    {
        path: '/profile/new',
        component: defineAsyncComponent(() => import('~/pages/Instance/InstanceNew.vue')),
        meta: { hasSidebar: true, onlyAuth: true },
    },
    {
        path: '/profile/edit/:name',
        component: defineAsyncComponent(() => import('~/pages/Instance/InstanceEdit.vue')),
        meta: { hasSidebar: true, onlyAuth: true },
    },
]

export const router = new createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.onlyGuest)) {
        isAuth() ? next('/') : next()
    }

    if (to.matched.some((record) => record.meta.onlyAuth)) {
        if (isAuth()) {
            next()
        } else {
            toast.error(i18n.global.t('messages.error.authRequired'))
            next('/auth/login')
        }
    }
})
