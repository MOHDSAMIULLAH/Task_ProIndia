// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state for authentication
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};

// Async thunk for login action (mock example)
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      // Replace with actual API call
      const response = await fakeApiLogin(credentials);
      const token = response.token;
      localStorage.setItem('token', token);
      return token;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Fake API login function (replace with actual API call)
const fakeApiLogin = (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.email === 'test@test.com' && credentials.password === 'password') {
        resolve({ token: 'fake-jwt-token' });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

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
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Exporting the logout action
export const { logout } = authSlice.actions;

// Selector to access the auth state
export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
