import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface AuthState {
  isAuth: boolean;
}
const initialState: AuthState = {
  isAuth: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state: AuthState, action: PayloadAction<AuthState>) {
      state.isAuth = action.payload.isAuth;
    },
  },
});

export const selectAuth = (state: { auth: AuthState }) => state.auth.isAuth;
export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
