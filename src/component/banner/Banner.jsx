import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BannerItem from "../banner/bannerItems/BannerItem";

const Banner = () => {
  return (
    <div className="pt-[6rem] pb-[2rem] w-full bg-black bannerItems">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={2000}
      >
        <div className="w-full flex justify-center">
          <div className="w-11/12 sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3">
            <BannerItem />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-11/12 sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3">
            <BannerItem />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-11/12 sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3">
            <BannerItem />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
