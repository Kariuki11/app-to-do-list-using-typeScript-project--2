import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [completed, setCompleted] = useState<number[]>([])
  const [todos, setTodos] = useState([
    "clean Utensils",
    "clean the house",
    "clean the car",
  ]);

  const handleComplete = (index: number) => {
setCompleted((prev) => [...prev, index])
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos((prev) => [...prev, todo]);
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
          <li className="{`${completed}`}" key={index}>
            {item}
            <input onClick={() => handleComplete(index)} type="checkbox" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
