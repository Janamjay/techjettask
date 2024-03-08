import { useState } from "react";
import rewardbg from "/images/rewardbg.png";
import circle1 from "/images/circle1.png";
import circle2 from "/images/circle2.png";
import ribbons from "/images/ribbons.png";
import arrow from "/images/arrow.png";
import border from "/images/border.png";

const RewardProgram = () => {
  const [allMember, setAllMember] = useState(true);
  const [silver, setSilver] = useState(false);
  const [gold, setGold] = useState(false);
  const [platinum, setPlatinum] = useState(false);
  const linearGradientStyle = {
    backgroundImage: `linear-gradient(to right, #E1E7EC 100%, #E7ECF0 63%, #FFFFFF 86%, #E1E5E8 39%)`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <div className="bg-[#110F2F] py-[5rem]">
      <p className="text-white text-[40px] text-center py-[2rem]">
        <span className="font-[500]"> Unleashing the Power of</span>
        <span className="font-[700]"> Encircle reward Program</span>
      </p>
      <div className="w-full flex justify-center items-center gap-7">
        <div className="w-[922.76px] flex justify-center items-start gap-[132px]">
          <div className="w-[216.43px] py-[42.95px]">
            <ul className="text-[#4F4D65] h-[271.05px] w-[215.39px] flex flex-col justify-start gap-[30px] text-[24px] font-[600]">
              <li
                className={`cursor-pointer ${allMember ? "text-white" : ""}`}
                onClick={() => {
                  setAllMember(true);
                  setSilver(false);
                  setGold(false);
                  setPlatinum(false);
                }}
              >
                All Members
                {allMember ? <img src={border} alt="" /> : ""}
              </li>
              <li
                className={`cursor-pointer ${silver ? "text-white" : ""}`}
                onClick={() => {
                  setAllMember(false);
                  setSilver(true);
                  setGold(false);
                  setPlatinum(false);
                }}
              >
                Silver Elite
                {silver ? <img src={border} alt="" /> : ""}
              </li>
              <li
                className={`cursor-pointer ${gold ? "text-white" : ""}`}
                onClick={() => {
                  setAllMember(false);
                  setSilver(false);
                  setGold(true);
                  setPlatinum(false);
                }}
              >
                Gold Elite
                {gold ? <img src={border} alt="" /> : ""}
              </li>
              <li
                className={`cursor-pointer ${platinum ? "text-white " : ""}`}
                onClick={() => {
                  setAllMember(false);
                  setSilver(false);
                  setGold(false);
                  setPlatinum(true);
                }}
              >
                Platinum Elite
                {platinum ? <img src={border} alt="" /> : ""}
              </li>
            </ul>
          </div>
          {allMember && (
            <div className="w-[574px] h-[331.84px] bg-[#171929] rounded-[35.88px] relative">
              <div
                className="bg-cover h-full "
                style={{ backgroundImage: `url(${rewardbg})` }}
              >
                <p
                  className="text-[36px] font-[900] pt-[98px] pl-[52px]"
                  style={linearGradientStyle}
                >
                  All Member
                </p>
                <p className="text-[#828282] text-[20px] font-[400] w-[271px] pl-[52px]">
                  Redeem your points on Tanishq, Mia, Titan Eyeplus & Titan
                  watches.
                </p>
                <p className="flex items-center gap-2 pl-[52px] pt-[28px] text-[#6352D0]">
                  <span className="text-[17.94px] font-[500]">Know More</span>
                  <span>
                    <img src={arrow} alt="" />
                  </span>
                </p>
                <img
                  src={circle1}
                  alt=""
                  className="absolute left-[65%] top-[-15px]"
                />
                <img
                  src={circle2}
                  alt=""
                  className="absolute top-[315px] left-[10%]"
                />
                <img
                  src={circle2}
                  alt=""
                  className="absolute top-[65%] right-[10%]"
                />
                <img
                  src={ribbons}
                  alt=""
                  className="absolute top-0 left-[53.5%]"
                />
              </div>
            </div>
          )}
          {silver && (
            <div className="w-[574px] h-[331.84px] bg-[#171929] rounded-[35.88px] relative">
              <div
                className="bg-cover h-full "
                style={{ backgroundImage: `url(${rewardbg})` }}
              >
                <p
                  className="text-[36px] font-[900] pt-[98px] pl-[52px]"
                  style={linearGradientStyle}
                >
                  Silver Elite
                </p>
                <p className="text-[#828282] text-[20px] font-[400] w-[271px] pl-[52px]">
                  Redeem your points on Tanishq, Mia, Titan Eyeplus & Titan
                  watches.
                </p>
                <p className="flex items-center gap-2 pl-[52px] pt-[28px] text-[#6352D0]">
                  <span className="text-[17.94px] font-[500]">Know More</span>
                  <span>
                    <img src={arrow} alt="" />
                  </span>
                </p>
                <img
                  src={circle1}
                  alt=""
                  className="absolute left-[65%] top-[-15px]"
                />
                <img
                  src={circle2}
                  alt=""
                  className="absolute top-[315px] left-[10%]"
                />
                <img
                  src={circle2}
                  alt=""
                  className="absolute top-[65%] right-[10%]"
                />
                <img
                  src={ribbons}
                  alt=""
                  className="absolute top-0 left-[53.5%]"
                />
              </div>
            </div>
          )}
          {gold && (
            <div className="w-[574px] h-[331.84px] bg-[#171929] rounded-[35.88px] relative">
              <div
                className="bg-cover h-full "
                style={{ backgroundImage: `url(${rewardbg})` }}
              >
                <p
                  className="text-[36px] font-[900] pt-[98px] pl-[52px]"
                  style={linearGradientStyle}
                >
                  Gold Elite
                </p>
                <p className="text-[#828282] text-[20px] font-[400] w-[271px] pl-[52px]">
                  Redeem your points on Tanishq, Mia, Titan Eyeplus & Titan
                  watches.
                </p>
                <p className="flex items-center gap-2 pl-[52px] pt-[28px] text-[#6352D0]">
                  <span className="text-[17.94px] font-[500]">Know More</span>
                  <span>
                    <img src={arrow} alt="" />
                  </span>
                </p>
                <img
                  src={circle1}
                  alt=""
                  className="absolute left-[65%] top-[-15px]"
                />
                <img
                  src={circle2}
                  alt=""
                  className="absolute top-[315px] left-[10%]"
                />
                <img
                  src={circle2}
                  alt=""
                  className="absolute top-[65%] right-[10%]"
                />
                <img
                  src={ribbons}
                  alt=""
                  className="absolute top-0 left-[53.5%]"
                />
              </div>
            </div>
          )}
          {platinum && (
            <div className="w-[574px] h-[331.84px] bg-[#171929] rounded-[35.88px] relative">
              <div
                className="bg-cover h-full "
                style={{ backgroundImage: `url(${rewardbg})` }}
              >
                <p
                  className="text-[36px] font-[900] pt-[98px] pl-[52px]"
                  style={linearGradientStyle}
                >
                  Platinum Elite
                </p>
                <p className="text-[#828282] text-[20px] font-[400] w-[271px] pl-[52px]">
                  Redeem your points on Tanishq, Mia, Titan Eyeplus & Titan
                  watches.
                </p>
                <p className="flex items-center gap-2 pl-[52px] pt-[28px] text-[#6352D0]">
                  <span className="text-[17.94px] font-[500]">Know More</span>
                  <span>
                    <img src={arrow} alt="" />
                  </span>
                </p>
                <img
                  src={circle1}
                  alt=""
                  className="absolute left-[65%] top-[-15px]"
                />
                <img
                  src={circle2}
                  alt=""
                  className="absolute top-[315px] left-[10%]"
                />
                <img
                  src={circle2}
                  alt=""
                  className="absolute top-[65%] right-[10%]"
                />
                <img
                  src={ribbons}
                  alt=""
                  className="absolute top-0 left-[53.5%]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full">
        <div className="w-[1090px] flex justify-end">
          <button className="text-base   text-white font-[600] px-10 py-6 border-[1px] rounded-[8px] border-[#4E41A8]">
            Join Encircle Program
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardProgram;
