import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

import { createInstance } from '../../api/instance.js'
import { CONFIG_INSTANCE_FORM } from '../forms/config.js'

const DEFAULT_STEP = 0

export const useNewInstanceFormStore = defineStore('newInstanceForm', () => {
    const step = ref(DEFAULT_STEP)
    const sending = ref(false)
    const form = reactive(CONFIG_INSTANCE_FORM())

    const sendForm = async () => {
        sending.value = true
        await createInstance(form);
        sending.value = false
    }

    const nextStep = () => step.value += 1
    const prevStep = () => step.value -= 1

    const firstStep = () => step.value = DEFAULT_STEP
    const changeStep = (value) => step.value = value

    return {
        form,
        sendForm,
        step,
        nextStep,
        prevStep,
        changeStep,
        firstStep
    }
})
