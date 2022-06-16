/**
 * Used for custom validations
 * @param {String} id
 * @param {String} title
 * @param {Date} date
 * @param {String} abstract
 * @param {String} externalLink
 * @param {Array} tags
 * @param {Boolean} externalEntry
 */
class BlogEntry {
    constructor(id, title, date, abstract, externalLink, tags, externalEntry) {
        this.id = id
        this.title = title
        this.date = date
        this.abstract = abstract
        this.externalLink = externalLink
        this.tags = tags
        this.externalEntry = externalEntry
    }
}

export { BlogEntry }
