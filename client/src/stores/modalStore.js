import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
    const macosInstallModalOpened = ref(false)
    const paymentMethodModalOpened = ref(false)

    const setMacosInstallModalOpened = (value) => {
        macosInstallModalOpened.value = value
    }

    const setPaymentMethodModalOpened = (value) => {
        paymentMethodModalOpened.value = value
    }

    return {
        macosInstallModalOpened,
        setMacosInstallModalOpened,

        paymentMethodModalOpened,
        setPaymentMethodModalOpened,
    }
})
