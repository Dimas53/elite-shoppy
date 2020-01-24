import "./products.css"
import React, {Component} from "react";
import {connect} from "react-redux";
// import * as R from "ramda";
import {Link} from "react-router-dom";

import {fetchProducts, loadMoreProducts} from "../../actions/actions";
import {getProducts} from "../../selectors";


class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }


  renderProduct (product, index) {
    // const shortDescription = `${R.take(21, product.description)}`
    const lastPrice = Math.floor(product.price - product.price / 100 * 25)
    return(
      <div className="col-6 col-md-6 col-lg-4 book-list d-flex justify-content-center" key={index}>
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
              <span> ${lastPrice}</span>
            </h4>
            {/*<p>{shortDescription}</p>*/}
            <p className="">
              <button className="card_btn">
                Add to Cart
              </button>
              {/*<Link to={`/products/${product.id}`}*/}
              {/*  className="btn btn-default"*/}
              {/*>*/}
              {/*  More info...*/}
              {/*</Link>*/}
            </p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {products, loadMoreProducts} = this.props
    return (
        <div className="books row">
          {products.map((product, index) => this.renderProduct(product, index))}
          <div className="col-5 col-sm-4 col-xl-3 ml-auto">
            <button
              onClick={loadMoreProducts}
              className="card_btn card_btn_more">
              More Products
            </button>
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
  loadMoreProducts
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)