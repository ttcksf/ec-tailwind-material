import React from "react";
import Campaign from "../components/Campaign";
import HeaderMenu from "../components/HeaderMenu";
import Counter from "../components/Counter";
import DirectMessage from "../components/DirectMessage";
import Footer from "../components/Footer";
import Product6 from "../images/product6.png";

const Single = () => {
  return (
    <div>
      <Campaign />
      <HeaderMenu />
      <div className="md:max-w-[1000px] md:ml-auto md:mr-auto flex items-center justify-center md:flex-row flex-col m-4 p-4">
        <div className="flex-1 h-[100%] flex items-center justify-center">
          <img
            src={Product6}
            className="w-[100%] h-[100%] object-cover p-8"
            alt="product_image"
          />
        </div>
        <div className="md:flex-1 flex-[1.3] flex flex-col md:items-start  justify-items-center items-center">
          <h1 className="title md:text-[32px] text-[24px]">
            【予約商品】生誕祭記念バッジ
          </h1>
          <p className="text-justify mt-4 pr-0">
            本商品は予約商品のため発送までお時間をいただきます。
            <br />
            商品はイメージとなりますため仕上がりのデザインと若干異なる部分があります。
            <br />
            またお客様がご使用になられているパソコン、スマホによって色味が違った表示になっている可能性があります。
          </p>
          <div className="flex  flex-col place-self-start">
            <p className="mt-8 text-2xl">
              税込価格: <b>800</b>円
            </p>
            <div className="mt-8">
              <Counter />
            </div>
          </div>

          <button className="text-white bg-[#8a4af3] rounded-md shadow-md mt-[30px] p-3">
            Add to Cart
          </button>
        </div>
      </div>
      <DirectMessage />
      <Footer />
    </div>
  );
};

export default Single;
