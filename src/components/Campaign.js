import { Close } from "@mui/icons-material";
import React, { useState } from "react";

const Campaign = () => {
  const [campaignStyle, setCampaignStyle] = useState(
    "bg-[#E4AEC5] font-bold text-white flex items-center justify-center"
  );

  const isClose = () => {
    setCampaignStyle(campaignStyle + " hidden");
  };

  return (
    <div className={campaignStyle}>
      ただいまGWセール実施中！
      <Close className="cursor-pointer" onClick={isClose} />
    </div>
  );
};

export default Campaign;
