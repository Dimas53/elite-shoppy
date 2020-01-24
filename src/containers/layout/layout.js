import React from "react";
import {Switch, Route} from "react-router";

import Products from "../products/products";

const routes = (
  <Switch>
    <Route path='/' component={Products} exact/>
  </Switch>
)

const Layout = () => (
  <div className="view-container">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 col-lg-3">Sidebar</div>
        <div className="col-md-8 col-lg-9">{routes}</div>
      </div>
    </div>
  </div>
)

export default Layout