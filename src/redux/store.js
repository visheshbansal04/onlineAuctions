import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import customerReducer from './slices/customerSlice'


export const store=configureStore({
    reducer:{
        user:userReducer,
        customers:customerReducer
    }
})