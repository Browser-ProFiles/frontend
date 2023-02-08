const baseURL = import.meta.env.VITE_APP_API_BASE_URL
if (!baseURL) {
    console.error('No base URL')
}

export const DOWNLOAD_LINKS = {
    windows: 'https://drive.google.com/uc?export=download&id=1mJa8kwwEKq0OUvgaM4gA8ttf1_fCW6BG',
    macosIntel: 'https://drive.google.com/uc?export=download&id=1hiEu_OeDAjf2-v9r6bqr4b3lTpTquPAI',
    macosApple: 'https://drive.google.com/uc?export=download&id=1y0ua4GACrIeUnqNruYT320DUWIic5MKc',
    linux: 'download/linux',
}

export const LATEST_VERSION = '1.0'

export const downloadFile = (system, version = LATEST_VERSION) => {
    if (!DOWNLOAD_LINKS[system]) {
        console.error('Wrong download system', system)
    }

    window.open(DOWNLOAD_LINKS[system], '_blank')
}
