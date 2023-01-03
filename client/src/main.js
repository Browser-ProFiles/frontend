import { createApp } from 'vue'
import { Steps, Button, Layout } from 'ant-design-vue'
import { createPinia } from 'pinia'

import { router } from './router'

import App from './App.vue'

import 'ant-design-vue/dist/antd.css'
import './assets/styles/main.scss'

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .use(router)
    .use(Steps)
    .use(Button)
    .use(Layout)
    .mount('#app')
