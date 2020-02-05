import React from "react";
import {connect} from "react-redux"
import * as R from "ramda"
import {
  getBasketProductsWithCount,
  getTotalBasketPrice
} from "../../selectors";
import "./basketPage.css"
import App from "../app/app";
import BasketBg from "../../haeders/bg_basket";


const Basket = ({products, totalPrice}) => {

  const isBasketEmpty = R.isEmpty(products)


  const renderContent = () => (
    <div className="cart_products">
      {isBasketEmpty && <div>Your shopping cart is empty</div>}
        {products.map((product, index) => (

          <div
            className="cart_item d-flex"
            key={index}
          >
            <div className="cart_img">
              <img src={product.image} alt={product.name}/>
            </div>
            <div className="row">
              <div className="col-md-9">
                <div className="cart_desc">
                  <p className="cart_price">$ {product.discount}</p>
                  <h5 className="cart_name">{product.name}</h5>
                  <p className="cart_text">{R.take(50, product.description)}</p>
                </div>
              </div>
              <div className="col-md-3">

              </div>
            </div>



          </div>
        ))}

    </div>
  )

  return (
    <App>
      <BasketBg/>
      <div className="container-fluid catalog-container cart-page">

        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="cart">
              <div className="cart_head d-flex align-items-baseline justify-content-between">
                <h3 className="cart_title">My Cart</h3>
                <p className="cart_reserv">Items will be reserved for 60 minutes</p>
              </div>
                {renderContent()}
            </div>

          </div>



          <div className="col-md-6 col-lg-6">
            Order Details
          </div>
        </div>



      </div>
    </App>
  )
}

const mapStateToProps = state => {
  return {
    products: getBasketProductsWithCount(state),
    totalPrice: getTotalBasketPrice(state)
  }
}

export default connect(mapStateToProps)(Basket)