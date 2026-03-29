import{ createSlice} from '@reduxjs/toolkit'

export const countSlice = createSlice({
    initialState:0,
    name:'counter',
    reducers:{
        increment : (state) => state + 1,
        decrement : (state) => state - 1
    }
});
export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;


