import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const registrationSlice = createSlice({
  name: "signUpUser",
  initialState,
  reducers: {
    signUp: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { signUp } = registrationSlice.actions;

export default registrationSlice.reducer;
