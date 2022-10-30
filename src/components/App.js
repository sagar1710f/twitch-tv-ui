import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import "../style/App.css";

import Header from "./Header";
import { Stream } from "./streams/module";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            {Stream.map((item, index) => (
              <Route
                path={item.route}
                component={item.components}
                exact={item.exact ? true : false}
                key={`route${index}`}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
