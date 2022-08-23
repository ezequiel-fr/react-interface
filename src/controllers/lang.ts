import { getCookie, setCookie } from "./cookies";

/* eslint-disable import/no-anonymous-default-export */
export const changeLanguage = (lang: HTMLElement|string): void => setCookie('_lang',
    lang instanceof HTMLElement ? (lang instanceof HTMLOptionElement ? lang.value : lang.innerHTML) : lang
);

export const setLanguage = () => (
    (getCookie('_lang') === null) && setCookie('_lang', window.navigator.language.split('-')[0].toLowerCase())
);
