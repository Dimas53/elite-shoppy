import React from "react";
import {Switch, Route} from "react-router";

import Products from "./containers/products/products"
import SingleProduct from "./containers/singleProduct/singleProduct";
import MainPage from "./containers/mainPage/mainPage";
import Basket from "./containers/basketPage/basketPage";

export default (
  <Switch>
    <Route path='/' component={MainPage} exact/>
    <Route path='/products' component={Products} exact/>
    <Route path='/products/:id' component={SingleProduct} exact/>
    <Route path='/basket' component={Basket} exact/>
  </Switch>
)
