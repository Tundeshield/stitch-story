import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  companyName: '',
  companyEmail: '',
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,

  reducers: {
    viewedProjectDetails: (state, action) => {
      return {
        ...state,
        companyName: action.payload.companyName,
        companyEmail: action.payload.companyEmail,
        contactPerson: action.payload.contactPerson,
      };
    },
    removeviewedProjectDetails: () => initialState,
  },
});

export const { viewedProjectDetails, removeviewedProjectDetails } =
  projectSlice.actions;

export default projectSlice.reducer;
