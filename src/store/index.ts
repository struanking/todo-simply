import { configureStore } from 'redux-starter-kit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  // seed data into redux state
  preloadedState: {
    user: {
      username: 'Struan King',
      avatarUrl: `${process.env.PUBLIC_URL}/profile_sk.jpg`
    }
  }
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;

export default store;
