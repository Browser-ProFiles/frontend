import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
    const macosInstallModalOpened = ref(false)

    const setMacosInstallModalOpened = (value) => {
        console.log('value' ,value)
        macosInstallModalOpened.value = value
    }

    return {
        macosInstallModalOpened,
        setMacosInstallModalOpened,
    }
})
