import React from "react";
import Campaign from "../components/Campaign";
import HeaderMenu from "../components/HeaderMenu";
import Counter from "../components/Counter";
import DirectMessage from "../components/DirectMessage";
import Footer from "../components/Footer";
import Product6 from "../images/product6.png";
import Product8 from "../images/product8.png";

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
      <div className="flex lg:flex-row md:m-8 m-4 flex-col">
        <div className="flex flex-col flex-1 md:mr-8">
          <div className="item">
            <div className=" product flex md:pl-8 pl-0 items-center">
              <img
                className="product_img w-[8rem]"
                src={Product6}
                alt="product_img"
              />

              <div className="disc flex items-start  h-auto flex-col md:ml-8 ml-4">
                <p>
                  <b>商品ID&nbsp;:&nbsp;</b>123456789
                </p>
                <p>
                  <b>商品名&nbsp;:&nbsp;</b>【予約商品】生誕祭記念バッジ
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
            <div className=" product flex md:pl-8 pl-0 items-center">
              <img
                className="product_img w-[8rem]"
                src={Product8}
                alt="product_img"
              />

              <div className="disc flex items-start  h-auto flex-col md:ml-8 ml-4">
                <p>
                  <b>商品ID&nbsp;:&nbsp;</b>0987654321
                </p>
                <p>
                  <b>商品名&nbsp;:&nbsp;</b>【予約商品】生誕祭記念バッジ
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

        <div className="summary flex-[0.4] flex flex-col items-center w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg md:p-8 p-4 text-lg mb-8">
          <h1 className="text-[2rem]">ご注文内容</h1>
          <div className="summary">
            <p>お買い上げ点数:2点</p>
          </div>
          <div className="summary">
            <p>【予約商品】生誕祭記念バッジ:800円</p>
          </div>
          <div className="summary">
            <p>【予約商品】生誕祭記念バッジ:800円</p>
          </div>
          <div className="summary text-2xl font-bold">
            <p>合計:1600円</p>
          </div>
        </div>
      </div>
      <DirectMessage />
      <Footer />
    </div>
  );
};

export default Cart;
