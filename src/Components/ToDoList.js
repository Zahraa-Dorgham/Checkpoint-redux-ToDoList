import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../redux/ToDoSlice/todoslice'
import ToDoItem from './ToDoItem'

function ToDoList() {
  const { todoList, filter } = useSelector((state) => state.todo)
  const dispatchEvent = useDispatch()

  const filteredTodos = todoList.filter((todo) => {
    if (filter === "done") {
      return todo.isDone
    }

    if (filter === "notDone") {
      return !todo.isDone
    }

    return true
  })

  return (
    <>
      <div className="filters">
        <button
          type="button"
          className={filter === "all" ? "active" : ""}
          onClick={() => dispatchEvent(setFilter("all"))}
        >
          All
        </button>
        <button
          type="button"
          className={filter === "done" ? "active" : ""}
          onClick={() => dispatchEvent(setFilter("done"))}
        >
          Done
        </button>
        <button
          type="button"
          className={filter === "notDone" ? "active" : ""}
          onClick={() => dispatchEvent(setFilter("notDone"))}
        >
          Not done
        </button>
      </div>

      <div className="todo-list">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => <ToDoItem key={todo.id} todo={todo} />)
        ) : (
          <p className="empty-message">No task found</p>
        )}
      </div>
    </>
  )
}

export default ToDoList
