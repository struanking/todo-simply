import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/todosSlice';

const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!text.trim()) {
          return;
        }
        dispatch(addTodo({ text }));
        setText('');
      }}
      data-testid="add-todo"
    >
      <label htmlFor="add-todo">To-do text</label>
      <input id="add-todo" type="text" value={text} onChange={handleChange} />
      <button type="submit">Add to-do</button>
    </form>
  );
};

export { AddTodo };
