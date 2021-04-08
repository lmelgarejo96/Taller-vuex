const OPT_FORMAT = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
const FORMAT = new Intl.DateTimeFormat("es-PE", OPT_FORMAT);
export default class User {
    constructor({ login, id, html_url, name, avatar_url, location, created_at, public_repos, followers, following }) {
        this.username = login;
        this.id = id;
        this.githubURL = html_url;
        this.fullname = name;
        this.location = location;
        this.createdAt = created_at;
        this.publicRepos = public_repos;
        this.followers = followers;
        this.following = following;
        this.avatar = avatar_url;
    }

    getTotalRepos() {
        return this.publicRepos + 5;
    }
    getJoinedDate() {
        return "Se unió: " + FORMAT.format(Date.parse(this.createdAt));
    }
}