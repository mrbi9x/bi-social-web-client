import { combineReducers } from "redux";
import authReducer from "./authSlice";
import themeReducer from "./themeSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
