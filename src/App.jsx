import Navbar from "./component/navbar/Navbar";
import Banner from "./component/banner/Banner";
import Clients from "./component/clients/Clients";
import RewardProgram from "./component/rewardProgram/RewardProgram";
import RewardSection from "./component/rewardSection/RewardSection";
import StepsEnroll from "./component/stepenroll/StepsEnroll";
import SigninSection from "./component/signin/SigninSection";
import MonthlyReward from "./component/monthlyReward/MonthlyReward";
import EncircleWorld from "./component/encircle/EncircleWorld";
import GiftCard from "./component/giftCard/GiftCard";
import Footer from "./component/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Clients />
      <RewardProgram />
      <RewardSection />
      <StepsEnroll />
      <SigninSection />
      <MonthlyReward />
      <EncircleWorld />
      <GiftCard />
      <Footer />
    </>
  );
}

export default App;
