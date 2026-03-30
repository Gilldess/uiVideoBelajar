import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './redux/usersReducer'
import videoReducer from './redux/videoReducer'

export const store = configureStore({
    reducer: {
        userStore: usersReducer,
        videoStore: videoReducer
    }
})