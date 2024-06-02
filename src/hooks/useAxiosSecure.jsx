import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-server-delta-nine.vercel.app'
})

const useAxiosSecure = () => {

    const { logOut, user } = useContext(AuthContext)
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptor', token)
        config.headers.Authorization = `Bearer ${token}`
        return config
    }, function (err) {
        return Promise.reject(err)
    })

    //interceptor 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async (error) => {
        const status = error.response.status
        console.log(error)
        // console.log('status error in the interceptor', status)
        if (status === 401 || status === 403) {
            await logOut()
            navigate('/login')
            console.log('i am form interceptor error');
        }
        return Promise.reject(error)
    })



    return axiosSecure
};

export default useAxiosSecure;