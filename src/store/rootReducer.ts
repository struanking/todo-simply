import { combineReducers } from 'redux-starter-kit';
import metaData from './metaDataSlice';
import user from './userSlice';
import todoLists from './todoListsSlice';

const rootReducer = combineReducers({ metaData, todoLists, user });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
