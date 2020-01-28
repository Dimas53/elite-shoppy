import React from "react";
// import bg_img from "../images/bg_catalog.jpg"
import logo from "../images/logo_footer.png"
import "./header.css"
 const CatalogBg = () => {
  return(
    <section className="offer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="offer_text">
              <p>Catalog of all products by</p>
            </div>


          </div>
          <div className="col-12">
            <img src={logo} alt="logo" className="offer_logo"/>
          </div>
        </div>
      </div>
    </section>
  )
 }
 export default CatalogBg