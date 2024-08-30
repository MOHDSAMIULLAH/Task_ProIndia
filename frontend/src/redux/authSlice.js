// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state for authentication
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};

let BaseUrl = "https://task-proindia.onrender.com"

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }, thunkAPI) => {
  try {
    const response = await axios.post(`${BaseUrl}/api/auth/login`, { email, password });
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Invalid credentials');
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.status = "succeeded";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Exporting the logout action
export const { logout } = authSlice.actions;

// Selector to access the auth state
export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
