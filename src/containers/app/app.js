import React from "react";
import Header from "../../haeders/header";
import Footer from "../../footer/footer";
import CatalogBg from "../../haeders/bg_catalog";
// import MainSlider from "../../sliders/sider-main";


const App = ({children}) => (
  <div className="view-container app">
    <Header/>
    <CatalogBg/>
    {children}

    <Footer/>

  </div>
)

export default App