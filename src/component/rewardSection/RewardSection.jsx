import { useState } from "react";
import border from "/images/border.png";
import RewardCard from "./RewardCard";

const RewardSection = () => {
  const [upto20, setUpto20] = useState(true);
  const [upto30, setUpto30] = useState(false);
  const [upto50, setUpto50] = useState(false);
  const [above60, setAbove60] = useState(false);
  return (
    <div className="bg-black py-[4rem]  flex flex-col gap-1 items-center w-full">
      <h3 className="text-[40px] text-white text-center w-[582px] font-[400]">
        Our Rewards Discover the Perks
      </h3>
      <ul className="w-[672px] flex justify-center mt-[20px] items-center gap-[43px] text-[#4F4D65] font-[600px] text-[20px] ">
        <li
          className={`cursor-pointer ${upto20 ? "text-white" : ""}`}
          onClick={() => {
            setUpto20(true);
            setUpto30(false);
            setUpto50(false);
            setAbove60(false);
          }}
        >
          upto 20% off
          {upto20 ? <img src={border} alt="" /> : ""}
        </li>
        <li
          className={`cursor-pointer ${upto30 ? "text-white" : ""}`}
          onClick={() => {
            setUpto20(false);
            setUpto30(true);
            setUpto50(false);
            setAbove60(false);
          }}
        >
          upto 30% off
          {upto30 ? <img src={border} alt="" /> : ""}
        </li>
        <li
          className={`cursor-pointer ${upto50 ? "text-white" : ""}`}
          onClick={() => {
            setUpto20(false);
            setUpto30(false);
            setUpto50(true);
            setAbove60(false);
          }}
        >
          upto 50% off
          {upto50 ? <img src={border} alt="" /> : ""}
        </li>
        <li
          className={`cursor-pointer ${above60 ? "text-white" : ""}`}
          onClick={() => {
            setUpto20(false);
            setUpto30(false);
            setUpto50(false);
            setAbove60(true);
          }}
        >
          60% and above
          {above60 ? <img src={border} alt="" /> : ""}
        </li>
      </ul>
      <div className="pt-3">
        {upto20 && (
          <div>
            <RewardCard />
          </div>
        )}
        {upto30 && (
          <div>
            <RewardCard />
          </div>
        )}
        {upto50 && (
          <div>
            <RewardCard />
          </div>
        )}
        {above60 && (
          <div>
            <RewardCard />
          </div>
        )}
      </div>
      <div className="w-full">
        <div className="flex justify-center mt-6">
          <button className="text-base   text-white font-[600] px-10 py-6 border-[1px] rounded-[8px] border-[#4E41A8]">
            Join Encircle Program
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardSection;
