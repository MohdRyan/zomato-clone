import React, { useRef } from "react";
import "./FoodSlider.css";

const FoodSlider = () => {
  const scrollContainerRef = useRef(null);

  const images = [
    {
      src: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png",
      label: "Biryani",
    },
    {
      src: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
      label: "Pizza",
    },
    {
      src: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
      label: "Chicken",
    },
    {
      src: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
      label: "Thali",
    },
    {
      src: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
      label: "Burger",
    },
    {
      src: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
      label: "Fried Rice",
    },
    {
      src: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
      label: "Dosa",
    },
    {
      src: "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg",
      label: "North Indian",
    },
    {
      src: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
      label: "Cake",
    },
    {
      src: "https://b.zmtcdn.com/data/dish_photos/bda/9cdab6d5f275b8d2532e3878134ddbda.jpg",
      label: "Veg Meal",
    },
    {
      src: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
      label: "Rolls",
    },
    {
      src: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
      label: "Sandwich",
    },
  ];

  // Handle scroll
  const handleScroll = (direction) => {
    const imageWidth = 180; // New image width
    const gap = 30; // Gap between images
    const scrollAmount = imageWidth + gap;

    if (direction === "left") {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else if (direction === "right") {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="food-slider-wrapper">
      <h2 className="food-slider-title">Inspiration for your first order</h2>
      <div className="food-slider-container">
        <button
          className="scroll-button left"
          onClick={() => handleScroll("left")}
        >
          &#9664;
        </button>
        <div className="food-slider" ref={scrollContainerRef}>
          {images.map((item, index) => (
            <div className="food-item" key={index}>
              <img src={item.src} alt={item.label} className="food-image" />
              <p className="food-label">{item.label}</p>
            </div>
          ))}
        </div>
        <button
          className="scroll-button right"
          onClick={() => handleScroll("right")}
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default FoodSlider;
