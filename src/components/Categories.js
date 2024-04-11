import React from "react";
import { LocalCategoryData } from "../localData/LocalCategoryData";
import Category from "./Category";

const Categories = () => {
  return (
    <div className="flex items-center p-8 flex-col">
      {LocalCategoryData.map((product, index) => (
        <Category product={product} key={index} />
      ))}
    </div>
  );
};

export default Categories;
