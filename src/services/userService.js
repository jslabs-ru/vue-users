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

    getCurrentUserAccountData (userid) {
        let url = `${USERS_ENDPOINT}/${userid}`;
        console.log(url);
        return axios({
            url
        }).then(res => {
            return res.data;
        }).catch(error => {
            throw new Error('[UserService getCurrentUserAccountData]' + error.message)
        })
    }
}

export default UserService;
