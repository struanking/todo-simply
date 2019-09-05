import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { TodoList } from 'store/todoListsSlice';
import { Masthead } from 'components/Masthead';
import { Heading } from 'components/Heading';

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
    <Masthead data-testid="masthead">
      <Heading>{pageTitle}</Heading>
      <time>{formatDate(new Date(today))}</time>
    </Masthead>
  );
};

export { PageHeader };
