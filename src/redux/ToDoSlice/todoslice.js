import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const ToDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
       
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const {  } = ToDoSlice.actions

export default ToDoSlice.reducer