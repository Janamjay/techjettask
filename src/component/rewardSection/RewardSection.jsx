import { useState } from "react";
import border from "/images/border.png";

const RewardSection = () => {
  const [upto20, setUpto20] = useState(true);
  const [upto30, setUpto30] = useState(false);
  const [upto50, setUpto50] = useState(false);
  const [above60, setAbove60] = useState(false);

  return (
    <div className="bg-black py-8 flex flex-col items-center">
      <h3 className="text-4xl text-white text-center font-medium max-w-[90%] mb-6">
        Our Rewards Discover the Perks
      </h3>
      <ul className="max-w-[90%] text-[#4F4D65] w-full flex flex-wrap justify-center gap-4 sm:gap-8 text-sm md:text-base">
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
          {upto20 && <img src={border} alt="" />}
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
          {upto30 && <img src={border} alt="" />}
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
          {upto50 && <img src={border} alt="" />}
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
          {above60 && <img src={border} alt="" />}
        </li>
      </ul>
      <div className="max-w-[90%] w-full flex flex-wrap justify-center mt-8 gap-4 sm:gap-8">
        {upto20 && <div className="text-white">Content for upto 20% off</div>}
        {upto30 && <div className="text-white">Content for upto 30% off</div>}
        {upto50 && <div className="text-white">Content for upto 50% off</div>}
        {above60 && <div className="text-white">Content for 60% and above</div>}
      </div>
    </div>
  );
};

export default RewardSection;
