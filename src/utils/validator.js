export const required = (value = '') => {
    value = value.trim();
    if (!value) return 'Обязательное поле!';
    return undefined;
}
export const isLatin = (value = '') => {
    value = value.trim();
    const re = /^[a-zA-Z0-9]+$/;
    if (value.length !== 0) {
        if (!re.test(String(value).toLowerCase())) return 'Поле может содержать только буквы латинского алфавита и цифры!';
    }
    return undefined;
}
export const LengthPhone = (value = '') => {
    value = value.trim();
    value = value.split('_');
    if (value.length > 1) return `Неверный номер!`;
    return undefined;
}
export const LengthName = (value = '') => {
    value = value.trim();
    if (value.length > 20 || value.length < 4) return `Минимальная длина имени 4, максимальная 20 символов!`;
    return undefined;
}
export const LengthPwd = (value = '') => {
    value = value.trim();
    if (value.length > 20 || value.length < 6) return `Минимальная длина пароля 6, максимальная 20 символов!`;
    return undefined;
}
export const isThreeWords = (value = '') => {
    value = value.trim().split(' ');
    if (value.length < 3 || value.length > 3) return 'Поле должно состоять из 3 слов!';
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
export const isSymbols = (value = '') => {
    value = value.trim();
    const re = !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(value);
    if (!re) return 'Поле не должно содержать специальных символов!';
    return undefined;
}
export const isEqual = (value = '') => {
    const valueById = document.getElementById('password').value.trim();
    value = value.trim();
    if (value !== valueById) return 'Поля не совпадают!';
    return undefined;
}