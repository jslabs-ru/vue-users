<template>
    <div>
        <h3>Vue.js App</h3>
        <div id="nav">
            <RouterLink to="/">Home</RouterLink> |
            <RouterLink to="/users">Users</RouterLink>
        </div>
        <RouterView />
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>
