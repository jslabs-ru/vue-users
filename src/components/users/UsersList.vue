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
                    v-on:click="navigateToUserAccount(user)"
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
import noop from '@/utils/noop';

export default {
    name: 'UsersList',
    props: {
        users: {type: Array}
    },
    methods: {
        navigateToUserAccount ({ userid }) {
            this.$router.push({path: `/users/${userid}`}, noop);
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
