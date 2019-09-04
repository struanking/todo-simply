import React from 'react';
import { Avatar } from './Avatar';
import { TodoLists } from './TodoLists';

const Header: React.FC = () => (
  <header>
    <Avatar />
    <nav>
      <TodoLists />
    </nav>
  </header>
);

export { Header };
