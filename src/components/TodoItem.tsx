import React, { useState } from 'react';
import { Todo } from '../types';
import { AiOutlineClose } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import EditTodo from './EditTodo';
import useTodosContext from '../hooks/useTodosContext';

type Props = {
  todo: Todo;
};

export default function TodoItem({ todo }: Props) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteTodoById } = useTodosContext();

  const handleSubmit = () => {
    setShowEdit(false);
  };

  return (
    <div className=' flex justify-between border border-gray-300 rounded-md mx-5 my-2 p-2 text-xl text-center hover:bg-gray-200'>
      {showEdit ? (
        <EditTodo onClose={handleSubmit} todo={todo} />
      ) : (
        <h3>{todo.title}</h3>
      )}
      <div className='flex gap-2'>
        <button onClick={() => setShowEdit(!showEdit)}>
          <FiEdit2 size={16} />
        </button>
        <button onClick={() => deleteTodoById(todo.id)}>
          <AiOutlineClose size={20} />
        </button>
      </div>
    </div>
  );
}
