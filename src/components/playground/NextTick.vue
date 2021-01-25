<template>
    <div>
        <div class="alert alert-warning" role="alert">
            {{ status }}
        </div>
        <span ref="message-container">{{ message }}</span>
    </div>
</template>

<script>
export default {
    name: 'NextTick',
    data () {
        return {
            status: '',
            message: 'Not updated'
        }
    },
    mounted () {
        this.status = this.$refs['message-container'].textContent;
        this.updateMessage();

        this.$nextTick(() => {
            this.status = this.$refs['message-container'].textContent;
        })
    },
    methods: {
        updateMessage () {
            this.message = 'Updated';
        }
    }
}
</script>
