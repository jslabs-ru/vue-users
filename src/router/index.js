import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/main/Home.vue';
import Users from '@/components/users/Users.vue';
import UserAccount from '@/components/users/UserAccount.vue';
import AddUser from '@/components/users/AddUser.vue';
import NotFound from '@/components/errors/404.vue';

/* playground components */
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
