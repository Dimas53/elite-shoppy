import React from "react";
import "./footer.css"
import logo from "../images/logo_footer.png"

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <img src={logo} alt=""/>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-sm-6 col-lg-3">
            <div className="links">
              <h6 className="links__title">About</h6>
              <ul className="links__text">
                <li><p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></li>
                <li>
                  <div className="social_icons social_icons__footer d-flex">
                    <i className="fa fa-facebook-f"/>
                    <i className="fab fa-instagram"/>
                    <i className="fab fa-telegram-plane"/>
                    <i className="fab fa-twitter"/>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2 offset-1">
            <div className="links">
              <h6 className="links__title">Products</h6>
              <ul className="links__text">
                <li className="menu_item">Home</li>
                <li className="menu_item">Men <i className="fa fa-caret-down"/></li>
                <li className="menu_item">Women <i className="fa fa-caret-down"/></li>
                <li className="menu_item">Shoes <i className="fa fa-caret-down"/></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="links">
              <h6 className="links__title">My Account</h6>
              <ul className="links__text">
                <li className="menu_item">Create account</li>
                <li className="menu_item">Sign in</li>
                <li className="menu_item">Checkout</li>
                <li className="menu_item">License</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="links">
              <h6 className="links__title">Contacts</h6>
              <ul className="links__text">
                <li>
                  <div className="phone d-flex align-items-center">
                    <i className="far fa-map-marker-alt"/>
                    <p className="phone_text">NY 100034, California, USA</p>
                  </div>
                </li>
                <li>
                  <div className="phone d-flex align-items-center">
                    <i className="fa fa-phone "/>
                    <p className="phone_text">Call: +(123) 45-67-890</p>
                  </div>
                </li>
                <li>
                  <div className="mail d-flex align-items-center">
                    <i className="far fa-envelope"/>
                    <p className="mail_text">info@example.com</p>
                  </div>
                </li>
                <li>
                  <div className="days d-flex align-items-center">
                    <i className="far fa-calendar-check"/>
                    <p className="days_graph">Mon - Fri, 9:00 - 21:00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="all_rights">
              &#169; 2019 Elite Shoppy. All rights reserved. | Design by dSdeveloper.ru
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer