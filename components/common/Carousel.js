// components/common/Carousel.js
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; // <-- 1. Import the Autoplay plugin
import styles from './Carousel.module.css';

const PrevButton = ({ enabled, onClick }) => (
  <button
    className={`${styles.arrowButton} ${styles.prevButton}`}
    onClick={onClick}
    disabled={!enabled}
  >
    <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"></path></svg>
  </button>
);

const NextButton = ({ enabled, onClick }) => (
  <button
    className={`${styles.arrowButton} ${styles.nextButton}`}
    onClick={onClick}
    disabled={!enabled}
  >
    <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"></path></svg>
  </button>
);

const Carousel = ({ slides, options }) => {
  // 2. Pass the Autoplay plugin into the useEmblaCarousel hook
  // We configure it to play every 5 seconds and pause on hover (stopOnMouseEnter)
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  ]);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    };
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi]);

  return (
    <div className={styles.embla}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {slides.map((slideContent, index) => (
            <div className={styles.slide} key={index}>
              {slideContent}
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default Carousel;