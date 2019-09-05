import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { List, ListItem } from './List';

const TodoLists: React.FC = () => {
  const { activeTodoListId, todoLists } = useSelector((state: RootState) => {
    return {
      activeTodoListId: state.metaData.activeTodoListId,
      todoLists: state.todoLists
    };
  });

  if (todoLists.length === 0) {
    return <p>There are no todo lists</p>;
  }

  return (
    <List>
      {todoLists.map(({ id, title }) => (
        <ListItem key={id} isActive={id === activeTodoListId}>
          {title}
        </ListItem>
      ))}
    </List>
  );
};

export { TodoLists };
