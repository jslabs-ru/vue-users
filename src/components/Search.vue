<template>
    <b-navbar-nav class="ml-auto">
        <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2"
                placeholder="Search"
                v-model="user"
            ></b-form-input>

            <b-button size="sm" class="my-2 my-sm-0"
                v-on:click="onSearchSubmit"
            >Search</b-button>
        </b-nav-form>
    </b-navbar-nav>
</template>

<script>
import noop from '@/utils/noop';

export default {
    data () {
        return {
            user: ''
        }
    },
    methods: {
        onSearchSubmit (e) {
            this.$router.push({path: `/users/${this.user}`}, noop);
            e.preventDefault();
        }
    }
}
</script>
