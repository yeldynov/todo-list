import { useContext } from 'react';
import TodosContext from '../context/todos';

export default function useTodosContext() {
  return useContext(TodosContext);
}
