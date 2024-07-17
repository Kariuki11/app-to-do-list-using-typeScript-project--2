import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    "clean Utensils",
    "clean the house",
    "clean the car",
  ]);

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
          onChange={(e) => setTodo(e.target.value.trim)}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
