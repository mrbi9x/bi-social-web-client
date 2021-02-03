import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthRequest, authen, retrieveTokenWithCookie } from "apis/AuthApi";
import { AuthResponse } from "payloads/responses/AuthResponse";
interface AuthState {
  status: "initial" | "idle" | "loading" | "error";
  isAuth?: boolean;
  tokenType?: string;
  accessToken?: string;
  refreshToken?: string;
  error?: string;
}
const initialState: AuthState = {
  status: "initial",
  isAuth: false,
};

export const doLogin = createAsyncThunk(
  "auth/doLogin",
  async (authRequest: AuthRequest) => {
    return authen(authRequest);
  }
);

export const checkAuthStatus = createAsyncThunk("auth/checkAuth", async () => {
  return retrieveTokenWithCookie();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state: AuthState, action: PayloadAction<AuthState>) {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(doLogin.pending, (state) => {
        state.status = "loading";
        state.error = undefined;
      })
      .addCase(doLogin.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
        console.log(action);
      })
      .addCase(doLogin.fulfilled, (state, action) => {
        console.log(action.payload);
        const authRes: AuthResponse = action.payload;
        return { ...authRes, status: "idle", isAuth: true };
      })
      // check auth status
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        return { ...action.payload, status: "idle", isAuth: true };
      });
  },
});

export const selectAuth = (state: { auth: AuthState }) => state.auth;
export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
