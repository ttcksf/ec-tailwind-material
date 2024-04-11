import { Search } from "@mui/icons-material";
import React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const HeaderMenu = () => {
  return (
    <div className="w-[100%] h-[64px] shadow-md relative z-10 ">
      <div className="wrapper pt-[8px] pb-[8px] flex justify-between items-center pl-[4px] pr-[4px] md:pl-[24px] md:pr-[24px]">
        <div className=" left flex flex-1  items-center">
          <div className="flex border-[4px] border-solid border-lightgrey rounded-md items-center ml-[8px] p-[4px]">
            <input
              type="text"
              className="border-none w-[80px] md:w-[240px] "
              placeholder="検索"
            />
            <Search className="text-lightgrey" />
          </div>
        </div>
        <div className="hidden md:block center flex-1 text-center ml-4 md:ml-0">
          <div className="font-bold text-sm md:text-lg">ゆる市場</div>
        </div>
        <div className="right flex md:flex-1 items-center md:justify-end justify-center flex-[2]">
          <div className="text-[16px], cursor-pointer, ml-[8px] md:ml-[25px]">
            会員登録
          </div>
          <div className="text-[16px], cursor-pointer, ml-[8px] md:ml-[25px]">
            ログイン
          </div>
          <div className="text-[16px], cursor-pointer, ml-[8px] md:ml-[25px]">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
