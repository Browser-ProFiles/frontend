export const get = (path, t) => path.split('.').reduce((r, k) => r?.[k], t)

export const set = (obj, str, val) => {
    str = str.split('.')
    while (str.length > 1) {
        obj = obj[str.shift()]
    }

    return obj[str.shift()] = val;
}
