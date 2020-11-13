import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

export const signinAdapter = createEntityAdapter();

const initialState = signinAdapter.getInitialState({
  loading: false,
  error: undefined,
  loggedIn: false,
  loggedInUser: undefined,
  token: undefined,
});

export const slice = createSlice({
  name: 'signin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default reducer = slice.reducer;

export const {} = signinAdapter.getSelectors((state) => state.signin);
