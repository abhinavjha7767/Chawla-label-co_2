import { useLanguage } from "@/components/language-provider";
import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroSlide1 from "@/assets/hero-slide-1.webp";
import heroSlide2 from "@/assets/hero-slide-2.webp";
import heroSlide3 from "@/assets/hero-slide-3.webp";
import heroSlide4 from "@/assets/hero-slide-4.webp";

export default function HeroSlider() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      image: heroSlide1,
      quote: t.hero.slider[1].quote,
      subquote: t.hero.slider[1].subquote,
    },
    {
      image: heroSlide2,
      quote: t.hero.slider[2].quote,
      subquote: t.hero.slider[2].subquote,
    },
    {
      image: heroSlide3,
      quote: t.hero.slider[3].quote,
      subquote: t.hero.slider[3].subquote,
    },
    {
      image: heroSlide4,
      quote: t.hero.slider[4].quote,
      subquote: t.hero.slider[4].subquote,
    },
  ];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const textVariants = {
    enter: {
      opacity: 0,
      y: 30,
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
          </div>

          {/* Quote Content */}
          <div className="relative h-full container mx-auto px-6 flex items-center">
            <motion.div
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="max-w-2xl"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-4">
                {slides[currentSlide].quote}
              </h2>
              <p className="text-xl text-muted-foreground">
                {slides[currentSlide].subquote}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background/80 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background/80 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
