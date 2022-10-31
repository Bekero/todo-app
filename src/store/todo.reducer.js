const initialState = {
    todos: [],
}

export function todoReducer(state = initialState, action) {
    let newState = state
    let todos
    let idx

    switch (action.type) {
        case 'SET_TODOS':
            newState = {
                ...state,
                todos: action.todos
            }
            break
        case 'ADD_TODO':
            todos = [...state.todos, action.savedTodo]
            newState = {
                ...state,
                todos
            }
            break
        case 'UPDATE_TODO':
            return {
                // ? Whats Better ?  Up || Down
                ...state, todos: state.todos.map(todo => todo._id === action.updatedTodo._id ? action.updatedTodo : todo)
            }
            break
        case 'REMOVE_TODO':
            return {
                ...state, todos: state.todos.filter(todo => todo._id !== action.todoId)
            }
            default:
    }
    return newState
}


//Whats better ? (Remove)
// case 'REMOVE_TODO':
//     return {
//         ...state, todos: state.todos.filter(todo => todo._id !== action.todoId)
//     }
//////////////////////////////////////////////////////////
// todos = state.todos.filter(todo => todo._id !== action.todoId)
// newState = {
//     ...state,
//     todos
// }
// console.log('newState :', newState)
//////////////////////////////////////////////////////////
// todos = [...state.todos]
// todos = state.todos.filter(todo => todo._id !== action.todoId)
// newState = {
//     ...state,
//     todos
// } 




// Whats Better ? (Update)
// case 'UPDATE_TODO':
//     todos = [...state.todos]
//     idx = todos.findIndex(todo => todo._id === action.updatedTodo._id)
//     todos.splice(idx, 1, action.updatedTodo)
//     newState = {
//         ...state,
//         todos
//     }