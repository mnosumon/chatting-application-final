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
    userBlock: (state) => {
      state.value = null;
    },
  },
});

export const { singleFriend, userBlock } = sentMessageSlice.actions;
export default sentMessageSlice.reducer;
