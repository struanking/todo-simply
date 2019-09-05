import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from 'store/todosSlice';
import { Checkbox } from 'components/Checkbox';
import { ListItem } from 'components/List';
import { VisuallyHidden } from 'components/VisuallyHidden';
import { Props } from './Todos';

const TodoItem = ({ completed, id, text }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const handleChange = () => dispatch(toggleTodo({ id }));
  const handleRemove = () => dispatch(removeTodo({ id }));
  const handleFocus = () => setIsActive(true);
  const handleBlur = () => {
    // TODO fix keyboard onBlur
    setIsActive(false);
  };
  const htmlId = `todo-${id}`;

  return (
    <ListItem
      onFocus={handleFocus}
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

export { TodoItem };
