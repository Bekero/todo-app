
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { todoService } from '../services/todo.service'
import { loadTodos, addNewTodo, markDone, removeTodo, editTodo, updateTodo } from '../store/todo.actions'
import { TodoList } from "../cmps/todo-list"
import { TodoEdit } from "../cmps/edit-todo"
import { EmptyTodoMsg } from "../cmps/empty-todo-msg"

export const TodoApp = () => {

    const dispatch = useDispatch()
    let todos = useSelector(state => state.todoModule.todos)
    let isEmpty = null

    let [wantedTask, setWantedTask] = useState('')
    let [editModal, setEditModal] = useState(false)
    let [currEditTodo, setCurrEditTodo] = useState(null)

    useEffect(() => {
        dispatch(loadTodos())
    }, [wantedTask])

    const addTodo = (ev) => {
        ev.preventDefault()
        if (wantedTask === '') return
        let newTodo = todoService.getEmptyTodo(wantedTask)
        dispatch(addNewTodo(newTodo))
        setWantedTask('')
    }

    const onMarkTodo = (todo) => {
        todo.isDone = !todo.isDone
        dispatch(markDone(todo))
    }

    const onRemoveTodo = (ev, todoId) => {
        ev.stopPropagation()
        dispatch(removeTodo(todoId))
    }

    const onCloseTodo = (todoId, todoTask) => {
        setEditModal(false)
    }

    const onEditTodo = (ev, todo) => {
        ev.stopPropagation()
        setEditModal(true)
        setCurrEditTodo(todo)
        dispatch(editTodo(todo))
    }

    const onSaveTodo = (todoId, todoTask) => {
        setCurrEditTodo(null)
        setEditModal(false)
        dispatch(updateTodo(todoId, todoTask))
    }
    console.log('todos :', todos)
    if (!todos || todos.length === 0) isEmpty = true
    else { isEmpty = false }
    return (
        <div className={editModal ? 'main-app-container fire-wall' : 'main-app-container'}>
            {editModal && <TodoEdit
                onCloseTodo={onCloseTodo}
                onSaveTodo={onSaveTodo}
                currEditTodo={currEditTodo}
            />}
            <form className="todo-submit" onSubmit={addTodo}>
                <input
                    type="text"
                    placeholder="Enter Todo.."
                    value={wantedTask}
                    onChange={ev => setWantedTask(ev.target.value)}
                />
                <button className="button-31" type="submit">Add Todo</button>
            </form>
            {isEmpty ? <EmptyTodoMsg /> : <TodoList
                onMarkTodo={onMarkTodo}
                onRemoveTodo={onRemoveTodo}
                onEditTodo={onEditTodo}
            />}
        </div>
    )
}