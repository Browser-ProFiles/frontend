import { createApp } from 'vue'
import { Steps, Button, Layout, Input, InputNumber, Select, Checkbox, Row, Col, List } from 'ant-design-vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'

import { router } from './router'
import i18n from './i18n'

import App from './App.vue'

import 'ant-design-vue/dist/antd.min.css'
import 'vue-toastification/dist/index.css'
import './assets/styles/main.scss'

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .use(i18n)
    .use(Toast)
    .use(router)
    .use(Steps)
    .use(Button)
    .use(Layout)
    .use(Input)
    .use(InputNumber)
    .use(Select)
    .use(Checkbox)
    .use(Row)
    .use(Col)
    .use(List)
    .mount('#app')
