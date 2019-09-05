import { createSlice } from 'redux-starter-kit';

interface Todo {
  text: string;
  completed: boolean;
  id: number;
}

// TODO Improve next id approach e.g. uuid generator or get id of last todo and +1
// also setting as 10 as a quick cheat to get around the seeded data
let nextTodoId = 10;

let initialState: Todo[] = [];

const todosSlice = createSlice({
  slice: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      const { text } = action.payload;
      state.push({ id: nextTodoId++, text, completed: false });
    }
  }
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
