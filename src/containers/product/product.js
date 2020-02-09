// import "./products.css"
import React, {Component} from "react";
import {connect} from "react-redux";
// import * as R from "ramda";
import {Link} from "react-router-dom";

import {fetchProducts, loadMoreProducts, addProductToBasket} from "../../actions/actions";
import {getProducts} from "../../selectors";
// import Layout from "../layout/layout";


class RenderProduct extends Component {
  // componentDidMount() {
  //   this.props.fetchProducts()
  // }




  render() {
    const {product, index, addProductToBasket} = this.props
    const classCard = "col-6 col-md-6 col-lg-4  book-list d-flex justify-content-center"
    return(
      <div className={classCard} key={index} >
        <div className="card ">
          <Link to={`/products/${product.id}`} className="card_link">
            <img
              className="card_item"
              src={product.image}
              alt={product.name}
            />
          </Link>
          <div className="card_caption">
            <h4 className="card_name">
              <Link to={`/products/${product.id}`}>
                {product.name}
              </Link>
            </h4>
            <p className="card_size">{product.size}</p>
            <h4 className="card_price">
              <span className="card_price__first">${product.price} </span>
              <span> ${product.discount}</span>
            </h4>
            {/*<p>{shortDescription}</p>*/}
            <p className="">
              <button
                className="card_btn"
                onClick={() => addProductToBasket(product.id)}
              >
                Add to Cart
              </button>

            </p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: getProducts(state)
})

const mapDispatchToProps = {
  fetchProducts,
  loadMoreProducts,
  addProductToBasket
}
export default connect(mapStateToProps, mapDispatchToProps)(RenderProduct)