import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("user")) || null,
};

export const registrationSlice = createSlice({
  name: "signUpUser",
  initialState,
  reducers: {
    signIn: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { signIn } = registrationSlice.actions;

export default registrationSlice.reducer;
