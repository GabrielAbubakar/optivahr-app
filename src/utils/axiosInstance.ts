import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://www.anapioficeandfire.com/api',
    timeout: 10000,
});

export default axiosInstance;