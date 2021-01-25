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
        let interval = setInterval(() => {
            this.addElement(i, moment().unix());
            i++;
            if(i > 5) clearInterval(interval);
        }, 1000)
    },
    methods: {
        addElement (index, value) {
            this.$set(this.items, index, value);
        }
    }
}
</script>
