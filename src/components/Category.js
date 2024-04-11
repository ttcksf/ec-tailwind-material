import React from "react";

const Category = ({ product }) => {
  return (
    <div className="m-4 shadow-lg rounded-md overflow-hidden relative w-[100%] h-[100%]">
      <img
        src={product.src}
        className="w-[100%] object-cover"
        alt="category_img"
      />
      <div className="flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col">
        <h2 className="text-white font-medium text-[24px]">{product.title}</h2>
        <button className="btn">See More</button>
      </div>
    </div>
  );
};

export default Category;
