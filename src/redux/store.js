import { configureStore } from '@reduxjs/toolkit'
import ToDoSlice  from './ToDoSlice/todoslice'

export const store = configureStore({
    reducer: {
        todo: ToDoSlice
    },
})