import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProductPage from "./components/pages/ProductPage";
import HomePage from "./components/pages/HomePage";
import SignInPage from "./components/pages/SignInPage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/products" component={ProductPage} exact />
        <Route path="/Home" component={HomePage} exact />
        <Route path="/" component={SignInPage} exact />
      </Switch>
    </Router>
  );
};

export default App;