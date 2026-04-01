import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import {
  getTodos,
  createTodo,
  deleteTodo,
} from "../services/todo.service";

export default function useTodo() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await getTodos();
      return res.data;
    },
  });

  const createMutation = useMutation({
    mutationFn: (title: string) => createTodo(title),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return {
    todos: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    addTodo: createMutation.mutate,
    removeTodo: deleteMutation.mutate,
    isCreating: createMutation.isPending,
  };
}