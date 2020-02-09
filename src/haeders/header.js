import React from "react";
import "./header.css"
import logo from "../images/logo.png"
import BasketCard from "../components/basketCard/basketCard";
import {Link} from "react-router-dom";
import Search from "../components/search/search";

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-3 col-md-3">
            <div className="logo-group">
              <Link to='/'>
                <img src={logo} alt=""/>
              </Link>


            </div>
          </div>
          <div className="col-3 menu-collapse">
            <nav className="navigation">
              <ul className="menu d-flex">
                <li className="menu_item">
                  <Link to='/products'>
                    Catalog
                  </Link>
                </li>
                <li className="menu_item">Men <i className="fa fa-caret-down"/></li>
                <li className="menu_item">Women <i className="fa fa-caret-down"/></li>
                <li className="menu_item">Shoes <i className="fa fa-caret-down"/></li>
              </ul>
            </nav>
          </div>

          <div className="col-2">
            <Search/>
            {/*<div className="search d-flex align-items-center">*/}
            {/*  <input type="text" className="search_input"/>*/}
            {/*  <span>*/}
            {/*    <i className="fal fa-search"/>*/}
            {/*  </span>*/}
            {/*</div>*/}
          </div>
          <div className="col-4">
            <div className="info d-flex align-items-center justify-content-around">

              <BasketCard/>


              {/*<div className="info_item basket d-flex align-items-center">*/}
              {/*  <span>*/}
              {/*    <i className="fa fa-cart-arrow-down"/>*/}
              {/*  </span>*/}
              {/*  <div className="basket_text">*/}
              {/*    <p>$ 345.00</p>*/}
              {/*    <p>(3) items</p>*/}
              {/*  </div>*/}
              {/*</div>*/}
              <div className="info_item auth d-flex align-items-center">
                <span>
                  <i className="fa fa-user"/>
                </span>
                <div className="auth_text">
                  <p>Sign In</p>
                </div>
              </div>
              <div className="info_item account d-flex align-items-center">
                 <span>
                  <i className="fa fa-user-plus"/>
                </span>
                <div className="auth_text">
                  <p>Create Account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row sub-nav align-items-center">
          <div className="col-3">
            <div className="phone d-flex align-items-center justify-content-center">
              <i className="fa fa-phone "/>
              <p className="phone_text">Call: +(123) 45-67-890</p>
            </div>
          </div>
          <div className="col-2">
            <button className="card_btn call-back">
              Call back
            </button>
          </div>
          <div className="col-2">
            <div className="days d-flex align-items-center justify-content-center">
              <i className="far fa-calendar-check"/>
              <p className="days_graph">Mon - Fri, 9:00 - 21:00</p>
            </div>
          </div>
          <div className="col-2">
            <div className="mail d-flex align-items-center justify-content-center">
              <i className="far fa-envelope"/>
              <p className="mail_text">info@example.com</p>
            </div>
          </div>
          <div className="col-3">
            <div className="social d-flex align-items-center justify-content-center">
              <p className="social_text">Share on:</p>
              <div className="social_icons d-flex">
                <i className="fa fa-facebook-f"/>
                <i className="fab fa-instagram"/>
                <i className="fab fa-telegram-plane"/>
                <i className="fab fa-twitter"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header