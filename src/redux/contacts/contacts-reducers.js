import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { setFilter } from "./contacts-actions";
import {
  fetchPhoneBookContacts,
  addPhoneBookContact,
  removePhoneBookContact,
} from "./contacts-operations";

const itemsReducer = createReducer([], {
  [fetchPhoneBookContacts.fulfilled]: (_, action) => action.payload,
  [addPhoneBookContact.fulfilled]: (state, action) => [
    ...state,
    action.payload,
  ],
  [removePhoneBookContact.fulfilled]: (state, action) =>
    [...state].filter((item) => item.id !== action.payload),
});

const filterReducer = createReducer("", {
  [setFilter]: (_, action) => action.payload,
});

const errorReducer = createReducer([], {
  [fetchPhoneBookContacts.rejected]: (state, action) => [
    ...state,
    action.error,
  ],
  [addPhoneBookContact.rejected]: (state, action) => [...state, action.error],
  [removePhoneBookContact.rejected]: (state, action) => [
    ...state,
    action.error,
  ],
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  error: errorReducer,
});

export default contactsReducer;
