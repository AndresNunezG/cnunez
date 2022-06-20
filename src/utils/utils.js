/**
 * @param {string} text string to slugify
 */
export function slugify (text) {
    return text.toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');
}