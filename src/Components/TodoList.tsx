import { useState } from "react";



const TodoList = () => {
const [todos, setTodos] = useState([
    'clean Utensils',
    'clean the house',
    'clean the car',
])

  
  return (
    <>
    <form>
        <input placeholder="Add item" value={todo} onChange={(e) => setTodo(e.target.value)}/>
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
