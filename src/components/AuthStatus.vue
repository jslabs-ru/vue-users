<template>
    <b-nav-item-dropdown>
        <template #button-content>
            <span v-if="$auth.isAuthenticated">
                {{ $auth.user.name }}
            </span>
            <span v-else>
                Sign In
            </span>
        </template>
        <div v-if="$auth.isAuthenticated">
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </div>
    </b-nav-item-dropdown>
</template>

<script>
export default {
    methods: {

    }
}
</script>
