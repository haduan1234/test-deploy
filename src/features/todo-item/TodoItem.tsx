// src/components/TodoItem.tsx

import type { Todo } from "../../types/todo.type";

interface Props {
  todo: Todo;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onDelete }: Props) {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </div>
  );
}