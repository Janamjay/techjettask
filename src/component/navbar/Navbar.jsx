import { useState } from "react";
import logo from "/images/logo.png";
import flagIcon from "/images/flagIcon.png";
import { CgMenu, CgClose } from "react-icons/cg";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-black w-full fixed top-0 z-[100]">
      <div className="px-[3rem]  flex h-[59.5px] items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center justify-center">
            <img src={logo} alt="" />
            <p className="text-[10px] font-[400] text-white">
              ENCIRCLE REWARDS
            </p>
          </div>
          <div className="flex bg-[#171738] w-[91px] h-[33px] justify-center items-center gap-2 rounded-[6.25px]">
            <img src={flagIcon} alt="" className="w-[40px] rounded-[6.25px] " />
            <p className="text-white text-base mt-[-2px]">UAE</p>
          </div>
        </div>
        <div>
          <ul className="text-white flex items-center gap-[40px] font-[400] text-[15px]">
            <li>About Us</li>
            <li>Shop</li>
            <li>Refer & Earn</li>
            <li>Contact Us</li>
            <button className="font-[600] text-[12px] w-[158px] h-[45px] rounded-[5px] border-[1px] border-[#453E75]">
              Sign In/ Sign Up
            </button>
          </ul>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex items-center h-full">
          {show ? (
            <span className="text-white z-[10]" onClick={() => setShow(false)}>
              <CgClose style={{ height: "20px", width: "20px" }} />
            </span>
          ) : (
            <span className="text-white z-[10]" onClick={() => setShow(true)}>
              <CgMenu style={{ height: "20px", width: "20px" }} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
