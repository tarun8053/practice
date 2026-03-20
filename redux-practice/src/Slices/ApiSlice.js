import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
export const fetchUser  = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const respond = await axios.get('https://jsonplaceholder.typicode.com/users')
        return respond.data
    }
)
export const ApiSlice = createSlice({
    name:'api',
    initialState:{
        data:[],
        loading : false,
        error : null
    },
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(fetchUser.pending, (state) =>{
            state.loading = true
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
        })
        .addCase(fetchUser.rejected,(state) => {
            state.loading = false;
            state.error = 'Error fetch data'
        })
    }
        
    
})
export default ApiSlice.reducer;