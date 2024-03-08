import address from "/images/address.png";
import login from "/images/login.png";
import otp from "/images/otp.png";
import shop from "/images/shop.png";
const StepsEnroll = () => {
  return (
    <div className="bg-black py-[4rem]  flex flex-col gap-1 items-center w-full">
      <h3 className="text-[40px] text-white text-center w-[582px] font-[400]">
        Steps to Enroll
      </h3>
      <div className="w-full flex justify-center items-center  mt-[8rem]">
        <div className="relative">
          <button className="text-base  min-w-[284px] max-w-[284px] min-h-[100.56px] max-h-[100.56px] text-white font-[600] p-2 border-[1px] rounded-[8px] border-[#4E41A8] ">
            Select your region
          </button>
          <img
            src={address}
            alt=""
            className="absolute top-[-98px] left-[25%] w-[150px] h-[150px]"
          />
        </div>
        <div className="w-[24px] border border-dashed border-purple-600"></div>
        <div className="relative">
          <button className="text-base  min-w-[284px] max-w-[284px] min-h-[100.56px] max-h-[100.56px] text-white font-[600] p-2 border-[1px] rounded-[8px] border-[#4E41A8]">
            Enter your Name, Mobile number and Email ID
          </button>
          <img
            src={login}
            alt=""
            className="absolute top-[-75px] left-[25%] w-[150px] h-[150px]"
          />
        </div>
        <div className="w-[24px] border border-dashed border-purple-600"></div>
        <div className="relative">
          <button className="text-base  min-w-[284px] max-w-[284px]  min-h-[100.56px] max-h-[100.56px]  text-white font-[600] p-2 border-[1px] rounded-[8px] border-[#4E41A8]">
            Validate you mobile number & Email ID with OTP
          </button>
          <img
            src={otp}
            alt=""
            className="absolute top-[-105px] left-[25%] w-[150px] h-[150px]"
          />
        </div>
        <div className="w-[24px] border border-dashed border-purple-600"></div>
        <div className="relative">
          <button className="text-base  min-w-[284px] max-w-[284px] min-h-[100.56px] max-h-[100.56px]  text-white font-[600] p-2 border-[1px] rounded-[8px] border-[#4E41A8]">
            Earn and Redeem points and Enjoy loyalty benefits
          </button>
          <img
            src={shop}
            alt=""
            className="absolute top-[-120px] left-[25%] w-[150px] h-[150px]"
          />
        </div>
      </div>
    </div>
  );
};

export default StepsEnroll;
