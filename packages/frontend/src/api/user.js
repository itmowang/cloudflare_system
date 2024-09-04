import axiosInstance from './config/index'


// login
export async function login(data) {
    console.log(123123);
    
    const response = await axiosInstance.post('/user/login', data)
    return response.data
}