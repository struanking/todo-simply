import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { Avatar } from './Avatar';
import { TodoLists } from './TodoLists';

const Header: React.FC = () => {
  const { user } = useSelector((state: RootState) => state);
  return (
    <header>
      <Avatar {...user} />
      <nav>
        <TodoLists />
      </nav>
    </header>
  );
};

export { Header };
