import React, {Component} from "react";
import {connect} from "react-redux"
import * as R from "ramda";

import {
  fetchSingleProductById,
  addProductToBasket
} from "../../actions/actions";
import {getProductsById} from "../../selectors";
import App from "../app/app";
import "./singleProduct.css"
import Magnifier from "react-magnifier"
import SinglePageBg from "../../haeders/bg_singlePage";


class SingleProduct extends Component {
  componentDidMount() {
    this.props.fetchSingleProductById(this.props.match.params.id)
  }

  renderContent() {
    const {singleProduct, addProductToBasket} = this.props
    const shortDescription = `${R.take(116, singleProduct.description)}`
    // const lastPrice = Math.floor(singleProduct.price - singleProduct.price / 100 * 25)
    return (
      <div className="row">
        <div className="col-md-5">


          <div className="product_img">
            <Magnifier src={singleProduct.image} zoomFactor={1.2} mgShape='square' alt=""/>
          </div>
          <div className="product_photos d-flex">
            <div className="product_thumbnail">
              <Magnifier src={singleProduct.image_2} zoomFactor={1.8} mgShape='square' alt=""/>
            </div>
            <div className="product_thumbnail">
              <Magnifier src={singleProduct.image_3} zoomFactor={1.8} mgShape='square' alt=""/>
            </div>
          </div>

        </div>
        <div className="col-md-6">
          <h3 className="product_name">{singleProduct.name}</h3>
          <h4 className="product_price">
            <span >$ {singleProduct.discount} </span>
            <span className="product_price__first">$ {singleProduct.price} </span>
          </h4>
          <div className="rating">
            <span className="strong-rating-wrapper in-view">
              <span className="strong-rating">
                <span className="star current"/>
                <span className="star current"/>
                <span className="star current"/>
                <span className="star"/>
                <span className="star"/>
              </span>
            </span>
          </div>
          <div className="short_desc">
            <h4 className="desc_short_name">Quick Overview :</h4>
            <p className="desc_short_text">{shortDescription}</p>
          </div>
          <div className="quantity">
            <h4 className="quantity_name">Quantity :</h4>
            <p className="quantity_text">1 + 2</p>
          </div>
          <div className="size">
            <h4 className="size_name">Size :</h4>
            <p className="size_text">{singleProduct.size}</p>
          </div>
          <button
            type='button'
            onClick={() => addProductToBasket(singleProduct.id)}
            className="card_btn product_add">
            Add to Cart
          </button>

        </div>
      </div>
    )
  }

  renderSidebar() {
    return (

      <div>Sidebar</div>
    )
  }

  renderDesc() {
    const {singleProduct} = this.props
    return (
      <div className="row mt-5">
        <div className="col-md-8 col-lg-9">
          <div className="description">
            <h3 className="desc_product">Product Description</h3>
            <h4 className="desc_product_name">
              {singleProduct.name}
            </h4>
            <p className="desc_product_text">
              {singleProduct.description}
              {singleProduct.description}
              {singleProduct.description}
            </p>
          </div>
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="product_item">
            <img src={singleProduct.image} alt=""/>
          </div>
        </div>
      </div>

    )
  }


  render() {
    const {singleProduct} = this.props
    return (
      <App>
        <SinglePageBg />
        <div className="container-fluid catalog-container product">

          <div className="row">
            <div className="col-md-8 col-lg-9">
              {singleProduct && this.renderContent()}
            </div>
            <div className="col-md-4 col-lg-3">
              {singleProduct && this.renderSidebar()}
            </div>
          </div>

          {singleProduct && this.renderDesc()}

        </div>
      </App>

    )
  }
}

const mapStateToProps = state => {
  return {
    singleProduct: getProductsById(state, state.singlePage.id)
  }
}

const mapDispatchToProps = {
  fetchSingleProductById,
  addProductToBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)