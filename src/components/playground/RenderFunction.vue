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
                'message-container--orange': this.clickCount % 2 === 0,
                'message-container--blue': this.clickCount % 2 !== 0
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
            class: 'btn btn-primary btn-click-me',
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
            class: 'page-root',
        }, [button, counter])
    }
}
</script>

<style scoped>
.root {
    margin-top: 20px;
}
.message-container--orange {
    background: #FFCC99
}
.message-container--blue {
    background: #CCFFFF
}
</style>
