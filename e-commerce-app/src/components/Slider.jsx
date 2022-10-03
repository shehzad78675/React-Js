import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { ApiSlides } from "../api/SliderApi";
import './Slider.css'

function Slider() {
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    activeSlide === slides.length - 1 ? setActiveSlide(0): setActiveSlide(activeSlide + 1);
  }

  const prvSlide = () => {
    activeSlide > 0 ? setActiveSlide(activeSlide - 1): setActiveSlide(slides.length - 1);
  }

  // Styles
  const arrowStyle =
    "rounded-full bg-gray-50 flex justify-center items-center shadow-sm hover:cursor-pointer";

  return (
    <div className="h-[540px] bg-white flex items-center justify-between mobile:hidden sm:hidden">
      {/* Left Arrow Div */}
      <div className={arrowStyle}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} onClick={prvSlide}/>
      </div>

      {/* Slider Div */}
      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              key={index}
              className={`wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative ${slide.background}`}
            >
              <div className="slide flex justify-center items-center h-[100%]">
                <div className="forImage h-[100%] flex-1">
                  <img
                    className="h-[100%] object-cover"
                    src={slide.src}
                    alt="slide_image"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center place-items-start ml-11">
                  <h2 className="text-[55px]">{slide.content.h2}</h2>
                  <p className="text-[30px]">{slide.content.p}</p>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
          );
        }else{
          return null;
        }
      })}

      {/* Right Arrow Div */}
      <div className={arrowStyle}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} onClick={nextSlide}/>
      </div>
    </div>
  );
}

export default Slider;
