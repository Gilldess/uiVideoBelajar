import { axiosInstance } from "../lib/apibase"

export const apiVideo = {
    createVideo: async (data) => {
       const response = await axiosInstance.post('/video', data)
       return response.data
    },
    getVideo: async () => {
        const response = await axiosInstance.get('/video')
        return response.data
    },
    deleteVideo: async (id) => {
        const response = await axiosInstance.delete(`/video/${id}`)
        return response.data
    },
    updateVideo: async (id, data) => {
        const response = await axiosInstance.put(`/video/${id}`, data)
        return response.data
    }
}