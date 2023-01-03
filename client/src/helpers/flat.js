const isObject = (data) => typeof data === 'object' && !Array.isArray(data) && data !== null

const flatRecursive = (res, key, val) => {
    return isObject(val)
        ? Object.keys(val).reduce((prev, curr) => flatRecursive(prev, curr, val[curr]), res)
        : Object.assign(res, { [key]: val});
}

export const flat = (input) => {
    return Object.keys(input).reduce((prev, curr) => flatRecursive(prev, curr, input[curr]), {});
}
