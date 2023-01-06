import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

import { set } from '~/helpers/obj.js'

import { createInstance } from '../../api/instance.js'
import { CONFIG_INSTANCE_FORM } from '../forms/config.js'

const DEFAULT_STEP = 0

export const useInstanceFormStore = defineStore('instanceForm', () => {
    const step = ref(DEFAULT_STEP)
    const sending = ref(false)
    const editProfileName = ref(null)
    const form = reactive(CONFIG_INSTANCE_FORM())

    const sendForm = async () => {
        sending.value = true
        await createInstance(form)
        sending.value = false
    }

    const sendEditForm = async () => {
        sending.value = true
        await createInstance(form)
        sending.value = false
    }

    const setEditName = (name) => {
        editProfileName.value = name
    }

    const clearEditName = () => {
        editProfileName.value = null
    }

    const onChangeField = (path, value) => set(form, path, value instanceof Event ? value?.target?.value : value)

    const nextStep = () => step.value += 1
    const prevStep = () => step.value -= 1

    const firstStep = () => step.value = DEFAULT_STEP
    const changeStep = (value) => step.value = value

    return {
        form,

        editProfileName,
        editMode: !!editProfileName,
        setEditName,
        clearEditName,

        sendForm,
        sendEditForm,

        onChangeField,

        step,
        nextStep,
        prevStep,
        changeStep,
        firstStep
    }
})
