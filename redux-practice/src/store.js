import {configureStore} from '@reduxjs/toolkit'
import  counterSlice from './Slices/CounterSlice';
import apiReducer from './Slices/ApiSlice';

export const store = configureStore({
    reducer : {
        counter :counterSlice,
       api: apiReducer
    }
});