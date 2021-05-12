import { combineReducers } from "@reduxjs/toolkit";
import { commonApiReducer } from "./api/commonApi/common.slice";
import { restaurantReducer } from "./api/restaurant/restaurant.slice";

const rootReducer = combineReducers({

  commonApiState : commonApiReducer,
  restaurantState : restaurantReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
