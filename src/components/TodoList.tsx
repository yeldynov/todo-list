import useTodosContext from '../hooks/useTodosContext';
import { Todo } from '../types';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos } = useTodosContext();

  return (
    <div className='mt-24'>
      <h1 className='font-bold flex justify-center text-3xl my-5'>TODO LIST</h1>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
