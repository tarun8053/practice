import {configureStore} from '@reduxjs/toolkit'
import  counterSlice from './Slices/CounterSlice';
import apiReducer from './Slices/ApiSlice';
import apiReducer2 from './Slices/Api2Slice';

export const store = configureStore({
    reducer : {
       counter :counterSlice,
       api: apiReducer,
       api2:apiReducer2
    }
});