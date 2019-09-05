import React from 'react';
import { Header } from 'components/Header';
import { PageHeader } from 'components/PageHeader';
import { Todos } from 'components/Todos';
import { AddTodo } from 'components/AddTodo';

const App: React.FC = () => (
  <>
    <Header />
    <main>
      <PageHeader />
      <Todos />
      <AddTodo />
    </main>
  </>
);

export default App;
