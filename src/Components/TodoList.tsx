import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [completed, setCompleted] = useState<number[]>([])
  const [todos, setTodos] = useState([
    "clean Utensils",
    "clean the house",
    "clean the car",
  ]);

  const handleComplete = (index: number) => {
    if(completed.includes(index)){
        setCompleted((prev) => prev.filter((item) => item !== index))
    } else {
        setCompleted((prev) => [...prev, index])
    }
  }

  const handleDelete = (index: number) => {
    setTodos((prev) => prev.filter((_item, i) => i !== index));
    setCompleted((prev) => prev.filter((item) => item !== index)); 
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const item = todo.trim()
    if (item !== "") {
      setTodos((prev) => [...prev, item]);
    }
    setTodo("");
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="Add item"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {todos.map((item, index) => (
          <li className="{`${completed.includes(index) ? 'task-completed' : ''}`}" 
          key={index}
          >
            {item}
            <input 
            checked={completed.includes(index)} 
            onClick={() => handleComplete(index)} 
            type="checkbox" 
            />
            <button onClick={() => handleDelete(index)}><MdDeleteOutline />
            </button>
          </li>
        ))}
      </ul>



    <p>Total Task: {todos.length}</p>
    <p>Completed Task: {completed.length}</p>
    </>
  );
};

export default TodoList;
