import React from "react";
import {Switch, Route} from "react-router";

import Products from "./containers/products/products"
import SingleProduct from "./containers/singleProduct/singleProduct";

export default (
  <Switch>
    <Route path='/' component={Products} exact/>
    <Route path='/products/:id' component={SingleProduct} exact/>
  </Switch>
)
