import { createSlice } from 'redux-starter-kit';

interface User {
  avatarUrl: string;
  username: string;
}

let initialState: User = {
  avatarUrl: '',
  username: ''
};

const userSlice = createSlice({
  slice: 'user',
  initialState,
  reducers: {}
});

export default userSlice.reducer;
