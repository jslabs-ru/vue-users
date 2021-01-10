<template>
    <div>
        <h3>Vue.js App</h3>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/users">Users</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>
