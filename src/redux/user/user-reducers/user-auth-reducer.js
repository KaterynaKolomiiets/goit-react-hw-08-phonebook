import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  usersLogInOperation,
  usersLogoutOperation,
  usersSignUpOperation,
  fetchCurrentUser,
} from "../user-operations";

const userReducer = createReducer(
  {},
  {
    [usersSignUpOperation.fulfilled]: (_, action) => action.payload.user,
    [usersLogInOperation.fulfilled]: (_, action) => action.payload.user,
    [usersLogoutOperation.fulfilled]: () => [],
    [fetchCurrentUser.fulfilled]: (_, action) => action.payload,
  }
);

const tokenReducer = createReducer(null, {
  [usersSignUpOperation.fulfilled]: (_, action) => action.payload.token,
  [usersLogInOperation.fulfilled]: (_, action) => action.payload.token,
  [usersLogoutOperation.fulfilled]: () => null,
});
const isLoggedIn = createReducer(false, {
  [usersSignUpOperation.fulfilled]: () => true,
  [usersLogInOperation.fulfilled]: () => true,
  [usersLogoutOperation.fulfilled]: () => false,
  [fetchCurrentUser.fulfilled]: () => true,
});

const isFetchingCurrent = createReducer(false, {
  [fetchCurrentUser.pending]: () => true,
  [fetchCurrentUser.fulfilled]: () => false,
  [fetchCurrentUser.rejected]: () => false,
});

const errorsReducer = createReducer([], {
  [usersLogInOperation.rejected]: (state, _) => state,
  [usersLogoutOperation.rejected]: (state, _) => state,
  [usersSignUpOperation.rejected]: (state, _) => state,

  // do I need pending status if I don't process it?
  [usersLogInOperation.pending]: (state, _) => state,
  [usersLogoutOperation.pending]: (state, _) => state,
  [usersSignUpOperation.pending]: (state, _) => state,
});

export const authReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  isLoggedIn: isLoggedIn,
  isFetchingCurrent: isFetchingCurrent,
  err: errorsReducer,
});
