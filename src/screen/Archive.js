import React from "react";
import Campaign from "../components/Campaign";
import HeaderMenu from "../components/HeaderMenu";
import Categories from "../components/Categories";
import Products from "../components/Products";
import DirectMessage from "../components/DirectMessage";
import Footer from "../components/Footer";

const Archive = () => {
  return (
    <div>
      <Campaign />
      <HeaderMenu />
      <div className="flex flex-col p-8">
        <h1 className="text-[32px]">商品一覧</h1>
        <div className="flex items-center justify-between mt-4">
          <div className="flex md:flex-row flex-col">
            <p>ジャンル</p>
            <select className="md:ml-4 border-4 border-silver ml-0">
              <option selected disabled>
                選択してください
              </option>
              <option>イベント</option>
              <option>アパレル</option>
              <option>グッズ</option>
            </select>
          </div>
          <div className="flex md:flex-row flex-col md:items-start items-end">
            <p>並べ替え</p>
            <select className="ml-4 border-4 border-silver">
              <option selected>新しい順</option>
              <option>古い順番</option>
              <option>価格の低い順</option>
              <option>価格の高い順</option>
            </select>
          </div>
        </div>
      </div>
      <Categories />
      <Products />
      <DirectMessage />
      <Footer />
    </div>
  );
};

export default Archive;
