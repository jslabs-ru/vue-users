import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/main/Home.vue';
import TasksStagesPanel from '@/components/tasks/TasksStagesPanel.vue';
import Users from '@/components/users/Users.vue';
import UserAccount from '@/components/users/UserAccount.vue';
import AddUser from '@/components/users/AddUser.vue';

import Errors from '@/components/errors/Errors.vue';
import NotFound from '@/components/errors/404.vue';

import Profile from '@/components/auth/Profile.vue';
import Logout from '@/components/auth/Logout.vue';

import { authGuard } from "@/auth";

/* playground components */
import Playground from '@/components/playground/Playground.vue';
import ArrayReactivity from '@/components/playground/ArrayReactivity.vue';
import NextTick from '@/components/playground/NextTick.vue';
import RenderFunction from '@/components/playground/RenderFunction.vue';
import Directives from '@/components/playground/Directives.vue';
import Computed from '@/components/playground/Computed.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/tasks/stages',
        components: {
            default: TasksStagesPanel,
            errors: Errors
        }
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
        path: '/logout',
        component: Logout,
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
        path: '/playground/directives',
        component: Directives
    },
    {
        path: '/playground/computed',
        component: Computed
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
