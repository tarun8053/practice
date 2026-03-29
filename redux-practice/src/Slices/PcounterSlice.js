import { createSlice } from "@reduxjs/toolkit";

export const Pcounter = createSlice({
    initialState:0,
    name:'pcounter',
    reducers:{
        incr: (state) => state+1,
        dec:(state) => state-1
    }

})
export const {incr, dec} = Pcounter.actions;
export default Pcounter.reducer;
