const Storage = window.localStorage;

export function getItem(name) {
    return Storage.getItem(name);
}
export function setItem(name, value) {
    return Storage.setItem(name, value);
}
export function removeItem(name) {
    return Storage.removeItem(name);
}