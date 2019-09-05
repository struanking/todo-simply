import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { Avatar } from './Avatar';
import { TodoLists } from './TodoLists';

const StyledHeader = styled.header`
  padding: 2rem 0;
`;

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <StyledHeader>
      <Avatar {...user} />
      <nav data-testid="todo-list-nav">
        <TodoLists />
      </nav>
    </StyledHeader>
  );
};

export { Header };
