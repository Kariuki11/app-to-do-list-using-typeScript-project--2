import { useState } from "react";


const TodoList = () => {
const [todo, setTodo] = useState("");
const [todos, setTodos] = useState([
    'clean Utensils',
    'clean the house',
    'clean the car',
])

const handleSubmit = () => {
    setTodos((prev) => [...prev, todo])
}

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input placeholder="Add item" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button type="submit">Add Item</button>
    </form>
    <ul>
        {todos.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
    </>
  );
}

export default TodoList;
