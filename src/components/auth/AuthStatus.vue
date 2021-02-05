<template>
    <div>
        <b-nav-item-dropdown v-if="$auth.isAuthenticated">
            <template #button-content>
                {{ $auth.user.name }}
            </template>
            <b-dropdown-item href="/profile">Profile</b-dropdown-item>
            <b-dropdown-item @click.prevent="logout">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item
            v-else
            @click.prevent="login"
        >
            <span v-if="!$auth.loading">Log In</span>
        </b-nav-item>
    </div>
</template>

<script>
export default {
    methods: {
        login() {
            this.$auth.loginWithRedirect();
        },
        logout() {
            this.$auth.logout();
        }
    }
}
</script>
