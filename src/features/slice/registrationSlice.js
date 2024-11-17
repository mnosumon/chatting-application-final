import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("user")) || null,
};

export const registrationSlice = createSlice({
  name: "signUpUser",
  initialState,
  reducers: {
    signInUser: (state, actions) => {
      state.value = actions.payload;
    },
    signOutUser: (state) => {
      state.value = null;
    },
  },
});

export const { signInUser, signOutUser } = registrationSlice.actions;

export default registrationSlice.reducer;
