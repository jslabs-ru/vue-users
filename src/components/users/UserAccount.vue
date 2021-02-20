<template>
    <div v-if="accountData">
        <span class="user-name">{{ accountData.name }}</span>'s account
    </div>
</template>

<script>
import UserService from '@/services/userService';

export default {
    name: 'UserAccount',
    data () {
        return {
            accountData: null
        }
    },
    beforeRouteEnter (to, from, next) {
        UserService.getCurrentUserAccountData(to.params.userid)
            .then(accountData => {
                next(vm => {
                    vm.setCurrentUserAccountData(accountData)
                })
            })
    },
    methods: {
        setCurrentUserAccountData (accountData) {
            this.accountData = accountData;
        }
    },
    computed: {
        userid () {
            return this.$route.params['userid'];
        }
    }
}
</script>

<style>
.user-name {
    color: red;
}
</style>
