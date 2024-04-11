import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  LocationOnOutlined,
  LocalPhoneOutlined,
  EmailOutlined,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="flex items-center md:flex-row justify-around p-4 flex-col md:items-start">
      <div className=" flex-1 flex flex-col md:flex-wrap p-4">
        <h1 className="text-[24px]">乃ゆる坂46合同会社</h1>
        <p>
          JASRAC許諾第xxxxxxxx号
          <br />
          JASRAC許諾第yyyyyyyy号
          <br />
          JASRAC許諾第zzzzzzzz号
        </p>
      </div>

      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-4">
          <LocationOnOutlined className="text-[#8a4af3]" />
          <p className="pl-4">東京都</p>
        </div>
        <div className="flex m-4">
          <LocalPhoneOutlined className="text-[#521da8]" />
          <p className="pl-4">123-456-7890</p>
        </div>
        <div className="flex m-4">
          <EmailOutlined className="text-[#8a4af3]" />
          <p className="pl-4">lorem.co.ltd@gmail.com</p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col p-2">
        <div className="m-4 rounded-full cursor-pointer p-4 text-white' bg-sky-500">
          <Facebook />
        </div>
        <div className="m-4 rounded-full cursor-pointer p-4 text-white bg-orange-500">
          <Instagram />
        </div>
        <div className="m-4 rounded-full cursor-pointer p-4 text-white bg-sky-400">
          <Twitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
