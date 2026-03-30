import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/apibase";

const initialState = {
    users: [],
    status: "idle",
    error: null
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const {data} = await axiosInstance.get('/users')
    return data;
})
export const addUsers = createAsyncThunk("users/addUsers", async (data) => {
    const {data: addData} = await axiosInstance.post('/users', data)
    return addData;
})
export const deleteUsers = createAsyncThunk("users/deleteUsers", async (id) => {
    await axiosInstance.delete(`/users/${id}`)
    return id;
})
export const updateUsers = createAsyncThunk("users/updateUsers", async ({id, data}) => {
    const { data: updateData } = await axiosInstance.put(`/users/${id}`, data)
    return updateData;
})

const usersReducer = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
        .addCase(addUsers.fulfilled, (state, action) => {
            state.users.push(action.payload)
        })
        .addCase(deleteUsers.fulfilled, (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload)
        })
        .addCase(updateUsers.fulfilled, (state, action) => {
           const index = state.users.findIndex((user) => user.id === action.payload.id)
           if (index != -1) {
            state.users[index] = (action.payload)
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

export default usersReducer.reducer