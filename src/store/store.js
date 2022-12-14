import {
    createStore,
    applyMiddleware, 
    combineReducers, 
    compose, 
} from 'redux'
import thunk from 'redux-thunk'

import { todoReducer } from './todo.reducer'

const rootReducer = combineReducers({
    todoModule: todoReducer,
})

// export const store = createStore(rootReducer, applyMiddleware(thunk))
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
// Lets wire up thunk and also redux-dev-tools:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
// export const store = createStore(rootReducer, applyMiddleware(thunk))


