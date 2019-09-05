import { combineReducers } from 'redux-starter-kit';
import user from './userSlice';

const rootReducer = combineReducers({ user });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
