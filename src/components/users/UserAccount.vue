<template>
    <div><span class="user-name">{{ user }}</span> account</div>
</template>

<script>
import traceCurrentRoute from '@/mixins/traceCurrentRoute';

export default {
    name: 'UserAccount',
    mixins: [
        traceCurrentRoute
    ],
    computed: {
        user () {
            return this.$route.params['user'];
        }
    }
}
</script>

<style>
.user-name {
    color: red;
}
</style>
