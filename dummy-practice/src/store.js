import { configureStore } from "@reduxjs/toolkit";
import counter from './Slices/CounterSlice'
import api from './Slices/ApiSlice'
export const store = configureStore({
    reducer : {
        counter : counter,
        api : api
    }
})