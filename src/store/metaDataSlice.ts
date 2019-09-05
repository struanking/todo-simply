import { createSlice } from 'redux-starter-kit';

interface MetaData {
  activeTodoListId?: number;
  today: string;
}

const today = new Date().toJSON();
let initialState: MetaData = {
  today
};

const todoListsSlice = createSlice({
  slice: 'metaData',
  initialState,
  reducers: {}
});

export default todoListsSlice.reducer;
