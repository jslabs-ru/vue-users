<template>
    <div class="alert alert-danger" role="alert">{{ JSON.stringify(errors) }}</div>
</template>

<script>
export default {
    name: 'Errors',
    data () {
        return {
            errors: ['Error 1', 'Error 2']
        }
    }
}
</script>
