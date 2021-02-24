import Vue from 'vue';
import UserService from '@/services/userService';

import {
    FETCH_USERS,
    FETCH_USER_ACCOUNT_DATA
} from '@/store/actions.type';

import {
    SET_USERS
} from '@/store/mutations.type';

const state = {
    users: []
}

const actions = {
    [FETCH_USERS]: (context) => UserService.getAll(),
    [FETCH_USER_ACCOUNT_DATA]: (context, id) => UserService.getUserAccountData(id),
}

const mutations = {
    [SET_USERS] (state, users) {
        Vue.set('users', users);
    }
}

const getters = {
    usersCount (state) {
        return state.users.length;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
