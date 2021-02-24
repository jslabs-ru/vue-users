<template>
    <div>
        <div v-if="error" class="alert alert-danger" role="alert">{{ error.message }}</div>
        <div v-if="warn" class="alert alert-warning" role="alert">{{ warn.message }}</div>
        <div v-if="info" class="alert alert-info" role="alert">{{ info }}</div>
    </div>
</template>

<script>
export default {
    name: 'MessagesPannel',
    props: {
        warn: {type: Object},
        error: {type: Object},
        info: {type: String}
    }
}
</script>
