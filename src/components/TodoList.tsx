import React from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';

type Props = {
  todos: Todo[];
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
};

export default function TodoList({ todos, onDelete, onEdit }: Props) {
  return (
    <div className='mt-24'>
      <h1 className='font-bold flex justify-center text-3xl my-5'>TODO LIST</h1>
      {todos.map((todo) => (
        <TodoItem
          onEdit={onEdit}
          onDelete={onDelete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
}
