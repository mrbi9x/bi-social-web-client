import { createSlice } from "@reduxjs/toolkit";
interface TodoState {
  isAuth: boolean;
}
const authSlice = createSlice({
  name: "auth",
  initialState: { isAuth: false },
  reducers: {
    setAuth(state: TodoState, action: any) {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
