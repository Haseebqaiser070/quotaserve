import React from "react";
import Banner from "../component/Fashion/Banner";
import BannerBottom from "../component/Fashion/BannerBottom";
import HotProduct from "../component/Fashion/HotProduct";
import InstgramSlider from "../component/Common/Instagram";
import Footer from "../component/Common/Footer";
import Header from "../component/Common/Header";
import Category from "../component/Categories/Category";
const Fashion = () => {
  return (
    <>
      <Header />
      <Banner />
      <Category />
      {/* <BannerBottom /> */}
      <HotProduct />
      {/* <InstgramSlider />  */}
      <Footer />
    </>
  );
};

export default Fashion;
