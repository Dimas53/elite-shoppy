import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import "./basketDropdown.css"

import {
  getTotalBasketCount,
  getTotalBasketPrice
} from "../../selectors";


const BasketCard = ({totalBasketCount, totalBasketPrice}) => {
  return (
    <div className="info_item dropdown">
      <Link
        to='/basket'
        className="basket d-flex  align-items-center"
      >
        <span>
           <i className="fa fa-cart-arrow-down"/>
        </span>
        <div className="basket_text">
          <p>$ {totalBasketPrice.toFixed(2)}</p>
          <p>{totalBasketCount} items</p>
        </div>
      </Link>

      <div className="dropdown-child">
        <p>$ {totalBasketPrice.toFixed(2)}</p>
        <p>{totalBasketCount} items</p>

      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    totalBasketCount: getTotalBasketCount(state),
    totalBasketPrice: getTotalBasketPrice(state)
  }
}

export default connect(mapStateToProps, null)(BasketCard)