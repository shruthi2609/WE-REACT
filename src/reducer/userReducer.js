import { createSlice } from "@reduxjs/toolkit";
const userInitialValue={userName:" ",designation:" "}
const userSlice=createSlice(
    {
        name:"user",
        initialState:{value:userInitialValue},
        reducers:{
            login:(state,action)=>{
                state.value=action.payload
            },
            logout:(state)=>{
                state.value=userInitialValue
            }
        }
    }
)
export const {login,logout}=userSlice.actions
export default userSlice.reducer