import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ItemPage from '../views/ItemPage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/itemPage/:id/:title/:author/:date',
        name: 'itemPage',
        component: ItemPage,
        props: true
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router