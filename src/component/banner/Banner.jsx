import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BannerItem from "../banner/bannerItems/BannerItem";
const Banner = () => {
  return (
    <div className="pt-[5rem] pb-[2rem] flex justify-center w-full bg-black bannerItems">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={2000}
      >
        <div className="w-full flex justify-center">
          <div className="w-[80%] h-[460px]">
            <BannerItem />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[80%] h-[460px]">
            <BannerItem />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[80%] h-[460px] ">
            <BannerItem />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
