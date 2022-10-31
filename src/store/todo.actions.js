import {
    createDispatchHook
} from "react-redux"
import {
    todoService
} from "../services/todo.service"

export function loadTodos(filterBy = null) {
    return async (dispatch) => {
        try {
            const todos = await todoService.query(filterBy)
            const action = {
                type: 'SET_TODOS',
                todos
            }
            dispatch(action)
        } catch (err) {
            console.log('Cannot load stations', err)
        }
    }
}

export function addNewTodo(todo) {
    return async (dispatch) => {
        try {
            const savedTodo = await todoService.save(todo)
            const action = {
                type: 'ADD_TODO',
                savedTodo
            }
            dispatch(action)
        } catch (err) {
            console.log('Cannot Add Todo :', err)
        }
    }
}

export function markDone(todo) {
    return async (dispatch) => {
        try {
            const updatedTodo = await todoService.save(todo)
            const action = {
                type: 'UPDATE_TODO',
                updatedTodo
            }
            dispatch(action)
        } catch (err) {
            console.log('Cannot Mark todo! :', err)
        }
    }
}

export function removeTodo(todoId) {
    return async (dispatch) => {
        try {
            await todoService.remove(todoId)
            const action = {
                type: 'REMOVE_TODO',
                todoId
            }
            dispatch(action)
        } catch (err) {
            console.log('Cannot remove todo, ', err)
        }
    }
}

export function editTodo(todo) {
    return async (dispatch) => {
        try {} catch (err) {
            console.log('Cannot edit, ', err)
        }
    }
}

export function updateTodo(todoId, todoTask) {
    return async (dispatch, getState) => {
        try {
            const {
                todos
            } = getState().todoModule
            const todo = todos.find(todo => todo._id === todoId)
            todo.task = todoTask
            const updatedTodo = await todoService.save(todo)
            const action = {
                type: 'UPDATE_TODO',
                updatedTodo
            }
            dispatch(action)
        } catch (err) {
            console.log('Cannot Update...', err)
        }
    }
}