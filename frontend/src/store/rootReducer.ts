import { combineReducers } from "@reduxjs/toolkit";

import { onSearchReducer } from "../features/Search";

const rootReducer = combineReducers({
  SearchState: onSearchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
