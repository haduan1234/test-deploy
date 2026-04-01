// src/services/todo.service.ts
import api from "../api/axios";
import type { Todo } from "../types/todo.type";

export const getTodos = () => api.get<Todo[]>("/todos");

export const createTodo = (title: string) =>
  api.post<Todo>(`/todos?title=${title}`);

export const deleteTodo = (id: number) =>
  api.delete(`/todos/${id}`);