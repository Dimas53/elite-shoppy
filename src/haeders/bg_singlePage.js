import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import "./header.css"
import {getProductsById} from "../selectors";



class SinglePageBg extends Component {

  renderName() {
    const {singleProduct} = this.props
    return (
      <div className="offer_text">
        <p>{singleProduct.name}</p>
      </div>

    )
  }

  render() {
    const {singleProduct} = this.props
    return (
      <section className="offer singlePage_offer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              {singleProduct && this.renderName()}
              {/*<div className="offer_text">*/}
              {/*  <p>{singleProduct.name}</p>*/}
              {/*</div>*/}
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
}

const mapStateToProps = state => {
  return {
    singleProduct: getProductsById(state, state.singlePage.id)
  }
}


export default connect(mapStateToProps, null)(SinglePageBg)