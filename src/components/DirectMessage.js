import React from "react";
import { Send } from "@mui/icons-material";

const DirectMessage = () => {
  return (
    <div className="flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#82A284] p-4">
      <h1 className="md:text-[48px] text-[32px] font-bold">メールマガジン</h1>
      <h2 className="md:text-[24px] text-[16px] mt-4 mobile:text-center p-4">
        イベント予約、CDリリースなど新着情報はこちらから！
      </h2>
      <div className="flex mt-[3.2rem] item-center justify-between md:min-w-[32rem] min-h-[2.4rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden min-w-[20rem]">
        <input
          className="border-none pl-[24px] flex-[8]"
          type="email"
          placeholder="メールアドレス"
        />
        <button className="bg-[#4caf50] flex-1">
          <Send className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default DirectMessage;
