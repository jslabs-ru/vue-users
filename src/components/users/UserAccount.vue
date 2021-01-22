<template>
    <div>
        {{ user }} account
    </div>
</template>

<script>

export default {
    name: 'UserAccount',
    components: {

    },
    computed: {
        user () {
            return this.$route.params['user'];
        }
    }
}
</script>
