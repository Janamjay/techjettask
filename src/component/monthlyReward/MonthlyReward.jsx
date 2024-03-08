import monthly from "/images/monthly.png";
const MonthlyReward = () => {
  return (
    <div className="bg-black relative py-[4rem] pb-[7rem] px-[6rem] flex gap-5 items-center w-full">
      <div className="">
        <p className="text-[40px]  font-[400] text-white w-[394px]">
          Win Monthly Rewards and much More...
        </p>
        <div className="w-full">
          <div className="w-[1090px] flex justify-start">
            <button className="text-base text-white font-[600] px-10 py-6 border-[1px] rounded-[8px] border-[#4E41A8]">
              Win your monthly reward
            </button>
          </div>
        </div>
      </div>
      <img src={monthly} alt="" className="absolute right-0 " />
    </div>
  );
};

export default MonthlyReward;
