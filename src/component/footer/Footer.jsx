import logo from "/images/logo.png";
import Uae from "../../Assets/Logo/tanishquae.png";
import Usa from "../../Assets/Logo/tanishqusa.png";
import Titan from "../../Assets/Logo/titan.png";
import Tanishq from "../../Assets/Logo/tanisq.png";
import BrandsLogo from "./FooterData/BrandsLogo";

function Footer() {
  const images = [Uae, Usa, Tanishq, Titan];

  return (
    <div className="w-full bg-black ">
      <section className="flex flex-col items-center">
        <h2 className="text-white text-[36px] mb-[20px]">Shop Our Brands</h2>
        <div className="flex gap-4">
          {images.map((image, index) => (
            <BrandsLogo imgUrl={image} key={index} />
          ))}
        </div>
      </section>

      <section className="w-full flex px-5 mt-10">
        <div className="w-[20%]">
          <div className="flex flex-col items-center justify-center">
            <img src={logo} alt="" className="w-20" />
            <p className="text-[10px] font-[400] text-white">
              ENCIRCLE REWARDS
            </p>
          </div>
        </div>
        <div className="w-[30%]">
          <h2 className="text-gray-400 font bold">Follow Us On</h2>
          <div></div>
        </div>
        <div className="w-[25%]">
          <h2 className="text-purple-700 text-[22px] font-bold">Contact Us</h2>
          <p className="text-gray-400">
            Email: <span className="text-white">help@titan.com</span>
          </p>
          <p className="text-gray-400">
            Phone Number: <span className="text-white">+91-989802929</span>
          </p>
        </div>
        <div className="w-[25%] text-gray-400 flex justify-between items-end">
          <span>Shop</span>
          <span>About</span>
          <span>FAQs</span>
          <span>Customer Care</span>
        </div>
      </section>

      <section className="text-gray-400 border border-x-0 py-3 mt-[30px]">
        <div className="w-[60%] m-auto flex justify-between">
          <span>Privacy Policy</span>
          <span>Encircle Points Policy</span>
          <span>Terms And Conditions</span>
          <span>Return And Exchange Policy</span>
        </div>
      </section>

      <section className="text-gray-600 flex justify-between px-5 py-2">
        <p>&copy; 2023 Encircle Rewards</p>
        <p>Carefully Crafted By </p>
      </section>
    </div>
  );
}

export default Footer;
