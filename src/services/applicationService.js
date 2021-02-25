import axios from 'axios';

const ApplicationService = {
    ping () {
        return axios({
            url: '/api/v1/ping'
        }).then(res => {
            return res.data;
        })
    }
}

export default ApplicationService;
