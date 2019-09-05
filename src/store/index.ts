import { configureStore } from 'redux-starter-kit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  // seed data into redux state
  preloadedState: {
    metaData: {
      activeTodoListId: 1,
      today: new Date().toJSON()
    },
    todoLists: [
      {
        id: 1,
        title: 'Team To-Do List'
      }
    ],
    todos: [
      {
        text: 'Shortlist features for MVP',
        completed: false,
        id: 1
      },
      {
        text: 'Launch PPC campaign with new creative',
        completed: false,
        id: 2
      },
      {
        text: 'Define audience brekdown with new data',
        completed: false,
        id: 3
      },
      {
        text: 'Launch demo page for SEO analysis',
        completed: true,
        id: 4
      }
    ],
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
