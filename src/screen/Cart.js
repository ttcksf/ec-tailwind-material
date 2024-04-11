import React from "react";
import Campaign from "../components/Campaign";
import HeaderMenu from "../components/HeaderMenu";
import Counter from "../components/Counter";
import DirectMessage from "../components/DirectMessage";
import Footer from "../components/Footer";
import Product6 from "../images/product6.png";

const Cart = () => {
  return (
    <div>
      <Campaign />
      <HeaderMenu />
      <div className="flex items-center justify-between p-4 mt-4 md:flex-row flex-col">
        <button className="btn mt-0">買い物を続ける</button>
        <div className="flex underline text-lg hover:cursor-pointer md:m-0 m-4">
          <p>カート内の商品: 3</p>
          <p className="ml-8">お気に入り: 0</p>
        </div>
        <button className="btn mt-0">決済に進む</button>
      </div>
      <div className="flex lg:flex-row m-8 flex-col">
        <div className="flex flex-col flex-1 md:mr-8">
          <div className="item">
            <div className=" product flex pl-8 items-center">
              <img
                className="product_img w-[8rem]"
                src={Product6}
                alt="product_img"
              />

              <div className="disc flex items-start  h-auto flex-col ml-8">
                <p>
                  <b className="mr-4">商品ID:</b>123456789
                </p>
                <p>
                  <b className="mr-4">商品名:</b>【予約商品】生誕祭記念バッジ
                </p>
              </div>
            </div>

            <div className="quantity">
              <Counter />
              <p className="flex items-center justify-center text-4xl">
                <b>800円</b>
              </p>
            </div>
          </div>
          <div className="item">
            <div className=" product flex pl-8 items-center">
              <img
                className="product_img w-[8rem]"
                src={Product6}
                alt="product_img"
              />

              <div className="disc flex items-start  h-auto flex-col ml-8">
                <p>
                  <b className="mr-4">商品ID:</b>123456789
                </p>
                <p>
                  <b className="mr-4">商品名:</b>【予約商品】生誕祭記念バッジ
                </p>
              </div>
            </div>

            <div className="quantity">
              <Counter />
              <p className="flex items-center justify-center text-4xl">
                <b>800円</b>
              </p>
            </div>
          </div>
        </div>

        <div className="summary flex-[0.4] flex flex-col items-center w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg p-8 text-lg mb-8">
          <h1 className="text-[2rem]">ご注文内容</h1>
          <div className="summary">
            <p>お買い上げ点数:</p>
            <p>2点</p>
          </div>
          <div className="summary">
            <p>【予約商品】生誕祭記念バッジ</p>
            <p>800円</p>
          </div>
          <div className="summary">
            <p>【予約商品】生誕祭記念バッジ</p>
            <p>800円</p>
          </div>
          <div className="summary text-2xl font-bold">
            <p>合計:</p>
            <p>1400円</p>
          </div>
        </div>
      </div>
      <DirectMessage />
      <Footer />
    </div>
  );
};

export default Cart;
