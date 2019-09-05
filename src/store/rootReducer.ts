import { combineReducers } from 'redux-starter-kit';
import user from './userSlice';
import todoLists from './todoListsSlice';

const rootReducer = combineReducers({ todoLists, user });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
