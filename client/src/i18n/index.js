import { createI18n } from 'vue-i18n'

import ru from './locales/ru.json'
import en from './locales/en.json'

const DEFAULT_LANG = 'en'

export default createI18n({
    legacy: false,
    globalInjection: true,
    locale: import.meta.env.VITE_APP_I18N_LOCALE || DEFAULT_LANG,
    fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE || DEFAULT_LANG,
    messages: {
        ru,
        en,
    },
})
