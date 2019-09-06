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
  padding: 0.65rem;
  background-color: ${props => (props.isActive ? '#e8d6e8' : 'inherit')};

  /* TODO create variants to handle the different list item styles */
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

  /* styles for svg only if first child */
  > svg:first-of-type:first-child {
    fill: #767676;
    margin-right: 1rem;
  }
`;

export { List, ListItem };
