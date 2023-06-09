const baseURL = import.meta.env.VITE_APP_API_DOWNLOAD_URL
if (!baseURL) {
    console.error('No base URL')
}

export const DOWNLOAD_LINKS = {
    windows: 'browser-profiles-windows.exe',
    macosIntel: 'browser-profiles-mac.dmg',
    linux: 'browser-profiles-linux.AppImage',
}

export const LATEST_VERSION = '100'

export const downloadFile = (system, version = LATEST_VERSION) => {
    if (!DOWNLOAD_LINKS[system]) {
        console.error('Wrong download system', system)
    }

    window.open(`${baseURL}/${version}/${DOWNLOAD_LINKS[system]}`, '_blank')
}
