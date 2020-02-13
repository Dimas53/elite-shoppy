import React from "react";
import Header from "../../haeders/header";
import Footer from "../../footer/footer";
// import CatalogBg from "../../haeders/bg_catalog";
import MainSlider from "../../sliders/sider-main";





const MainPage = ({children}) => (
  <div className="view-container app">
    <Header/>
    <MainSlider/>
    {children}

    <Footer/>

  </div>
)

export default MainPage