<template>
    <b-container>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand to="/">App</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/tasks/stages">Dashboard</b-nav-item>
                    <b-nav-item to="/users">Users</b-nav-item>
                    <b-nav-item to="/playground">Playground</b-nav-item>
                    <AuthStatus />
                </b-navbar-nav>
                <Search />
            </b-collapse>
        </b-navbar>

        <MessagesPannel
            v-bind:warn = "warn"
            v-bind:error = "error"
            v-bind:info = "info"
        />

        <RouterView name="errors" />
        <RouterView />

    </b-container>
</template>

<script>
import Vue from 'vue';

import Search from '@/components/Search.vue';
import MessagesPannel from '@/components/MessagesPannel.vue';
import AuthStatus from '@/components/auth/AuthStatus.vue';

export default {
    name: 'App',
    components: {
        Search,
        MessagesPannel,
        AuthStatus
    },
    data () {
        return {
            warn: null,
            error: null,
            info: null
        }
    },
    created () {
        Vue.config.warnHandler = (warn, vm, info) => {
            this.warn = warn;
            this.info = info;
        };

        Vue.config.errorHandler = (error, vm, info) => {
            this.error = error;
            this.info = info;
        };
    }
}
</script>
