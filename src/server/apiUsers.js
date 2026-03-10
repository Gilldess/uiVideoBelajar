import { axiosInstance } from "../lib/apibase"

export const apiUsers = {
    createUser: async (data) => {
        const response = await axiosInstance.post('/users', data)
        return response.data
    },
    getUsers: async () => {
        const response = await axiosInstance.get('/users')
        return response.data
    },
    deleteUser: async (id) => {
        const response = await axiosInstance.delete(`/users/${id}`)
        return response.data
    },
    updateUser: async (id, data) => {
        const response = await axiosInstance.put(`/users/${id}`, data)
        return response.data
    }
}