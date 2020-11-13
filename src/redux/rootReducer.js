import {combineReducers} from '@reduxjs/toolkit';

import signinReducer from '../features/signin/signinSlice';

export const rootReducer = combineReducers({
  signin: signinReducer,
});
