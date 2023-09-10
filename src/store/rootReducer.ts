import { combineReducers } from "redux";
import { LoginReducer } from "./Login/LoginReducer";



const rootReducer = combineReducers({
  login: LoginReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;