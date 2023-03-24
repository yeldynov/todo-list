import { createContext, useState, ReactNode } from 'react';
import axios from 'axios';
import { Todo } from '../types';

export type TodoContextType = {
  todos: Todo[];
  fetchTodos: () => Promise<void>;
  createTodo: (title: string) => Promise<void>;
  editTodoById: (id: number, newTitle: string) => Promise<void>;
  deleteTodoById: (id: number) => Promise<void>;
};

const TodosContext = createContext<TodoContextType>({} as TodoContextType);

interface Props {
  children: ReactNode;
}

const Provider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:3002/todos');
    setTodos(response.data.reverse());
  };

  const createTodo = async (title: string) => {
    const response = await axios.post('http://localhost:3002/todos', { title });

    const newTodo: Todo = {
      ...response.data,
      isFinished: false,
    };

    const updatedTodos = [newTodo, ...todos];
    setTodos(updatedTodos);
  };

  const editTodoById = async (id: number, newTitle: string) => {
    const response = await axios.put(`http://localhost:3002/todos/${id}`, {
      title: newTitle,
    });

    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, ...response.data } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodoById = async (id: number) => {
    await axios.delete(`http://localhost:3002/todos/${id}`);

    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const value = {
    todos,
    fetchTodos,
    createTodo,
    editTodoById,
    deleteTodoById,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

export { Provider };
export default TodosContext;
