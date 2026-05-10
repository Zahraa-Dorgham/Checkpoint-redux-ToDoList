import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/ToDoSlice/todoslice';

function AddToDo() {
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
  })
  const dispatchEvent = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatchEvent(addTodo(newTodo))
    setNewTodo({
      title: "",
      description: "",
    })
  }

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <div className="add-todo-fields">
        <input
          type="text"
          placeholder="Add new task"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Add description"
          value={newTodo.description}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddToDo
