import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

import { createInstance } from '../../api/instance.js'
import { CONFIG_INSTANCE_FORM } from '../forms/config.js'

export const useNewInstanceFormStore = defineStore('newInstanceForm', () => {
    const sending = ref(false)
    const form = reactive(CONFIG_INSTANCE_FORM())

    const sendForm = async () => {
        sending.value = true
        await createInstance(form);
        sending.value = false
    }

    return { form, sendForm }
})