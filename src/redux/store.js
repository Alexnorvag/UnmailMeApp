import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: false,
});
