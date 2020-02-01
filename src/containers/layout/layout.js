import React from "react";

import App from "../app/app";


const Layout = ({children}) => (
  <App>


    <div className="container-fluid catalog-container">
      <div className="row">
        <div className="col-12">
          <h1 className="title">
            <span>Men's </span>
            Wear
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-lg-3">Sidebar</div>
        <div className="col-md-8 col-lg-9">{children}</div>
      </div>
    </div>


  </App>
)

export default Layout