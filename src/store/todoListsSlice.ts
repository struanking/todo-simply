import { createSlice } from 'redux-starter-kit';

export interface TodoList {
  title: string;
  id: number;
}

let initialState: TodoList[] = [];

const todoListsSlice = createSlice({
  slice: 'todoLists',
  initialState,
  reducers: {}
});

export default todoListsSlice.reducer;
