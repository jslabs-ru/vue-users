<template>
    <ul>
        <li v-for="(item, index) in links">
            <router-link v-bind:to="item.path">{{ item.name }}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Playground',
    data () {
        return {
            links: [
                {
                    path: '/playground/array_reactivity',
                    name: 'ArrayReactivity'
                },
                {
                    path: '/playground/next_tick',
                    name: 'NextTick'
                },
                {
                    path: '/playground/render_function',
                    name: 'RenderFunction'
                },
                {
                    path: '/playground/directives',
                    name: 'Directives'
                },
                {
                    path: '/playground/computed',
                    name: 'Computed'
                }
            ]
        }
    }
}
</script>
