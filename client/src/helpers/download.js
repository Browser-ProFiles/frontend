const baseURL = import.meta.env.VITE_APP_API_BASE_URL
if (!baseURL) {
    console.error('No base URL')
}

export const DOWNLOAD_LINKS = {
    windows: 'download/windows',
    macosIntel: 'download/macos-intel',
    macosApple: 'download/macos-apple',
    linux: 'download/linux',
}

export const LATEST_VERSION = '1.0'

export const downloadFile = (system, version = LATEST_VERSION) => {
    if (!DOWNLOAD_LINKS[system]) {
        console.error('Wrong download system', system)
    }

    window.open(`${baseURL}/${DOWNLOAD_LINKS[system]}/${version}`, '_blank')
}