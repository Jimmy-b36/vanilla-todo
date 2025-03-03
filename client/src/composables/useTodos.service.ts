export const useTodos = () => {
  const getTodosApi = async () => {
    const response = await fetch('http://localhost:3000/todos');
    return await response.json();
  };
  return { getTodosApi };
};

export interface ITodo {
  id: number;
  task: string;
  description: string;
  completed: boolean;
  user_id: number;
}
