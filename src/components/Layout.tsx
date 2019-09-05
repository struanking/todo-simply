import React from 'react';
import styled from 'styled-components';

const WithSidebar = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 48rem; /* 768px @ 16px = 1rem */
  margin: auto;
  padding: 0.5rem;

  > * {
    display: flex;
    flex-wrap: wrap;
    margin: calc(0.5rem / 2 * -1);
  }

  > * > * {
    margin: calc(0.5rem / 2);
    flex-basis: 16rem;
    flex-grow: 1;
  }

  > * > :last-child {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(60% - 0.5rem);
  }
`;

type Props = { children: React.ReactNode };

const Layout = (props: Props) => (
  <WithSidebar>
    <div>{props.children}</div>
  </WithSidebar>
);

export { Layout };
