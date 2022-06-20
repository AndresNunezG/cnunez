/**
 * @param {string} text string to slugify
 */
export function slugify (text) {
    return text.toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');
}

export const dateOptions = {
    timeZone: 'America/Bogota',
    year: 'numeric',
    month: 'long', day: 'numeric'
}