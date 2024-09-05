import axiosInstance from './config/index'


// login
export async function login(data) {
    const response = await axiosInstance.post('/user/login', data)
    return response.data
}


// register
export async function register(data) {
    const response = await axiosInstance.post('/user/register', data)
    return response.data
}