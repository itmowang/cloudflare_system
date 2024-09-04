import axios from 'axios';

const API_BASE_URL = '/api';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000
});


axiosInstance.interceptors.request.use((config) => {
    return config
})

axiosInstance.interceptors.response.use((response) => {
    // 在响应成功返回之前做一些处理
    return response
});


export default axiosInstance
