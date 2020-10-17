import { combineReducers } from "@reduxjs/toolkit";
import { onSearchReducer } from "../features/Search/search.slice";
import { homeReducer } from '../pages/Home';

const rootReducer = combineReducers({
  SearchState: onSearchReducer,
  HomeState : homeReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
