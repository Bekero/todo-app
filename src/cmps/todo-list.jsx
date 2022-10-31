
import { useSelector } from "react-redux"
import { TodoPreview } from "./todo-preview"

export function TodoList({ onMarkTodo, onRemoveTodo, onEditTodo }) {

    let todos = useSelector(state => state.todoModule.todos)

    if (!todos) return <div>No Todos..</div>
    return (
        <div className="todo-list-container">
            {todos?.map(todo => {
                return <TodoPreview
                    key={todo?._id}
                    todo={todo}
                    onMarkTodo={onMarkTodo}
                    onRemoveTodo={onRemoveTodo}
                    onEditTodo={onEditTodo}
                />
            })}
        </div>
    )
}