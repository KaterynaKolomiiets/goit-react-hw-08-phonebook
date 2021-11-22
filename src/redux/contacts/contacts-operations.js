import { createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   fetchContacts,
//   addContact,
//   removeContact,
//   fetchCurrentUser
// } from "../../services/connections-api";
import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";


const BASE_URL = "https://connections-api.herokuapp.com";

export const fetchPhoneBookContacts = createAsyncThunk(
  "contacts/fetchPhoneBookContacts",
  async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/contacts`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
export const addPhoneBookContact = createAsyncThunk(
  "contacts/addPhoneBookContact",
  async (newContact, thunkAPI) => {
    const state = thunkAPI.getState();
    if (
      state.contacts.items.some(
        (item) => item.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      Notify.warning(`${newContact.name} is already in your contacts`);
      return thunkAPI.rejectWithValue(
        `Naming conflict: user *${newContact.name}* already exists`
      );
    }

    try {
      const { data } = await axios.post(`${BASE_URL}/contacts`, newContact);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const removePhoneBookContact = createAsyncThunk(
  "contacts/removePhoneBookContact",
  async (id) => {
    try {
      axios.delete(`${BASE_URL}/contacts/${id}`);
      return id;
    } catch (error) {
      throw new Error(error);
    }
  }
);
