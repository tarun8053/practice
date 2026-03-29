import { configureStore } from "@reduxjs/toolkit";
import pcounter from './Slices/PcounterSlice'

export const store = configureStore({
    reducer:{
        counter:pcounter
    }
});