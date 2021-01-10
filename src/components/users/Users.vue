<template>
    <div>
        <UsersList />
    </div>
</template>

<script>
import UsersList from '@/components/users/UsersList.vue';

export default {
    name: 'Users',
    components: {
        UsersList
    }
}
</script>
