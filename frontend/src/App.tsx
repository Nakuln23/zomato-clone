import React, { useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import Search from "./features/Search/Search";
import HomePage from "./pages/Home/Home";
import { usePosition } from "./common/hooks/usePosition";
import ListRestaurant from "./pages/ListRestaurant/ListRestaurant";
import {
  getLocationsDetailsBasedOnCoordinatesStart,
  getUserCityDetailsStart,
  selectuserLocationDetails,
} from "./store/api/commonApi/common.slice";

function App() {
  const { latitude, longitude, error } = usePosition();
  const dispatch = useDispatch();
  const userLocationDetails = useSelector(selectuserLocationDetails);

  useEffect(() => {
    if (latitude && longitude) {
      dispatch(
        getUserCityDetailsStart({
          params: { lat: latitude, lon: longitude },
        })
      );
    }
  }, [latitude, longitude]);

  let cityName = userLocationDetails?.name?.toLowerCase();
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {userLocationDetails ? (
            <Redirect push to={`/${cityName}`} />
          ) : (
            <HomePage />
          )}
        </Route>
        <Route exact path='/:city'>
          <HomePage />
        </Route>
        <Route exact path='/:city/delivery'>
          <ListRestaurant />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
