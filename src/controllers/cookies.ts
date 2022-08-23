
/**
 * Create and set cookie value
 * 
 * @param {String} name the cookie name.
 * @param {String} value his value.
 */

export function setCookie (name: string, value: string) {
    const date = new Date();
    
    date.setTime(date.getTime() + 3600);
    document.cookie = `${name}=${value};${date.toUTCString()};path=/`;
}


/**
 * Get cookie value
 * 
 * @param {String} name the name of the cookie
 * @returns {String|null} response
 */

export function getCookie (name: string): string|null {
    name += "=";

    var a = decodeURIComponent(document.cookie).split(';');

    for (let i = 0; i < a.length; i++) {
        var cookie = a[i];
        while (cookie.charAt(0) === ' ') cookie = cookie.substring(1);

        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return null;
}


/**
 * Remove cookie.
 * 
 * @param {String} name
 * @returns {Boolean} is success
 */

export function deleteCookie (name: string) {
    // 
};

// Export default
const funcs = {
    setCookie,
    getCookie,
    deleteCookie
};

export default funcs;
