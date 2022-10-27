import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSupervisor: false,
};

export const supervisorConfirmedSlice = createSlice({
  name: 'staffConfirmed',
  initialState,

  reducers: {
    confirmedSupervisor: (state, action) => {
      return {
        ...state,
        isSupervisor: action.payload.isSupervisor,
      };
    },
    removeUserDetails: () => initialState,
  },
});

export const { confirmedSupervisor } = supervisorConfirmedSlice.actions;

export default supervisorConfirmedSlice.reducer;
