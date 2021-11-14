import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const handleTaskCreate = (title) => {
    const payload = {
      title: title,
      status: false,
      id: todos.lenght + 1
    };
    setTodos([...todos, payload]);
  };

  return (
    <>
      <h2>TODO</h2>
      <TodoInput onTaskCreate={handleTaskCreate} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} status={todo.status} />
      ))}
    </>
  );
}
