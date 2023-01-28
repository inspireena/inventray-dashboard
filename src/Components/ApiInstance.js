import axios from "axios";
const instance = axios.create({
    baseURL: 'https://staging-inventory.infyulabs.com',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',

    }
});
instance.defaults.headers.common['Authorization'] = localStorage.getItem('token') || '';
export default instance;