import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : [],
}


export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addTocart : () =>{

        }
    }

})


export const { addTocart } = cartSlice.actions;

export default cartSlice.reducer;