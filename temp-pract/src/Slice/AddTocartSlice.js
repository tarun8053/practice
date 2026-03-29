import {createSlice} from '@reduxjs/toolkit'

export const AddToCartSlice = createSlice({
    name:"addTocart",
    initialState:{
        data:[]
    },
    reducers:{
        addTocart : (state, action )=> {
            const item = action.payload;
            const isExist = state.data.find(i => i.id === item.id);
            if(!isExist){
                state.data.push({...item, quantity : 1});
            }else{
               isExist.quantity +=  1;
            }
        },
        removeCart : (state, action) => {
            const id = action.payload;
            state.data = state.data.filter( item => item.id !== id);
        }
    }
});

export const {addTocart, removeCart} = AddToCartSlice.actions;
export default  AddToCartSlice.reducer;