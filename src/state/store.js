import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/counter/counterSlice.js'
import postReducer from '../components/social/socialSlice.js'
import  userReducer  from '../components/user/userSlice.js'



export const store = configureStore({
    reducer:{
        counter:counterReducer,
        posts:postReducer,
        user:userReducer
    }
})