import styled from 'styled-components';

interface ListItemProps {
  isActive?: boolean;
}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  display: flex;
  align-items: center;
  padding: 0.5em;
  background-color: ${props => (props.isActive ? '#e8d6e8' : 'inherit')};

  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }

  &:hover > * {
    cursor: pointer;
  }

  & + & {
    margin-top: 1rem;
  }
`;

export { List, ListItem };
