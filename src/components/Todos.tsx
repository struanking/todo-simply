import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { List } from 'components/List';
import { TodoItem } from './TodoItem';

export interface Props {
  text: string;
  completed: boolean;
  id: number;
  index: number;
}

const Todos: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  if (todos.length === 0) {
    return <p>Lovely, there's nothing to do!</p>;
  }
  return (
    <List data-testid="todos">
      {todos.map((todo, index) => (
        <TodoItem key={todo.id} index={index} {...todo} />
      ))}
    </List>
  );
};

export { Todos };
