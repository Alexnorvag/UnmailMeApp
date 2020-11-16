import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import {authAPI} from '../../services/api';

export const checkAuth = createAsyncThunk('signin/checkAuth', async () => {
  console.log('is authed?');
  return {};
});

export const login = createAsyncThunk('signin/login', async (params) => {
  console.log('login to app: ', params);
  authAPI.login();
  return {};
});

export const logout = createAsyncThunk('signin/logout', async () => {
  console.log('logout from app');

  return {};
});

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
