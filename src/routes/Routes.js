import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Store from "../pages/store/Store";
import Cart from "../pages/cart/Cart";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Store} />
        <Route path="/cart" component={Cart} />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
