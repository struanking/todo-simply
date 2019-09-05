import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from 'redux-starter-kit';
import rootReducer from './store/rootReducer';

function renderWithRedux(
  children,
  {
    preloadedState,
    store = configureStore({
      reducer: rootReducer,
      preloadedState
    })
  } = {}
) {
  const utils = render(<Provider store={store}>{children}</Provider>);
  return {
    ...utils,
    store
  };
}

// re-export everything from original library
export * from '@testing-library/react';

export { renderWithRedux };
