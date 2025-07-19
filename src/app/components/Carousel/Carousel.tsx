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
  const [isVisible, setIsVisible] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number>(0);

  const openImage = () => {
    if (slides.length === 0) return;
    setIsExpanded(true);
    window.history.pushState({ modalOpen: true }, "Image Open");

    setTimeout(() => setIsVisible(true), 10);
  };

  const closeImage = () => {
    setIsVisible(false);
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
      if ((e.key === "Backspace" && isExpanded) || (e.key === "Escape" && isExpanded)) {
        closeImage();
        e.preventDefault();
      } else if (e.key === "ArrowRight") {
        moveCarousel(1);
        e.preventDefault();
      } else if (e.key === "ArrowLeft") {
        moveCarousel(-1);
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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX - touchEndX;

    if (distance > 50 && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (distance < -50 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }

    setTouchStartX(0);
  };
  return (
    <>
      <div className={styles.carouselMainContainer}>
        <div
          className={styles.carouselTransition}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((src, index) => (
            <div key={index} className={styles.imageContainer}>
              <img src={src} alt={`Slide ${currentSlide}`} className={styles.carouselImage} onClick={openImage} />
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
        <div
          className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-300 ${
            isVisible ? "bg-black bg-opacity-80" : "bg-neutral-700/[var(--bg-opacity)] [--bg-opacity:0]"
          }`}
          onClick={closeImage}
        >
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide}`}
            className={`transform transition-transform duration-500 ease-in-out max-w-full max-h-full ${
              isVisible ? "scale-100" : "scale-1"
            }`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              moveCarousel(-1);
            }}
            className={styles.carouselButton + " left-0 bg-opacity-50"}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              moveCarousel(1);
            }}
            className={styles.carouselButton + " right-0 bg-opacity-50"}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </>
  );
};
export default Carousel;
