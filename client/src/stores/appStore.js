import { defineStore } from 'pinia'
import { ref } from 'vue'
import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils'
import { useI18n } from 'vue-i18n'

import api from '@/api'

import { DEFAULT_LANG } from '@/const/appLang.js'

// TODO: Separate?
// Lang
const getStoreLang = () => {
    return localStorage.getItem('lang') || DEFAULT_LANG
}

const setStoreLang = (theme) => {
    localStorage.setItem('lang', theme)
}

// Theme
export const THEME_DEFAULT = 'default'
export const THEME_DARK = 'dark'

const getStoreTheme = () => {
    return localStorage.getItem('theme') || THEME_DEFAULT
}

const setStoreTheme = (theme) => {
    localStorage.setItem('theme', theme)
}

export const useAppStore = defineStore('app', () => {
    const i18n = useI18n()

    const theme = ref(getStoreTheme())
    const lang = ref(getStoreLang())

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

    const initLang = () => {
        const initialLang = getStoreLang()
        i18n.locale.value = initialLang
        api.defaults.params = {
            ...api.defaults.params ?? {},
            lang: initialLang,
        }
    }

    const changeLang = (newLang) => {
        setStoreLang(newLang)
        i18n.locale.value = getStoreLang()
        lang.value = newLang
        api.defaults.params = {
            ...api.defaults.params ?? {},
            lang: newLang,
        }
    }

    return {
        theme,
        initMode,
        toggleMode,

        lang,
        initLang,
        changeLang,
    }
})
