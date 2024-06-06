import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
      path: "/",
      redirect: "/index"
    },
    {
        path: "/index",
        name: "home",
        component: () => import("@/views/index/index.vue")
    },
    {
        path: "/community",
        name: "community",
        component: () => import("@/views/community/index.vue")
    },
    {
        path: "/welfare",
        name: "welfare",
        component: () => import("@/views/welfare/index.vue")
    },
    {
        path: "/my",
        name: "my",
        component: () => import("@/views/my/index.vue")
    },
]

export default createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'selected',
})