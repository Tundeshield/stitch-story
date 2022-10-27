import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayName: '',
  email: '',
  isStaff: false,
  uid: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    logUserDetails: (state, action) => {
      return {
        ...state,
        displayName: action.payload.displayName,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
        uid: action.payload.uid,
      };
    },
    removeUserDetails: () => initialState,
  },
});

export const { logUserDetails, removeUserDetails } = userSlice.actions;

export default userSlice.reducer;
