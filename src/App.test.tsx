import React from 'react';
import { renderWithRedux } from './test-utils';
import App from './App';

const preloadedState = {
  user: {
    avatarUrl: '/profile.jpg',
    username: 'Joe Bloggs'
  }
};

test('it renders user avatar and name', () => {
  const { getByText, getByTestId } = renderWithRedux(<App />, {
    preloadedState
  });
  const username = getByText('Joe Bloggs');
  const profilePic = getByTestId('user-avatar');

  expect(username).toBeDefined();
  expect(profilePic.getAttribute('src')).toEqual('/profile.jpg');
  expect(profilePic.getAttribute('alt')).toEqual('Avatar for Joe Bloggs');
});
