import { useState } from "react";
import TodoItem from "../features/todo-item/TodoItem";
import useTodo from "../hooks/useTodo";

export default function Home() {
  const {
    todos,
    addTodo,
    removeTodo,
    isLoading,
    isError,
  } = useTodo();

  const [input, setInput] = useState("");

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Todo App </h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>

      <hr />

      {todos?.map((t) => (
        <TodoItem key={t.id} todo={t} onDelete={removeTodo} />
      ))}
    </div>
  );
}