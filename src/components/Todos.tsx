import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { toggleTodo, removeTodo } from 'store/todosSlice';
import { Checkbox } from 'components/Checkbox';
import { List, ListItem } from 'components/List';
import { VisuallyHidden } from 'components/VisuallyHidden';

interface Props {
  text: string;
  completed: boolean;
  id: number;
  index: number;
}

const TodoItem = ({ completed, id, text }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const handleChange = () => dispatch(toggleTodo({ id }));
  const handleRemove = () => dispatch(removeTodo({ id }));
  const handleFocus = () => setIsActive(true);
  const handleBlur = () => {
    // TODO fix keyboard onBlur
  };
  const htmlId = `todo-${id}`;
  return (
    <ListItem
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
    >
      <Checkbox id={htmlId} checked={completed} onChange={handleChange} />
      <label htmlFor={htmlId}>
        <VisuallyHidden>Mark</VisuallyHidden>
        {text}
        <VisuallyHidden>
          as
          {completed ? ' not done' : ' done'}
        </VisuallyHidden>
      </label>
      {isActive && (
        <button
          type="button"
          onClick={handleRemove}
          data-testid={`delete-${htmlId}`}
        >
          Delete to-do
        </button>
      )}
    </ListItem>
  );
};

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
