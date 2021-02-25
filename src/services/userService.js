import axios from 'axios';

const USERS_ENDPOINT = '/api/v1/users';

const UserService = {
    getAll () {
        return axios({
            url: USERS_ENDPOINT
        }).then(res => {
            return res.data;
        }).catch(error => {
            throw new Error('[UserService getAll]' + error.message)
        })
    },

    getUserAccountData (userid) {
        return axios({
            url: `${USERS_ENDPOINT}/${userid}`
        }).then(res => {
            return res.data;
        }).catch(error => {
            throw new Error('[UserService getUserAccountData]' + error.message)
        })
    },

    saveAccountData (data) {
        let { userid } = data;

        return axios({
            url: `${USERS_ENDPOINT}/${userid}`,
            method: 'put',
            data
        }).then(res => {
            return res.data;
        }).catch(error => {
            throw new Error('[UserService getUserAccountData]' + error.message)
        })
    },

    deleteUserAccount (userid) {
        return axios({
            url: `${USERS_ENDPOINT}/${userid}`,
            method: 'delete'
        }).then(res => {
            return res.data;
        }).catch(error => {
            throw new Error('[UserService deleteUserAccount]' + error.message)
        })
    }
}

export default UserService;
