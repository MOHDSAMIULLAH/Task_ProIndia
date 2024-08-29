// redux/taskSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../services/api';

// Fetch tasks from the server
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('http://localhost:5000/api/tasks/');
  return response.data.data;
});

// Add a new task to the server
export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
  const response = await axios.post('http://localhost:5000/api/tasks/', task);
  return response.data.data;
});

// Update an existing task on the server
export const updateTask = createAsyncThunk('tasks/updateTask', async (task) => {
  const response = await axios.put(`http://localhost:5000/api/tasks/${task.id}`, task);
  return response.data.data;
});

// Delete a task from the server
export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id) => {
  await axios.delete(`http://localhost:5000/api/tasks/${id}`);
  return id;
});

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loading = false;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((task) => task._id === action.payload._id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task._id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
