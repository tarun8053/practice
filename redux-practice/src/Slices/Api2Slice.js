import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUsers = createAsyncThunk(
    'user/fetchUserss',
    async () => {
        const respond = await axios.get('https://jsonplaceholder.typicode.com/users')
        return respond.data
    }
)
export const apiCalling = createSlice({
    name:"api2",
    initialState:{
        data2:[],
        loading2:false,
        error2:null
    },
    reducers:{},
    extraReducers:(builder) => {
        builder
         .addCase(fetchUsers.pending, (state) => {
            state.loading = true
         })
         .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.data2 = action.payload
         })
         .addCase(fetchUsers.rejected, (state) => {
            state.error = "Error Occured"
         })
    }
});
export default apiCalling.reducer;