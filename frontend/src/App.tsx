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
import {
  getLocationStart,
  selectuserLocationDetails,
} from "./pages/Home/home.slice";

function App() {
  const { latitude, longitude, error } = usePosition();
  const dispatch = useDispatch();
  const userLocationDetails = useSelector(selectuserLocationDetails);

  useEffect(() => {
    if (latitude && longitude) {
      dispatch(getLocationStart({ params: { lat: latitude, lon: longitude } }));
    }
  }, [latitude, longitude]);
  let cityName = userLocationDetails[0]?.city_name.toLowerCase();
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {userLocationDetails.length ? (
            <Redirect push to={`/${cityName}`} />
          ) : (
            <HomePage />
          )}
        </Route>
        <Route path='/:city'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
