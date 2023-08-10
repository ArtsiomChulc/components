import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const getUsersAPI = {
    async getUsers() {
        const res = await instance.get('users');
        return res.data;
    }
}