import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [
        {
            id: 1,
            title: "Web Design Task",
            isDone: false,
        },
        {
            id: 2,
            title: "Web Development Task",
            isDone: false,
        },
        {
            id: 3,
            title: "Social Media Marketing",
            isDone: true,
        },
        {
            id: 4,
            title: "Learn JavaScript",
            isDone: false,
        },
    ],
    filter: "all",
}

export const ToDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const title = action.payload.trim()

            if (title) {
                state.todoList.unshift({
                    id: Date.now(),
                    title,
                    isDone: false,
                })
            }
        },
        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter((todo) => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            const todo = state.todoList.find((todo) => todo.id === action.payload)

            if (todo) {
                todo.isDone = !todo.isDone
            }
        },
        editTodo: (state, action) => {
            const todo = state.todoList.find((todo) => todo.id === action.payload.id)

            if (todo) {
                todo.title = action.payload.title.trim()
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, toggleTodo, editTodo, setFilter } = ToDoSlice.actions

export default ToDoSlice.reducer
