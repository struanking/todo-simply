import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

const TodoLists: React.FC = () => {
  const todoLists = useSelector((state: RootState) => state.todoLists);
  if (todoLists.length === 0) {
    return <p>There are no todo lists</p>;
  }
  return (
    <ul>
      {todoLists.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};

export { TodoLists };
