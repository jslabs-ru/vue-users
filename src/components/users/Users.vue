<template>
    <div>
        <UsersList v-bind:users="users" />
    </div>
</template>

<script>
import UserService from '@/services/userService';

import UsersList from '@/components/users/UsersList.vue';

export default {
    name: 'Users',
    components: {
        UsersList
    },
    data () {
        return {
            users: []
        }
    },
    created () {
        UserService.getAll()
            .then(users => {
                this.users = users;
            })
    },
    methods: {
        setUsers (users) {
            this.users = users;
        }
    }
}
</script>
