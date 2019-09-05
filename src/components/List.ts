import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5em;

  &:hover {
    background-color: #ddd;
  }

  & + & {
    margin-top: 1rem;
  }
`;

export { List, ListItem };
