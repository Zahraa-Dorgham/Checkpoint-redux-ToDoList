import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/ToDoSlice/todoslice';

function AddToDo() {
  const [newTodo, setNewTodo] = useState("")
  const dispatchEvent = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatchEvent(addTodo(newTodo))
    setNewTodo("")
  }

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddToDo
