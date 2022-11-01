import { useRef } from "react"
import { useForm } from "../hooks/useForm"
import CloseModal from '../cmps/svg/close'

export function TodoEdit({ onCloseTodo, onSaveTodo, currEditTodo }) {

    const [todo, handleChange, setTodo] = useForm({
        task: currEditTodo.task,
    })

    const inputRef = useRef()

    const saveTodo = (ev) => {
        ev.preventDefault()
        onSaveTodo(currEditTodo._id, todo.task)
    }

    const closeTodo = (ev) => {
        ev.preventDefault()
        onCloseTodo()
    }

    return (
        <div className="todo-edit-modal">
            <div className="edit-details-title">
                <h4>Update your task</h4>
                <button onClick={(ev) => closeTodo(ev)}><CloseModal /></button>
            </div>
            <form className="edit-details-form">
                <input
                    value={todo.task}
                    ref={inputRef}
                    onChange={handleChange}
                    name="task"
                    id="task" />
                <div className="actions">
                    <button onClick={saveTodo}>Save</button>
                    <button onClick={(ev) => closeTodo(ev)}>Close</button>
                </div>
            </form>
        </div>)
}