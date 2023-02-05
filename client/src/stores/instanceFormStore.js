import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'

import { set } from '~/helpers/obj.js'

import { createInstance, editInstance, getInstanceSingle } from '~/api/instance.js'
import { CONFIG_INSTANCE_FORM } from '~/forms/config.js'

const DEFAULT_STEP = 0
const BASE_STEPS_COUNT = 7

const toast = useToast()

export const useInstanceFormStore = defineStore('instanceForm', () => {
    const step = ref(DEFAULT_STEP)
    const editProfileName = ref(null)
    const loading = ref(false)
    const advancedSettings = ref(false)
    const form = reactive(CONFIG_INSTANCE_FORM())
    const i18n = useI18n()

    const { t } = i18n

    const toggleAdvancedSettings = () => {
        advancedSettings.value = !advancedSettings.value
        if (!advancedSettings.value) {
            step.value = Math.min(BASE_STEPS_COUNT - 1, step.value)
        }
    }

    const sendForm = async () => {
        try {
            loading.value = true
            await createInstance(form)
            step.value = DEFAULT_STEP
            toast.success(t('messages.success.instanceCreate'))
            return true
        } catch (e) {
            toast.error(e.response?.data?.message || e.message)
            return false
        } finally {
            loading.value = false
        }
    }

    const sendEditForm = async () => {
        try {
            loading.value = true
            await editInstance(editProfileName.value, form)
            step.value = DEFAULT_STEP
            toast.success(t('messages.success.instanceEdit'))
            return true
        } catch (e) {
            toast.error(e.response?.data?.message || e.message)
            return false
        } finally {
            loading.value = false
        }
    }

    const setEditName = async (name) => {
        try {
            loading.value = true
            editProfileName.value = name
            const { data } = await getInstanceSingle(name)
            Object.assign(form, data.form)
            step.value = DEFAULT_STEP
        } catch (e) {
            toast.error(e.response?.data?.message || e.message)
        } finally {
            loading.value = false
        }
    }

    const clearEditName = () => {
        editProfileName.value = null
        Object.assign(form, CONFIG_INSTANCE_FORM())
        step.value = DEFAULT_STEP
    }

    const onChangeField = (path, value, parser) => {
        const result = value instanceof Event ? value?.target?.value : value
        set(form, path, parser ? parser(result) : result)
    }

    const nextStep = () => step.value += 1
    const prevStep = () => step.value -= 1

    const firstStep = () => step.value = DEFAULT_STEP
    const changeStep = (value) => step.value = value

    return {
        form,
        loading,

        editProfileName,
        setEditName,
        clearEditName,

        sendForm,
        sendEditForm,

        onChangeField,

        advancedSettings,
        toggleAdvancedSettings,

        step,
        nextStep,
        prevStep,
        changeStep,
        firstStep
    }
})
