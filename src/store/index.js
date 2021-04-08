import Vue from "vue";
import Vuex from "vuex";
// modules
import user from "./user";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: "Luis Melgarejo",
        //
    },
    mutations: {

    },
    actions: {

    },
    modules: {
        user: user
    },
});