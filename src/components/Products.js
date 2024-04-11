import React from "react";
import { LocalProductData } from "../localData/LocalProductData";
import Product from "./Product";

const Products = () => {
  return (
    <div className="p-8 flex flex-wrap">
      {LocalProductData.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
};

export default Products;
