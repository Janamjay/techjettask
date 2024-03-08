import reward1 from "/images/reward1.png";
const EncircleWorld = () => {
  return (
    <div className="bg-black py-[4rem]  flex flex-col gap-1 items-center w-full">
      <h3 className="text-[40px]  text-white text-center w-[417px] font-[500]">
        Our Encircle World
      </h3>
      <p className="w-[417px] text-center text-white font-[300px] text-[20px] ">
        join our social community and stay updated with latest offers and
        discounts
      </p>
      <img src={reward1} alt="" className="pt-[2rem]" />
    </div>
  );
};

export default EncircleWorld;
