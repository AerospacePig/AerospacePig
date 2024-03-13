import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ItemPage from '../views/ItemPage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/itemPage/:id',
        name: 'itemPage',
        component: ItemPage,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router