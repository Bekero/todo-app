import {
    storageService
} from './async-storage.service.js'

const STORAGE_KEY = 'todoDB'

export const todoService = {
    query,
    getEmptyTodo,
    save,
    remove
}

async function query(filterBy = null) {
    const todos = await storageService.query(STORAGE_KEY)
    if (!todos || !todos.length) return
    return todos
}

function save(todo) {
    if (!todo.task) return
    if (todo._id) return storageService.put(STORAGE_KEY, todo)
    else return storageService.post(STORAGE_KEY, todo)
}

function remove(todoId) {
    return storageService.remove(STORAGE_KEY, todoId)
}

function getEmptyTodo(task) {
    return {
        task,
        _id: null,
        isDone: false,
        created: Date.now(),
    }
}