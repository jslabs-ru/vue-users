<template>
    <div>
        <h5>Our users:</h5>
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
