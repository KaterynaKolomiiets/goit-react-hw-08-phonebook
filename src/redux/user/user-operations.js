import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const usersLogInOperation = createAsyncThunk(
  "auth/login",
  async (user) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/users/login`, user);
      token.set(data.token);
      return data;
    } catch (error) {
     throw new Error (error)
    }
  }
);

export const usersLogoutOperation = createAsyncThunk(
  "auth/logout",
  async () => {
    try {
      const { data } = await axios.post(`${BASE_URL}/users/logout`);
      token.unset();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const usersSignUpOperation = createAsyncThunk(
  "auth/signup",
  async (user) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/users/signup`, user);
      token.set(data.token);
      return data;
    } catch (error) {
       throw new Error(error);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue("User is logged out");
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get(`${BASE_URL}/users/current`);
      return data;
    } catch (error) {
       throw new Error(error);
    }
  }
);
