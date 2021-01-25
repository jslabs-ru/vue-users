<template>
    <ul>
        <li v-for="(item, index) in items">
            {{ index }} - {{ item }}
        </li>
    </ul>
</template>

<script>
import moment from 'moment';

export default {
    name: 'ArrayReactivity',
    data () {
        return {
            items: []
        }
    },
    mounted () {
        let i = 0;
        this.interval = setInterval(() => {
            let timestamp = moment().unix();
            this.addElement(i, timestamp);
            i++;
            if(i > 3) {
                this.truncate(0);
                i = 0;
            }
        }, 1000)
    },
    destroy () {
        clearInterval(this.interval);
    },
    methods: {
        addElement (index, value) {
            this.$set(this.items, index, value);
        },
        truncate (length) {
            this.items.splice(length);
        }
    }
}
</script>
