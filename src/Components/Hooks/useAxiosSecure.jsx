import axios from 'axios';


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
})

const useAxiosSecure = () => {
    // Request interceptor to add authorization header for every secure call to the API
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('accessToken')
        console.log("stop by interceptor", token)
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        return Promise.reject(error)
    })
    return axiosSecure
};

export default useAxiosSecure;