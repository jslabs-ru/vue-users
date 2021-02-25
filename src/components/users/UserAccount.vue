<template>
    <b-tabs content-class="mt-3">
        <b-tab title="Edit" >
            <form
                v-if="accountData"
                v-on:submit.prevent="onSave"
            >
                <div class="form-group">
                    <label for="account-input-name">Name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="account-input-name"
                        v-bind:disabled="isDisabled"
                        v-model="name"
                    />
                    <small v-show="nameError" class="form-text danger">{{ nameErrorMessage }}</small>
                </div>

                <div class="form-group">
                    <label for="account-input-email">Email</label>
                    <input
                        type="email"
                        class="form-control"
                        id="account-input-email"
                        v-model="email"
                    />
                    <small v-show="emailError" class="form-text danger">{{ emailErrorMessage }}</small>
                </div>

                <button
                    type="submit"
                    class="btn btn-primary"
                    v-if="!nameError && !emailError"
                    v-on:click="onSave"
                >Save</button>
            </form>
            <alert v-else class="danger">Account is not found</alert>

        </b-tab>
        <b-tab
            v-if="accountData"
            title="Dangerous"
        >
            <button
                type="submit"
                class="btn btn-danger"
                v-on:click="onDelete"
            >Delete this user</button>
        </b-tab>
    </b-tabs>
</template>

<script>
import UserService from '@/services/userService';

const EMPTY_EMAIL_ERROR_MESSAGE = 'Email should not be empty';
const NOT_VALID_EMAIL_ERROR_MESSAGE = 'Email is not valid';
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const CONFIRMATION_DELETE_MESSAGE = 'Delete this user?';

export default {
    name: 'UserAccount',
    data () {
        return {
            isDisabled: false,
            nameError: false,
            nameErrorMessage: 'Name should not be empty',
            emailError: false,
            emailErrorMessage: null,
            accountData: null
        }
    },
    created () {
        UserService.getUserAccountData(this.userid)
            .then(accountData => {
                this.accountData = accountData;
            })
    },
    computed: {
        userid () {
            return this.$route.params['userid'];
        },
        name: {
            get () {
                return this.accountData.name;
            },
            set (name) {
                if(name.trim().length === 0) {
                    this.nameError = true;
                } else {
                    this.nameError = false;
                }
                this.accountData.name = name;
            }
        },
        email: {
            get () {
                return this.accountData.email;
            },
            set (email) {
                if(email.trim().length === 0) {
                    this.emailError = true;
                    this.emailErrorMessage = EMPTY_EMAIL_ERROR_MESSAGE;
                } else {
                    if(!email.match(EMAIL_REGEX)) {
                        this.emailError = true;
                        this.emailErrorMessage = NOT_VALID_EMAIL_ERROR_MESSAGE;
                    } else {
                        this.emailError = false;
                    }
                }
                this.accountData.email = email;
            }
        }
    },
    methods: {
        setCurrentUserAccountData (accountData) {
            this.accountData = accountData;
        },
        onSave () {
            if(!this.nameError && !this.emailError) {
                UserService.saveAccountData(this.accountData)
                    .then(res => {

                    })
            }
        },
        onDelete () {
            if (window.confirm(CONFIRMATION_DELETE_MESSAGE)) {
                UserService.deleteUserAccount(this.userid)
                    .then(res => {
                        this.$router.push({path: '/users'}, () => {})
                    })
            }
        }
    },
}
</script>

<style>
.danger {
    color: red;
}
</style>
