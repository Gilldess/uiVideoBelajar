import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/apibase";

const initialState = {
    videos: [],
    status: "idle",
    error: null
}

export const getVideo = createAsyncThunk('videos/getVideo', async () => {
    const { data } = await axiosInstance.get('video')
    return data
})
export const addVideo = createAsyncThunk('videos/addVideo', async (items) => {
    const { data } = await axiosInstance.post('video', items)
    return data
})
export const deletDataVideo = createAsyncThunk('videos/deletDataVideo', async (id) => {
    await axiosInstance.delete(`video/${id}`)
    return id
})
export const updateVideo = createAsyncThunk('videos/updateVideo', async ({id, items}) => {
    const {data} = await axiosInstance.put(`video/${id}`, items)
    return data
})

const videoReducer = createSlice({
    name: "videos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getVideo.fulfilled, (state, action) => {
            state.videos = action.payload
        })
       .addCase(addVideo.fulfilled, (state, action) => {
        state.videos.push(action.payload)
       })
       .addCase(deletDataVideo.fulfilled, (state, action) => {
        state.videos = state.videos.filter((video)=> video.id !== action.payload )
       })
       .addCase(updateVideo.fulfilled, (state, action)=> {
        const index =  state.videos.findIndex((video)=> video.id === action.payload.id)
        if (index !== -1) {
            state.videos[index] = action.payload
        }
       })

        .addMatcher(
            (action) => action.type.endsWith("/pending"),
            (state) => {
                state.status = "loading"
                state.error = null
            }
        )
        .addMatcher(
            (action) => action.type.endsWith("/rejected"),
            (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            }
        )
        .addMatcher(
            (action) => action.type.endsWith("/fulfilled"),
            (state) => {
                state.status = "success"
                state.error = null
            }
        )
    }
})

export default videoReducer.reducer