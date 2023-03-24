import { useEffect } from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import useTodosContext from './hooks/useTodosContext';
import { Todo } from './types';

function App() {
  const { fetchTodos } = useTodosContext();

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <CreateTodo />
      <TodoList />
    </div>
  );
}

export default App;
