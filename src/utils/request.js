import axios from "axios"
import {notification} from "ant-design-vue"

const httpService = axios.create({
    baseURL: '',
    timeout: 10000
})

function request(options) {
    return httpService(options).then(res => {
        return res;
    }).catch(error => {
        const {response: {status, statusText}} = error;
        notification.error({
            message: status,
            description: statusText
        });
        return Promise.reject(error);
    });
}

export default request;


