import { useState } from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import { Todo } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const createTodo = (title: string) => {
    const newTodo: Todo = {
      id: Math.round(Math.random() * 9999),
      title,
      isFinished: false,
    };

    const updatedTodos = [newTodo, ...todos];
    setTodos(updatedTodos);
  };

  const deleteTodoById = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodoById = (id: number, newTitle: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <CreateTodo onCreate={createTodo} />
      <TodoList todos={todos} onEdit={editTodoById} onDelete={deleteTodoById} />
    </div>
  );
}

export default App;
