import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://11-11-2023-bistro-boss-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;