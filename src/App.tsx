import React from 'react';
import { Layout } from 'components/Layout';
import { Main } from 'components/Main';
import { Header } from 'components/Header';
import { PageHeader } from 'components/PageHeader';
import { Todos } from 'components/Todos';
import { AddTodo } from 'components/AddTodo';

const App: React.FC = () => (
  <Layout>
    <Header />
    <Main>
      <PageHeader />
      <Todos />
      <AddTodo />
    </Main>
  </Layout>
);

export default App;
