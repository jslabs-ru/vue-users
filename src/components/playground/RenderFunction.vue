<script>
export default {
    data () {
        return {
            clickCount: 0
        }
    },
    computed: {
        backgroundColor () {
            return {
                'orange': this.clickCount % 2 === 0,
                'blue': this.clickCount % 2 !== 0
            };
        }
    },
    methods: {
        onClick () {
            this.clickCount += 1;
        }
    },
    render (createElement) {
        const button = createElement('button', {
            type: 'button',
            class: 'btn btn-primary',
            on: {
                click: this.onClick
            }
        }, 'Click me');

        const counter = createElement('div', {
            class: this.backgroundColor,
        }, [
            'Clicks count: ',
            this.clickCount
        ]);

        return createElement('div', {
            class: 'root',
        }, [button, counter])
    }
}
</script>

<style scoped>
.root {
    margin-top: 20px;
}
.orange {
    background: #FFCC99
}
.blue {
    background: #CCFFFF
}
</style>
