import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0',name:"Asutosh sidhya"},
    {id:'1',name:"Aloka sidhya"},
    {id:'2',name:"Anna sidhya"}
]

const userSlice =createSlice({
    name:"user",
    initialState,
    reducers:{

    }
})

export const {  } = userSlice.actions
export default userSlice.reducer