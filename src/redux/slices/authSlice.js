import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token:localStorage.getItem('token')?localStorage.getItem('token'):null,
    isLoading:false,
    signupData:null
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setToken : (state,value)=>{
            state.token = value.payload;
        },
        setLoading:(state,value)=>{
                state.isLoading=value.payload;
        } ,
        setSignup:(state,value)=>{
            state.signupData=value.payload;
        }
    }
});

export const{setToken,setLoading,setSignup} = authSlice.actions;

export default authSlice.reducer;

