import React from 'react'
import { useSelector } from 'react-redux'

function ToDoList() {
    const todos = useSelector((state) => state.todo.todos)
  return (
    <div>
      
    </div>
  )
}

export default ToDoList
