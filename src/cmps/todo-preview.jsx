import { useEffect, useState } from "react"
import { useRef } from 'react';
import TaskDone from './svg/task-done'
import TaskNotDone from './svg/task-not-done'

export function TodoPreview({ onMarkTodo, onRemoveTodo, onEditTodo, todo }) {

    let [isMarked, setIsMarked] = useState(todo.isDone)

    const checkedTodo = () => {
        setIsMarked(todo.isDone)
        onMarkTodo(todo)
    }
    
    // const removeTodo = (ev, todoId) => {
    //     onRemoveTodo(ev, todoId)
    // }

    return (
        <div
            onClick={checkedTodo}
            className={todo.isDone ? 'todo-preview done-task flex' : 'todo-preview flex'}
        >
            <section className="task-container">
                {/* <div >{todo.isDone ? <TaskDone /> : <TaskNotDone />}</div> */}
                <div className="task">{todo.task}</div>
            </section>
            <section className="actions">
                <div onClick={(ev) => onEditTodo(ev, todo)}>Edit</div>
                <div onClick={(ev) => onRemoveTodo(ev, todo._id)}>X</div>
            </section>
        </div>
    )
}     