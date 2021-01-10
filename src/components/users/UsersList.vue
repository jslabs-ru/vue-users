<template>
    <ul class="users-list">
        <li v-for="(name, index) in users">{{ name }}</li>
    </ul>
</template>

<script>
export default {
    name: 'UsersList',
    data () {
        return {
            users: [
                'Alice',
                'Robert',
                'John',
                'Lucy',
                'Michael'
            ]
        }
    }
}
</script>

<style>
ul.users-list {
    list-style-type: none;
}
</style>
