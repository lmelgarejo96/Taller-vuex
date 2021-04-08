import Vue from "vue";
import Home from "@/views/Home.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home-view",
        component: Home
    },
    {
        path: "/contador",
        name: "counter-view",
        component: () =>
            import ("@/views/Contador.vue")
    },
    {
        path: "/repositorios",
        name: "repos-view",
        component: () =>
            import ("@/views/Repositorios.vue")
    }

]

const router = new VueRouter({
    routes,
    //mode: "history"
})

export default router;