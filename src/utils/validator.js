export const required = (value = '') => {
    value = value.trim();
    if (!value) return 'Обязательное поле!';
    return undefined;
}

export const LengthPhone = (value = '') => {
    value = value.trim();
    value = value.split('_');
    if (value.length > 1) return `Неверный номер!`;
    return undefined;
}

export const isEmail = (value = '') => {
    value = value.trim();
    if (value.length !== 0) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(value).toLowerCase())) return 'Неверный формат E-mail';
    }
    return undefined;
}