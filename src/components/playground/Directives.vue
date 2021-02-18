<template>
    <div class="blog-post">
        <div v-html="content"></div>
    </div>
</template>

<script>
export default {
    name: 'Directives',
    data () {
        return {
            content: `<p class="tip">In <a href="../guide/single-file-components.html">single-file components</a>, <code>scoped</code> styles will not apply to content inside <code>v-html</code>, because that HTML is not processed by Vue’s template compiler. If you want to target <code>v-html</code> content with scoped CSS, you can instead use <a href="https://vue-loader.vuejs.org/en/features/css-modules.html" target="_blank" rel="noopener">CSS modules</a> or an additional, global <code>&lt;style&gt;</code> element with a manual scoping strategy such as BEM.</p>`
        }
    }
}
</script>
