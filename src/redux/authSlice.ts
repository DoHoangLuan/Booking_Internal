import { createSlice } from "@reduxjs/toolkit";

const authStaffSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentStaff: null,
      isFetching: false,
      error: false,
    },
    register: {
      isFetching: false,
      error: false,
      success:false
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentStaff = action.payload;
      state.login.error = false;
    },
    logininFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = true

    },
    registerFailed: (state) => {
      state.register.isFetching = false;
      state.register.success = true
      state.register.error = false;
    },
  },
});

export const { loginStart, logininFailed, loginSuccess,registerFailed,registerStart,registerSuccess } =
  authStaffSlice.actions;

export default authStaffSlice.reducer;
