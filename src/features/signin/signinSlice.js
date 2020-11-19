import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import auth from '../../utils/auth';
import {getValue} from '../../utils/storageUtil';
import {JWT_TOKEN} from '../../config';

export const checkAuth = createAsyncThunk('signin/checkAuth', async () => {
  const token = await getValue(JWT_TOKEN);
  console.log('is authed: ', token);
  return {};
});

export const login = createAsyncThunk('signin/login', async (params) => {
  console.log('login to app: ', params);
  const res = await auth.login(params);
  console.log('[SLICE] => res: ', res);
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
