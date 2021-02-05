import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/main/Home.vue';
import Users from '@/components/users/Users.vue';
import UserAccount from '@/components/users/UserAccount.vue';
import Profile from '@/components/users/Profile.vue';
import AddUser from '@/components/users/AddUser.vue';
import NotFound from '@/components/errors/404.vue';

import { authGuard } from "@/auth";

/* playground components */
import Playground from '@/components/playground/Playground.vue';
import ArrayReactivity from '@/components/playground/ArrayReactivity.vue';
import NextTick from '@/components/playground/NextTick.vue';
import RenderFunction from '@/components/playground/RenderFunction.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/users',
        component: Users,
        beforeEnter: authGuard
    },
    {
        path: '/users/:user',
        component: UserAccount,
        beforeEnter: authGuard
    },
    {
        path: '/profile',
        component: Profile,
        beforeEnter: authGuard
    },
    {
        path: '/admin/add_user',
        component: AddUser
    },
    {
        path: '/playground',
        component: Playground
    },
    {
        path: '/playground/array_reactivity',
        component: ArrayReactivity
    },
    {
        path: '/playground/next_tick',
        component: NextTick
    },
    {
        path: '/playground/render_function',
        component: RenderFunction
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
