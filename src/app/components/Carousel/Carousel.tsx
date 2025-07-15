"use client";

import React, { useEffect, useState } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import styles from "../Carousel/Carousel.module.css";

interface CarouselProps {
  slides: string[]; // Array of slide image URLs
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const openImage = () => {
    if (slides.length !== 0) {
      setIsExpanded(true);
      window.history.pushState({ modalOpen: true }, "Image Open"); 
    }
  };

  const closeImage = () => {
    setIsExpanded(false);
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  };

  useEffect(() => {
    const onPopState = () => {
      if (isExpanded) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [isExpanded]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (isExpanded && (e.key === "Backspace" || e.key === "Escape")) {
        closeImage();
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isExpanded]);

  const moveCarousel = (direction: number) => {
    setCurrentSlide((prevSlide) => {
      const nextSlide = (prevSlide + direction + slides.length) % slides.length;
      return nextSlide;
    });
  };

  return (
    <>
      <div className={styles.carouselMainContainer}>
        <div className={styles.carouselTransition} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((src, index) => (
            <div key={index} className={styles.imageContainer}>
              <img src={src} alt={`Slide ${index + 1}`} className={styles.carouselImage} onClick={openImage} />
            </div>
          ))}
        </div>

        <button onClick={() => moveCarousel(-1)} className={styles.carouselButton + " left-0 bg-opacity-50"}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button onClick={() => moveCarousel(1)} className={styles.carouselButton + " right-0 bg-opacity-50"}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      {isExpanded && slides.length > 0 && (
        <div className={styles.imageExpandedContainer} onClick={closeImage}>
          <img
            src={slides[currentSlide]}
            alt={`${currentSlide} Slide`}
            className={styles.expandedImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};
export default Carousel;
