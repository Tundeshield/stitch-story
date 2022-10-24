import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const taskSlice = createSlice({
  name: 'task',
  initialState,

  reducers: {
    addTask: (state, action) => [...state, action.payload],
    removeTask: (state) => {
      return {
        ...state,
        taskName: '',
        taskDescription: '',
        startDate: '',
        endDate: '',
      };
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
