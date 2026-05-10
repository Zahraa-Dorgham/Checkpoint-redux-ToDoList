import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../redux/ToDoSlice/todoslice'
import EditToDo from './EditToDo'

function ToDoItem({ todo }) {
  const [showEdit, setShowEdit] = useState(false)
  const dispatchEvent = useDispatch()

  return (
    <>
      <div className={`todo-item ${todo.isDone ? "done" : ""}`}>
        <button
          type="button"
          className="status-btn"
          onClick={() => dispatchEvent(toggleTodo(todo.id))}
          aria-label="Toggle task status"
        >
        </button>

        <span className="todo-title" onClick={() => setShowEdit(true)}>
          {todo.title}
        </span>

        <div className="todo-actions">
          <button type="button" onClick={() => setShowEdit(true)} aria-label="Edit task">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 20h4l10.5-10.5-4-4L4 16v4z" />
              <path d="M15.5 4.5l4 4" />
            </svg>
          </button>
          <button type="button" onClick={() => dispatchEvent(deleteTodo(todo.id))} aria-label="Delete task">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 7h14" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
              <path d="M7 7l1 13h8l1-13" />
              <path d="M9 7V4h6v3" />
            </svg>
          </button>
        </div>
      </div>

      <EditToDo todo={todo} show={showEdit} handleClose={() => setShowEdit(false)} />
    </>
  )
}

export default ToDoItem
