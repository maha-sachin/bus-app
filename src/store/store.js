import { configureStore } from "@reduxjs/toolkit";
import BusListReducer from "../Components/busForm/busFormSlice";

export default configureStore({
  reducer: {
    busList: BusListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
