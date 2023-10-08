import axios from 'axios';
const instance = axios.create({
    baseURL: "https://jwapi.netlify.app/"
});

export default instance;