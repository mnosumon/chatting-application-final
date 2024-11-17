import { configureStore } from "@reduxjs/toolkit";
import registrationSlice from "./slice/registrationSlice";

export const store = configureStore({
  reducer: {
    signUpUser: registrationSlice,
  },
});
