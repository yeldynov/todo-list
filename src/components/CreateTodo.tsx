import React, { FormEvent, useState } from 'react';

type Props = {
  onCreate: (title: string) => void;
};

export default function CreateTodo({ onCreate }: Props) {
  const [todo, setTodo] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreate(todo);
    setTodo('');
  };

  return (
    <form
      className='flex flex-col fixed top-0 bg-sky-400 w-full border border-blue-700 rounded-md'
      onSubmit={handleSubmit}
    >
      <label className='items-center flex justify-center font-bold h-10'>
        Add Todo
      </label>
      <input
        className='h-10 flex justify-center items-center p-5 font-bold text-xl'
        placeholder='Do this, do that...'
        autoFocus
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
    </form>
  );
}
