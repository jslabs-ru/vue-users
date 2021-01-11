import axios from 'axios';

const USERS_ENDPOINT = '/api/v1/users';

/* TODO: realize CRUD actions */

const UserService = {
    getAll () {
        return axios({
            url: USERS_ENDPOINT
        }).then(res => {
            return res.data;
        }).catch(error => {
            throw new Error('[UserService getAll]' + error.message)
        })
    }
}

export default UserService;
