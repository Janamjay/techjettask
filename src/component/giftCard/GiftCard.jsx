import finalcard from "/images/finalcard.png";
const GiftCard = () => {
  return (
    <div className="bg-[#110F2F] py-[4rem]  flex flex-col gap-1 items-center w-full">
      <h3 className="text-[40px]  text-white text-center w-[409px] font-[700]">
        Expressing Joy The Gift Card Gesture!
      </h3>
      <img src={finalcard} alt="" className="" />
    </div>
  );
};

export default GiftCard;
