import { create } from "zustand";
import { apiVideo } from "../server/apiVideo";

const useApiVideo = create((set)=> ({
    dataVideo: [],
    isVideoLoading: false,
    isVideoError: null,
    getVideo: async () => {
        set({isVideoLoading: true})
        try {
            const data = await apiVideo.getVideo();
            set({dataVideo: data, isVideoError: null})
        } catch (error) {
            set({isVideoError: error.message})
        } finally {
            set({isVideoLoading: false})
        }
    },
    createVideo: async (data) => {
        set({isVideoLoading: true})
        try {
            const reponse = await apiVideo.createVideo(data);
            const video = reponse
            set((state) => ({
                dataVideo: [...state.dataVideo, video],
                isVideoError: null
            }))
        } catch (error) {
            set({isVideoError: error.message})
        } finally {
            set({isVideoLoading: false})
        }
    },
    deleteVideoId: async (id) => {
        set({isVideoLoading: true})
        try {
            await apiVideo.deleteVideo(id);
            set((state) => ({
                dataVideo: state.dataVideo.filter((video) => video.id !== id),
                isVideoError: null
            }))
        } catch (error) {
            set({isVideoError: error.message})
        } finally {
            set({isVideoLoading: false})
        }
    },
    editVideo: async (id, data) => {
        set({isVideoLoading: true})
        try {
            const response = await apiVideo.updateVideo(id, data);
            const updateData = response
            set((state) => ({
                dataVideo: state.dataVideo.map((video) => video.id === id ? updateData : video),
                isVideoError: null
            }))
        } catch (error) {
            set({isVideoError: error.message})
        } finally {
            set({isVideoLoading: false})
        }
    }
}))

export default useApiVideo