// Write your code here

import './index.css'

const TodoItem = props => {
  const {eachTodo, deleteTodo} = props
  const {title, id} = eachTodo
  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <div className="todo-item-container">
      <p className="todo-item-name">{title}</p>
      <button
        className="todo-delete-button"
        type="button"
        onClick={onDeleteTodo}
      >
        Delete
      </button>
    </div>
  )
}
export default TodoItem

/*
const TodoItem = props => {
  const {Todo, deleteTodo} = props
  const {title, id} = Todo
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="to-do-container">
      <p className="todo">{title}</p>
      <button className="delete-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
*/
