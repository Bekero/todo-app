import {
    utilService
} from "./util.service"
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
    if(!todos || !todos.length) return _getTodos()
    return todos
}

// function query() {
//     let todos = _getTodos()
//     return todos
// }

function save(todo) {
    if(!todo.task) return
    if(todo._id) return storageService.put(STORAGE_KEY, todo)
    else return storageService.post(STORAGE_KEY, todo)
}
function remove(todoId) {
    console.log('From Remove :', todoId)
    return storageService.remove(STORAGE_KEY, todoId)
}

function _getTodos() {
    return hardCodedTodos
}

function getEmptyTodo(task) {
    return {
        task,
        // _id: utilService.makeId(),
        _id: null,
        isDone: false,
        isUrgent: false,
        created: Date.now(),
        // color: fff,
        // backgroundColor: 000,
    }
}

let hardCodedTodos = [{
        task: 'Practice React',
        _id: 'asd100',
        isDone: false,
        isUrgent: false,
        created: Date.now(),
        // color: fff,
        // backgroundColor: 000,
    },
    {
        task: 'Go to the gym',
        _id: 'asd122',
        isDone: false,
        isUrgent: false,
        created: Date.now(),
        // color: fff,
        // backgroundColor: 000,
    },
    {
        task: 'Finish homework',
        _id: 'asd133',
        isDone: false,
        isUrgent: false,
        created: Date.now(),
        // color: fff,
        // backgroundColor: 000,
    },
    {
        task: 'Run sometime',
        _id: 'asd144',
        isDone: false,
        isUrgent: false,
        created: Date.now(),
        // color: fff,
        // backgroundColor: 000,
    },
    {
        task: 'Write a Note',
        _id: 'asd155',
        isDone: false,
        isUrgent: false,
        created: Date.now(),
        // color: fff,
        // backgroundColor: 000,
    },
    {
        task: 'Make a Todo App',
        _id: 'asd166',
        isDone: false,
        isUrgent: false,
        created: Date.now(),
        // color: fff,
        // backgroundColor: 000,
    },
    {
        task: 'Go to sleep',
        _id: 'asd177',
        isDone: false,
        isUrgent: false,
        created: Date.now(),
        // color: fff,
        // backgroundColor: 000,
    }
]