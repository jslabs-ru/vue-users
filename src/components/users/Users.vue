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
    beforeRouteEnter (to, from, next) {
        UserService.getAll()
            .then(users => {
                next(vm => {
                    vm.setUsers(users)
                })
            })
    },
    methods: {
        setUsers (users) {
            this.users = users;
        }
    }
}
</script>
