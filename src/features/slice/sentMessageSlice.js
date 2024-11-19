import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("message")) || null,
};

export const sentMessageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    singleFriend: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { singleFriend } = sentMessageSlice.actions;
export default sentMessageSlice.reducer;
