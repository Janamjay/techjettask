/* eslint-disable react/prop-types */
import { useState } from "react";
import card from "/images/card.png";
import "./Carousel.css";

const RewardCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === 3 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? 3 : currentIndex - 1);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel px-5"
        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
      >
        <CarouselItem image={card} />
        <CarouselItem image={card} />
        <CarouselItem image={card} />
        <CarouselItem image={card} />
        <CarouselItem image={card} />
        <CarouselItem image={card} />
      </div>
      <div className="carousel-arrow">
        <button
          className="carousel-arrow-btn carousel-prev-btn"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="carousel-arrow-btn carousel-next-btn"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

const CarouselItem = ({ image }) => {
  return (
    <div className="carousel-item px-3">
      <img src={image} alt="" />
    </div>
  );
};

export default RewardCard;
