import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/main/Home.vue';
import Users from '@/components/users/Users.vue';
import UserAccount from '@/components/users/UserAccount.vue';
import AddUser from '@/components/users/AddUser.vue';
import NotFound from '@/components/errors/404.vue';

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
        path: '/users/:user',
        component: UserAccount
    },
    {
        path: '/admin/add_user',
        component: AddUser
    },
    {
        path: '*',
        component: NotFound
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
