import { combineReducers } from 'redux-starter-kit';
import metaData from './metaDataSlice';
import user from './userSlice';
import todoLists from './todoListsSlice';
import todos from './todosSlice';

const rootReducer = combineReducers({ metaData, todoLists, todos, user });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
