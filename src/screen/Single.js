import React from "react";
import Campaign from "../components/Campaign";
import HeaderMenu from "../components/HeaderMenu";
import Categories from "../components/Categories";
import Products from "../components/Products";
import DirectMessage from "../components/DirectMessage";
import Footer from "../components/Footer";

const Single = () => {
  return (
    <div>
      <Campaign />
      <HeaderMenu />
      <DirectMessage />
      <Footer />
    </div>
  );
};

export default Single;
