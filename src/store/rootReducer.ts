import { combineReducers } from "redux";
import habits from "./ducks/habits/reducer";

export const rootReducer = combineReducers({
	habits,
});
