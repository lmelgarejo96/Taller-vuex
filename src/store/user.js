import axios from "@/plugins/axios";
import User from "@/models/User";
import Repository from "@/models/Repository";

const state = {
    username: "lmelgarejo96", //default username
    githubUser: {},
    repositories: [],
    loader: false
}

const getters = {
    getUser(state) {
        return state.githubUser;
    },
    getRepositories(state) {
        return state.repositories;
    }
}

const mutations = {
    setUsername(state, username) {
        state.username = username
    },
    setGithubUser(state, user) {
        state.githubUser = user;
    },
    setUserRepositories(state, repos) {
        state.repositories = repos;
    },
    setLoaderStatus(state, bool) {
        state.loader = bool;
    },
}

const actions = {
    async getAPIGithubUser({ state, commit }, username) {
        commit("setLoaderStatus", true);
        const { data, status } = await axios.get(`/users/${username || state.username}`);
        commit("setLoaderStatus", false);
        console.log({ data, status });
        if (status != 200) {
            commit("setGithubUser", {});
            commit("setUsername", "");
            return;
        };
        commit("setUsername", data.login);
        commit("setGithubUser", new User(data));
    },
    async getAPIGithubRepositories({ state, commit }, username) {
        commit("setUserRepositories", []);
        const { data, status } = await axios.get(`/users/${username || state.username}/repos`);
        console.log({ data, status });
        if (status != 200) return;
        const repos = data.map(r => new Repository(r));
        commit("setUserRepositories", repos);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}