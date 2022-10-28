import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  fullName: '',
  role: '',
  uid: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    logUserDetails: (state, action) => {
      return {
        ...state,
        email: action.payload.email,
        fullName: action.payload.fullName,
        role: action.payload.role,
        uid: action.payload.uid,
      };
    },
    removeUserDetails: () => initialState,
  },
});

export const { logUserDetails, removeUserDetails } = userSlice.actions;

export default userSlice.reducer;
