<template>
    <div>
        <h3>Vue.js App is rendered!</h3>
        <UsersList />
    </div>
</template>

<script>
import UsersList from '@/components/UsersList';

export default {
    name: 'App',
    components: {
        UsersList
    }
}
</script>
