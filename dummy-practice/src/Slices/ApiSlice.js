import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const fetchUser = createAsyncThunk(
    'User/fetchUsers' , 
        async () => {
            
                const respond = await axios.get('https://jsonplaceholder.typicode.com/users');
                return respond.data;
         
        }
    
)

export  const ApiSlice = createSlice({
    initialState:{
        data:[],
        loading:false,
        error:null
    },
    name:'api',
    reducers:{},
    extraReducers : (builder) => {
        builder
        .addCase(fetchUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchUser.fulfilled, (state,action) => {
            state.loading = false;
            state.data = action.payload
        })
        .addCase(fetchUser.rejected, (state) => {
            state.loading =  false;
            state.error = "Something error occured"
        })
    }
});

export default ApiSlice.reducer;