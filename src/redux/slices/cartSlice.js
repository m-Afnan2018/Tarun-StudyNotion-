import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   totalItems:localStorage.getItem("totalItems")?JSON.parse(localStorage.getItem("totalItems")):null
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        setCart : (state,value)=>{
            state.total = value.payload
        }
    }
});

export const{setCart} = cartSlice.actions;

export default cartSlice.reducer;

