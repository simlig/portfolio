"use client";

import React, { useState } from "react";
import Link from "next/link";

interface CarouselProps {
  slides: string[]; // Array of slide image URLs
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Move carousel slide
  const moveCarousel = (direction: number) => {
    setCurrentSlide((prevSlide) => {
      const nextSlide = (prevSlide + direction + slides.length) % slides.length;
      return nextSlide;
    });
  };

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => moveCarousel(-1)}
          className="cursor-pointer absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={() => moveCarousel(1)}
          className="cursor-pointer absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </>
  );
};
export default Carousel;
