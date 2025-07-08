"use client";

import React, { useState } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import styles from "../Carousel/Carousel.module.css"

interface CarouselProps {
  slides: string[]; // Array of slide image URLs
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const moveCarousel = (direction: number) => {
    setCurrentSlide((prevSlide) => {
      const nextSlide = (prevSlide + direction + slides.length) % slides.length;
      return nextSlide;
    });
  };

  return (
    <>
      <div className={styles.carouselMainContainer}>
        <div
          className={styles.carouselTransition}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((src, index) => (
            <div key={index} className={styles.imageContainer}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className={styles.carouselImage}
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => moveCarousel(-1)}
          className={styles.carouselButton + " left-0 bg-opacity-50"} 
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={() => moveCarousel(1)}
          className={styles.carouselButton + " right-0 bg-opacity-50"}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </>
  );
};
export default Carousel;
