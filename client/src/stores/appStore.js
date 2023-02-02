import { defineStore } from 'pinia'
import { ref } from 'vue'
import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils'

export const THEME_DEFAULT = 'default'
export const THEME_DARK = 'dark'

const getStoreTheme = () => {
    return localStorage.getItem('theme') || THEME_DEFAULT
}

const setStoreTheme = (theme) => {
    localStorage.setItem('theme', theme)
}

export const useAppStore = defineStore('app', () => {
    const theme = ref(getStoreTheme())

    const initMode = () => {
        toggleTheme({
            scopeName: getStoreTheme(),
        })
    }

    const toggleMode = () => {
        const newTheme = theme.value === THEME_DEFAULT ? THEME_DARK : THEME_DEFAULT
        setStoreTheme(newTheme)
        toggleTheme({
            scopeName: newTheme,
        })
        theme.value = newTheme
    }

    return {
        theme,
        initMode,
        toggleMode,
    }
})