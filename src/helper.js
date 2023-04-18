export function isValidString  (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}
export function isValidMobile (value) {
    return  /^[6-9]\d{9}$/.test(value)
}

export function isValidEmailSyntax (value) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
}
