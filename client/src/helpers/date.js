export const formatDateNum = (num) => `${num < 10 ? '0' : ''}${num}`

export const formatDate = (dateValue) => {
    try {
        const date = new Date(dateValue)
        return `${formatDateNum(date.getDate())}.${formatDateNum(date.getMonth() + 1)}.${date.getFullYear()}`
    } catch (e) {
        return ''
    }
}
