import { store } from "@/redux/store";
import axios from "axios"
import toast from "react-hot-toast";

let ContentType = 'application/json';




export const FetchApi = async ({
    method = 'get',
    url = '',
    data = {},
    callback = () => { },
    isToast = false
}) => {
    try {
        const instance = axios.create({
            baseURL: process.env.NEXT_PUBLIC_BASE_API, // Set a base URL for all requests
            // timeout: 5000, // Set a timeout for requests (in milliseconds)
            headers: {
                'Authorization': `Bearer ${store.getState().auth?.user?.accessToken}`, // Authorization header
                // 'Content-Type': ContentType,
            }
        });
        let response;
        if (method === 'get') {
            response = await instance.get(url);
        } else if (method === 'post') {
            response = await instance.post(url, data);
        } else if (method === 'put') {
            response = await instance.put(url, data);
        }else if (method === 'patch') {
            response = await instance.patch(url, data);
        } else if (method === 'delete') {
            response = await instance.delete(url);
        } else {
            throw new Error('Invalid HTTP method');
        }
        callback()
        const res = { data: response?.data, status: response?.status, }
        if (isToast) {
            toast.success(res.data.message)
        }
        return res
    } catch (error) {
        console.error('Request failed:', error);
        toast.error(`${(error.response?.data?.message || error.response?.data?.error) || 'Something went wrong'}`)
        // return error.response?.data
        // throw error;
    }
}