<template>
    <table class="table table-bordered" v-if="users.length">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col" class="pointer">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Edit</th>
            </tr>
        </thead>
        <tbody>
            <tr class="table-row"
                v-for="(user, index) in users"
            >
                <td scope="row" class="pointer">{{ user.id }}</td>
                <td scope="row" class="pointer"
                    v-on:click="openUserAccount(user)"
                >{{ user.name }}</td>
                <td scope="row" class="pointer">{{ user.email }}</td>
                <td scope="row" class="pointer"
                    v-on:click="editUserData(user)"
                >edit</td>
            </tr>
        </tbody>
    </table>
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
    },
    methods: {
        openUserAccount ({ userid }) {
            this.$router.push({path: `/users/${userid}`});
        },
        editUserData (user) {
            console.log('editUserData...', user);
        }
    }
}
</script>

<style>
ul.users-list {
    list-style-type: none;
}
</style>
