import { createSlice } from "@reduxjs/toolkit";

export const busListSlice = createSlice({
  name: "bus",
  initialState: {
    value: [],
  },
  reducers: {
    updateBusStopData: (state, action) => {
      console.info("printing state value");
      // console.info(action.payload);
      state.value = action.payload;
    },
  },
});

export const { updateBusStopData } = busListSlice.actions;
export const busStopList = (state) => state.busList.value;
export default busListSlice.reducer;
