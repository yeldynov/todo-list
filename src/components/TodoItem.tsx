import React, { useState } from 'react';
import { Todo } from '../types';
import { AiOutlineClose } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import EditTodo from './EditTodo';

type Props = {
  todo: Todo;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
};

export default function TodoItem({ todo, onDelete, onEdit }: Props) {
  const [showEdit, setShowEdit] = useState(false);

  const handleSubmit = (id: number, newTitle: string) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  return (
    <div className=' flex justify-between border border-gray-300 rounded-md mx-5 my-2 p-2 text-xl text-center hover:bg-gray-200'>
      {showEdit ? (
        <EditTodo onSubmit={handleSubmit} todo={todo} />
      ) : (
        <h3>{todo.title}</h3>
      )}
      <div className='flex gap-2'>
        <button onClick={() => setShowEdit(!showEdit)}>
          <FiEdit2 size={16} />
        </button>
        <button onClick={() => onDelete(todo.id)}>
          <AiOutlineClose size={20} />
        </button>
      </div>
    </div>
  );
}
