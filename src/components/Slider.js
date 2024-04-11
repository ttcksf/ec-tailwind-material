import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { LocalSliderData } from "../localData/LocalSliderData";

const Slider = () => {
  const slideStyle = "slide flex items-center justify-center h-[100%]";
  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-md hover:cursor-pointer";

  const [slides] = useState(LocalSliderData);
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };
  return (
    <div className="slider h-[640px] bg-white md:flex items-center justify-between hidden">
      <div className={arrowStyle} onClick={prevSlide}>
        <ArrowLeftOutlined style={{ fontSize: "48px" }} />
      </div>
      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              className={
                `wrapper flex w-[100%] h-[560px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative` +
                slide.background
              }
              key={index}
            >
              <div className={slideStyle}>
                <div className="flex-1 flex justify-center items-center h-[100%]">
                  <img
                    className=" h-[100%] object-cover"
                    src={slide.src}
                    alt={slide.content.h2}
                  />
                </div>
                <div className="description flex flex-col flex-1 place-items-start justify-center ml-8">
                  <h2 className="text-[48px]">{slide.content.h2}</h2>
                  <p className=" text-[32px]">{slide.content.p}</p>
                  <button className="btn">Now On Sale</button>
                </div>
              </div>
            </div>
          );
        }
      })}
      <div className={arrowStyle} onClick={nextSlide}>
        <ArrowRightOutlined style={{ fontSize: "48px" }} />
      </div>
    </div>
  );
};

export default Slider;
