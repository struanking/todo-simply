import { createSlice } from 'redux-starter-kit';

interface Todo {
  text: string;
  completed: boolean;
  id: number;
}

// TODO Improve next id approach e.g. uuid generator
let nextTodoId = 1;

let initialState: Todo[] = [];

const todosSlice = createSlice({
  slice: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      const { text } = action.payload;
      state.push({ id: nextTodoId++, text, completed: false });
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
