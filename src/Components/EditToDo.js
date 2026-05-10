import React from 'react'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/ToDoSlice/todoslice';

function EditToDo({ todo, show, handleClose }) {
  const [edited, setEdited] = useState({
    title: "",
    description: "",
  })
  const dispatchEvent = useDispatch()

  useEffect(() => {
    if (todo) {
      setEdited({
        title: todo.title,
        description: todo.description || ""
      })
    }
  }, [todo])

  const handleSaveEdit = () => {
    if (todo && edited.title.trim()) {
      dispatchEvent(editTodo({ id: todo.id, title: edited.title, description: edited.description }))
      handleClose()
    }
  }

  return (
    <Modal show={show} onHide={handleClose} className="modal-custom">
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title className="modal-title-custom">Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="form-label-custom">Task title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Edit task"
              className="form-input-custom"
              value={edited.title}
              onChange={(e) => setEdited({ ...edited, title: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="form-label-custom">Task description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Edit description"
              className="form-input-custom"
              value={edited.description}
              onChange={(e) => setEdited({ ...edited, description: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="modal-footer-custom">
        <Button variant="secondary" onClick={handleClose} className="modal-btn-close">
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSaveEdit} className="modal-btn-save">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditToDo
