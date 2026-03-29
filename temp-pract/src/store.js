import { configureStore } from '@reduxjs/toolkit';
import addToCartReducer from './Slice/AddTocartSlice';

export const Store = configureStore({
    reducer: {
        addTocart: addToCartReducer
    }
});