import { configureStore } from "@reduxjs/toolkit";
import registrationSlice from "./slice/registrationSlice";
import sentMessageSlice from "./slice/sentMessageSlice";

export const store = configureStore({
  reducer: {
    signUpUser: registrationSlice,
    singleFriend: sentMessageSlice,
  },
});
