const FORMATTER = new Intl.NumberFormat("en-US");
export default class Repository {
    constructor({ id, name, full_name, description, html_url, size, language, created_at }) {
        this.id = id;
        this.name = name;
        this.fullname = full_name;
        this.description = /* "Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement. " + */ description;
        this.repoURL = html_url;
        this.size = size;
        this.language = language;
        this.createdAt = created_at;
    }

    getSize() {
        return FORMATTER.format(this.size || 0) + " KB";
    }
}