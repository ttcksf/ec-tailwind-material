import React from "react";
import Campaign from "../components/Campaign";
import HeaderMenu from "../components/HeaderMenu";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";

const Top = () => {
  return (
    <div>
      <Campaign />
      <HeaderMenu />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Top;
