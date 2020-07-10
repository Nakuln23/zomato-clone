import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Search from "./features/Search/Search";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/:city">
            <Search />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
