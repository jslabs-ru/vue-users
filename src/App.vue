<template>
    <b-container>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand to="/">App</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/users">Users</b-nav-item>
                </b-navbar-nav>
                <Search />
            </b-collapse>
        </b-navbar>

        <RouterView />
    </b-container>
</template>

<script>
import Search from '@/components/Search.vue';

export default {
    name: 'App',
    components: {
        Search
    }
}
</script>
