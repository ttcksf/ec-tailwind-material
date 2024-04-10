import React, { useState } from "react";
import { FavoriteBorderOutlined, SearchOutlined } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Product = ({ product }) => {
  const [hoverEffects, setHoverEffects] = useState(" opacity-0");

  const MouseHoverOn = () => {
    setHoverEffects(" opacity-1 bg-[rgba(137,74,242,0.4)]");
  };

  const MouseHoverOut = () => {
    setHoverEffects(" opacity-0");
  };
  return (
    <div
      className="flex items-center justify-center flex-1 min-w-[240px] min-h-[240px] m-2 overflow-hidden rounded-md shadow-lg relative"
      onMouseEnter={MouseHoverOn}
      onMouseLeave={MouseHoverOut}
    >
      <img src={product.src} alt="product" />
      <div
        className={
          `flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` +
          hoverEffects
        }
      >
        <div className="h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#655DBB] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer">
          <ShoppingCartIcon />
        </div>
        <div className="h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#655DBB] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer">
          <FavoriteBorderOutlined />
        </div>
        <div className="h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#655DBB] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer">
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
