import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";

import './App.css';

// <Switch> Makes sure only the first route that matches the current path is used

// <Router> not using, why? -- check out browswer/index.js

const App = () => (
  <Switch>
    {routes.map((route, i) => <Route key={i} {...route} />)}
  </Switch>
);

export default App;