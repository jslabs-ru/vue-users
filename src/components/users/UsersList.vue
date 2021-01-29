<template>
    <ul class="users-list">
        <li v-for="(name, index) in users">{{ name }}</li>
    </ul>
</template>

<script>
import axios from 'axios';

export default {
    name: 'UsersList',
    data () {
        return {
            users: []
        }
    },
    created () {
        axios({
            url: '/api/v1/users'
        }).then(res => {
            this.users = res.data;
        })
    }
}
</script>

<style>
ul.users-list {
    list-style-type: none;
}
</style>
