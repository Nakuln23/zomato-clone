import { combineReducers } from "@reduxjs/toolkit";

import { onSearchReducer } from "../features/Search/search.slice";

const rootReducer = combineReducers({
  SearchState: onSearchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
