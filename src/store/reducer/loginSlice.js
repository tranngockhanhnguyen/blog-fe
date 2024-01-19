import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = loginSlice.actions;

export default loginSlice.reducer;
