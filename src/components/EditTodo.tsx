import { useState } from 'react';
import { Todo } from '../types';

type Props = {
  todo: Todo;
  onSubmit: (id: number, title: string) => void;
};

export default function EditTodo({ todo, onSubmit }: Props) {
  const [title, setTitle] = useState(todo.title);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(todo.id, title);
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
