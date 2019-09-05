import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { TodoList } from '../store/todoListsSlice';

function formatDate(date: Date, locale = 'en-GB'): string {
  const options = {
    weekday: 'short',
    month: 'long',
    day: 'numeric'
  };
  return date.toLocaleDateString(locale, options);
}

function getTodoListTitle(todoLists: TodoList[], activeId?: number) {
  return todoLists.filter(list => list.id === activeId)[0].title;
}

const PageHeader: React.FC = () => {
  const { pageTitle, today } = useSelector((state: RootState) => {
    const { activeTodoListId, today } = state.metaData;
    return {
      pageTitle: getTodoListTitle(state.todoLists, activeTodoListId),
      today
    };
  });

  return (
    <div data-testid="masthead">
      <h1>{pageTitle}</h1>
      <time>{formatDate(new Date(today))}</time>
    </div>
  );
};

export { PageHeader };
