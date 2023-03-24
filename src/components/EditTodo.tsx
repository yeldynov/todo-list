import { useState } from 'react';
import useTodosContext from '../hooks/useTodosContext';
import { Todo } from '../types';

type Props = {
  todo: Todo;
  onClose: () => void;
};

export default function EditTodo({ todo, onClose }: Props) {
  const [title, setTitle] = useState(todo.title);
  const { editTodoById } = useTodosContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTodoById(todo.id, title);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='h-10 flex justify-center items-center p-5 font-bold text-xl'
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}
