import React from "react";
import {connect} from "react-redux"
import * as R from "ramda"
import {
  getBasketProductsWithCount,
  getTotalBasketPrice, plusButton
} from "../../selectors";
import "./basketPage.css"
import App from "../app/app";
import BasketBg from "../../haeders/bg_basket";
import {Link} from "react-router-dom";
import {removeProductFromBasket, incrementProductFromBasket, cleanBasket} from "../../actions/actions";



const Basket = ({
                  products,
                  totalPrice,
                  plusButton,
                  removeProductFromBasket,
                  incrementProductFromBasket,
                  cleanBasket}) => {


  const isBasketEmpty = R.isEmpty(products)



  const renderContent = () => (

    <div className="cart_products">
      {isBasketEmpty && <div className="cart_empty">Your shopping cart is empty</div>}

        {products.map((product, index) => (

          <div
            className="cart_item d-flex align-items-start"
            key={index}
          >
            <div className="row">
              <div className="col-md-3 d-flex align-items-center">
              <Link to={`/products/${product.id}`} className="card_link">
                <div className="cart_img">
                  <img src={product.image} alt={product.name}/>
                </div>
            </Link>
              </div>
              <div className="col-md-6">
                <Link to={`/products/${product.id}`} className="card_link">
                <div className="cart_desc">
                  <p className="cart_price">$ {product.discount}</p>
                  <h5 className="cart_name">{product.name}</h5>
                  <p className="cart_text">{R.take(150, product.description)}</p>
                </div>
                </Link>
                <div className="cart_details d-flex">
                  <div className="quantity">
                    <h4 className="quantity_name">Quantity :</h4>

                    <button
                      type='button'
                      onClick={incrementProductFromBasket}

                    >+</button>

                    <p className="quantity_text">{product.count}</p>
                  </div>
                  <div className="size">
                    <h4 className="size_name">Size :</h4>
                    <p className="size_text">{product.size}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div>
                  <p className="cart_price cart_price__total">$ {(product.discount * product.count).toFixed(2)}</p>
                </div>
                <div
                  onClick={() => removeProductFromBasket(product.id)}
                  className="cart_delete"
                >
                  <i className="far fa-trash-alt"></i>
                </div>
              </div>
            </div>

          </div>


        ))}

      {R.not(isBasketEmpty) &&
        <div className="cart_finish">
          <div className="row align-items-center">
            <div className="col-6">
              <button
                onClick={cleanBasket}
                className="cart_clear card_btn"
                type='button'

              >
                Clean Basket
              </button>
            </div>
            <div className="col-6">
              <div className="cart_total">
                <p className="cart_total-text">
                  Subtotal: $ {totalPrice.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>



      }

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
    totalPrice: getTotalBasketPrice(state),
    plusButton
  }
}

const mapDispatchToProps = {
  removeProductFromBasket,
  incrementProductFromBasket,
  cleanBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)