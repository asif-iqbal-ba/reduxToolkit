import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 10,
        isLoading: false,
    },
    reducers:{
        increment: (state)=>{
            state.value +=1
        },
        decrement: (state)=>{
            state.value -=1
        }
    }
})

export const {increment, decrement} = counterSlice.actions


export const selectCount = (state) => ({
    value: state.counter.value,
    isLoading: state.counter.isLoading,
})

export default counterSlice.reducer