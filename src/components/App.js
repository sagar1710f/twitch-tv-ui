import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import { Stream } from "./streams/module";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        {Stream.map((item, index) => (
          <Route
            path={item.route}
            component={item.components}
            exact
            key={`route${index}`}
          />
        ))}
      </BrowserRouter>
    </div>
  );
};

export default App;
