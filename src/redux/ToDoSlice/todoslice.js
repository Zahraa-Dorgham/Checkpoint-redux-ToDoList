import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [
        {
            id: Math.random(),
            title: "Web Design Task",
            description: "Create the layout and choose the main colors.",
            isDone: false,
        },
        {
        
            id: Math.random(),
            title: "Prepare PFE Report",
            description: "Write and organize the final year project report, including introduction,design, and implementation sections.",
            isDone: false,
        
        },
        {
            id: Math.random(),
            title: "Social Media Marketing",
            description: "Prepare content for the next campaign.",
            isDone: true,
        },
        {
            id: Math.random(),
            title: "Morning routine",
            description: "Wake up, brush teeth, and have breakfast.",
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
            const title = action.payload.title.trim()
            const description = (action.payload.description || "").trim()

            if (title) {
                state.todoList.unshift({
                    id: Math.random(),
                    title,
                    description,
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
                todo.description = (action.payload.description || "").trim()
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
