import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/main/Home.vue';
import Users from '@/components/users/Users.vue';
import AddUser from '@/components/users/AddUser.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/users',
        component: Users
    },
    {
        path: '/users/add_user',
        component: AddUser
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
