<template>
    <table class="table table-bordered" v-if="users.length">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col" class="pointer">Name</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            <tr class="table-row pointer"
                v-for="(user, index) in users"
                v-on:click="navigateToUserAccount(user)"
            >
                <td scope="row">{{ user.id }}</td>
                <td scope="row">{{ user.name }}</td>
                <td scope="row">{{ user.email }}</td>
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
        }
    }
}
</script>

<style>
ul.users-list {
    list-style-type: none;
}
</style>
