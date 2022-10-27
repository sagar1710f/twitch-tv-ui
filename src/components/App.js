import React from "react";
import { Route, Router } from "react-router-dom";
import history from "../history";

import Header from "./Header";
import { Stream } from "./streams/module";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        {Stream.map((item, index) => (
          <Route
            path={item.route}
            component={item.components}
            exact={item.exact ? true : false}
            key={`route${index}`}
          />
        ))}
      </Router>
    </div>
  );
};

export default App;
