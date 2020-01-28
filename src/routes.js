import React from "react";
import {Switch, Route} from "react-router";

import Products from "./containers/products/products"

export default (
  <Switch>
    <Route path='/' component={Products} exact/>
  </Switch>
)
