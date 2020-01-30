import React from "react";
import Header from "../../haeders/header";
import Footer from "../../footer/footer";
// import CatalogBg from "../../haeders/bg_catalog";
import MainSlider from "../../sliders/sider-main";


const Layout = ({children}) => (
  <div className="view-container">
    <Header/>
    <MainSlider/>
    {/*<CatalogBg/>*/}

    <div className="container-fluid catalog-container">
      <div className="row">
        <div className="col-12">
          <h1 className="title">
            <span>Men's </span>
            Wear
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-lg-3">Sidebar</div>
        <div className="col-md-8 col-lg-9">{children}</div>
      </div>
    </div>

    <Footer/>

  </div>
)

export default Layout