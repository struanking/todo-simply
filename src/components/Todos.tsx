import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';

const Todos: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  if (todos.length === 0) {
    return <p>Lovely, there's nothing to do!</p>;
  }
  return (
    <ul data-testid="todos">
      {todos.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
};

export { Todos };
