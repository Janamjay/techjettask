import ClientName from "../clients/clientName/ClientName";

const Clients = () => {
  return (
    <div className="bg-black py-[4rem] flex flex-col items-center w-full">
      <h3 className="text-[40px] text-white text-center max-w-[90%] md:max-w-[537px] font-[500]">
        Our Encircle Reward Program
      </h3>
      <p className="max-w-[90%] md:max-w-[564px] text-center text-white font-[300px] text-[20px]">
        Providing the flexibility to redeem rewards from 10M+ products, top
        brands, gift cards, experiences, and more.
      </p>
      <ClientName />
    </div>
  );
};

export default Clients;
