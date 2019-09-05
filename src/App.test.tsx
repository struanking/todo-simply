import React from 'react';
import { renderWithRedux } from './test-utils';
import App from './App';

const DEFAULT_STATE = Object.freeze({
  metaData: {
    activeTodoListId: 1,
    today: new Date('2019-09-01')
  },
  todoLists: [{ title: 'A todo list', id: 1 }],
  user: {
    avatarUrl: '/profile.jpg',
    username: 'Joe Bloggs'
  }
});

function setUp(preloadedState = DEFAULT_STATE) {
  return renderWithRedux(<App />, {
    preloadedState
  });
}

test('it renders user avatar and name', () => {
  const { getByText, getByTestId } = setUp();
  const username = getByText('Joe Bloggs');
  const profilePic = getByTestId('user-avatar');

  expect(username).toBeDefined();
  expect(profilePic.getAttribute('src')).toEqual('/profile.jpg');
  expect(profilePic.getAttribute('alt')).toEqual('Avatar for Joe Bloggs');
});

test('it renders one todo list', () => {
  const { getByTestId } = setUp();
  const todoListNav = getByTestId('todo-list-nav');

  expect(todoListNav).toBeDefined();
  expect(todoListNav.querySelectorAll('li')).toHaveLength(1);
});

test('it renders page header', () => {
  const { getByTestId } = setUp();
  const pageHeader = getByTestId('masthead');
  const heading1 = pageHeader.querySelector('h1');
  const dateTime = pageHeader.querySelector('time');

  expect(heading1).toHaveTextContent('A todo list');
  expect(dateTime).toBeDefined();
  expect(dateTime).toHaveTextContent('Sun, 1 September');
});
