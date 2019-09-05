import { createSlice } from 'redux-starter-kit';

interface MetaData {
  activeTodoListId?: number;
  today: Date;
}

let initialState: MetaData = {
  today: new Date()
};

const todoListsSlice = createSlice({
  slice: 'metaData',
  initialState,
  reducers: {}
});

export default todoListsSlice.reducer;
