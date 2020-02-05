import React from "react";
import {Link} from "react-router-dom";

import "./header.css"
const BasketBg = () => {
  return(
    <section className="offer singlePage_offer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">

            <div className="offer_text">
              <p>Your Cart</p>
            </div>
          </div>
          <div className="col-12">
            <Link to='/products'>
              <button className="card_btn offer-const_btn">
                All catalog
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default BasketBg