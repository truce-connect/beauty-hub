'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Premium Skincare",
    subtitle: "Discover Our New Collection",
    image: "./images/real1.jpg",
    cta: "Shop Now"
  },
  {
    id: 2,
    title: "Summer Sale",
    subtitle: "Up to 50% Off",
    image: "./images/slide3.webp",
    cta: "Explore Offers"
  },
  {
    id: 3,
    title: "Luxury Bundles",
    subtitle: "Best Selling Sets",
    image: "./images/slide4.jpg",
    cta: "View Collection"
  }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex((prev) => 
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prev) => 
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const variants = {
    initial: (direction: string) => ({
      x: direction === 'right' ? '100%' : '-100%',
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: (direction: string) => ({
      x: direction === 'right' ? '-100%' : '100%',
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' }
    })
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute h-full w-full"
        >
          <div 
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          >
            {/* Centered Content Section */}
            <div className="flex h-full items-center justify-center bg-black/30 px-8 text-white">
              <div className="max-w-2xl space-y-6 text-center">
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl font-bold md:text-5xl"
                >
                  {slides[currentIndex].title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl"
                >
                  {slides[currentIndex].subtitle}
                </motion.p>
                
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mx-auto block rounded-lg bg-amber-600 px-8 py-3 
                           font-medium hover:bg-amber-700 transition-colors"
                >
                  {slides[currentIndex].cta}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full
               bg-black/30 p-3 text-white hover:bg-black/50 transition-all"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full
               bg-black/30 p-3 text-white hover:bg-black/50 transition-all"
      >
        <ChevronRight size={32} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-all
                      ${index === currentIndex ? 'bg-amber-600' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}