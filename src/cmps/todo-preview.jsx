import { useEffect, useState } from "react"
import { useRef } from 'react';
import TaskDone from './svg/task-done'
import TaskNotDone from './svg/task-not-done'
import Trash from './svg/trash'
import Edit from './svg/edit'

export function TodoPreview({ onMarkTodo, onRemoveTodo, onEditTodo, todo }) {

    let [isMarked, setIsMarked] = useState(todo.isDone)

    const checkedTodo = () => {
        setIsMarked(todo.isDone)
        onMarkTodo(todo)
    }

    return (
        <div onClick={checkedTodo} className={todo.isDone ? 'todo-preview done-task flex' : 'todo-preview flex'}>
            <div className="task">{todo.isDone ? <TaskDone /> : <TaskNotDone />}{todo.task}</div>
            <section className="actions">
                <button className="edit-action" onClick={(ev) => onEditTodo(ev, todo)}><Edit /></button>
                <button className="remove-action" onClick={(ev) => onRemoveTodo(ev, todo._id)}><Trash /></button>
            </section>
        </div>
    )
}     