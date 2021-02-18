<template>
    <div>
        {{ fullName }}
    </div>
</template>

<script>
export default {
    name: 'Computed',
    data () {
        return {
            firstName: 'Robert',
            lastName: 'Burns'
        }
    },
    computed: {
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    },
    mounted () {
        setTimeout(() => {
            this.lastName = 'Frost'
        }, 2000)
    }
}
</script>
