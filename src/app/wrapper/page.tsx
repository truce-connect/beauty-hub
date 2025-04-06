'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

type CollectionItem = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  price: string;
  href?: string;
}; 

// Update the collections array as before...
const collections: CollectionItem[] = [
  
    {
      id: 1,
      title: "Cleansing Tone",
      subtitle: "Instantly resurface the skin with our collections",
      image: "/product-images/cleansing-tone.jpg",
      price: "£19.99"
    },
    {
      id: 2,
      title: "Asian White",
      subtitle: "Instantly resurface the skin with our collections",
      image: '/product-images/asian-white.jpg',
      price: "£19.99"
    },
    {
      id: 3,
      title: "Collagen Xtra-White",
      subtitle: "Instantly resurface the skin with our collections",
      image: '/product-images/collagene-xtra-white.jpg',
      price: "£16.99"
    },
    {
      id: 4,
      title: "Ever White Moroccan Whitening Soap",
      subtitle: "Instantly resurface the skin with our collections",
      image: '/product-images/morocan.jpg',
      price: "£15.60"
    },
    {
      id: 5,
      title: "Face Wash",
      subtitle: "Instantly resurface the skin with our collections",
      image: '/product-images/face-wash.jpg',
      price: "£17.99"
    },
    {
      id: 6,
      title: "Glow Boosting Lighting Oil",
      subtitle: "Instantly resurface the skin with our collections",
      image: '/product-images/glow.jpg',
      price: "£24.99"
    },
    {
      id: 7,
      title: "Glutac Injection",
      subtitle: "Instantly resurface the skin with our collections",
      image: "/product-images/glutac-injection.jpg",
      price: "£29.99"
    },
    {
      id: 8,
      title: "Glutathione",
      subtitle: "Instantly resurface the skin with our collections",
      image: "/product-images/glutatione.jpg",
      price: "£28.29"
    },
    {
      id: 9,
      title: "Glutathione Face Cream",
      subtitle: "Instantly resurface the skin with our collections",
      image: "/product-images/glutatione-face-cream.jpg",
      price: "£25.99"
    },
    {
      id: 10,
      title: "Glutathione Super",
      subtitle: "Instantly resurface the skin with our collections",
      image: "/product-images/glutatione-super.jpg",
      price: "£25.99"
    },
    {
      id: 11,
      title: "Half Cast Oil",
      subtitle: "Instantly resurface the skin with our collections",
      image: "/product-images/halfcastoil.jpg",
      price: "£16.99"
    },
    {
      id: 12,
      title: "Healthy Glow",
      subtitle: "Instantly resurface the skin with our collections",
      image: "/product-images/healthy-glow.jpg",
      price: "£17.59"
    },
    {
      id: 13,
      title: "Parley",
      subtitle: "Instantly resurface the skin with our collections",
      image: "/product-images/parley.jpg",
      price: "£9.99"
    },
    {
      id: 14,
      title: "SYM White",
      subtitle: "Instantly resurface the skin with our collections",
      image: "/product-images/sym-white.jpg",
      price: "£25.00"
    },
    {
      id: 15,
      title: "Whitening Hydrating",
      subtitle: "Instantly resurface the skin with our collections",
      image: "/product-images/whitening-hydrating.jpg",
      price: "£15.99"
    },
  ];


 
interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImageWithFallback = ({ src, alt, width, height, className, ...props }: ImageWithFallbackProps) => {
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div 
        className={`bg-gray-800 animate-pulse ${className}`}
        style={{ width, height }}
      />
    );
  }

  return (
    <>
      {isLoading && (
        <div 
          className={`bg-gray-800 animate-pulse ${className}`}
          style={{ width, height }}
        />
      )}
      <Image
        src={error ? '/fallback-image.jpg' : src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        {...props}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          console.error(`Failed to load image: ${src}`);
          setError(true);
          setIsLoading(false);
        }}
      />
    </>
  );
};

const arrowIcon = (
  <svg viewBox="0 0 14 10" fill="none" className="w-4 h-4 ml-2">
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" 
      fill="currentColor" 
    />
  </svg>
);

export default function CollectionSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 8; // Changed from 4 to 8 to show 2 rows of 4
  const totalSlides = Math.ceil(collections.length / itemsPerPage);

  const navigate = (direction: 'prev' | 'next') => {
    setCurrentSlide(prev => {
      if (direction === 'next') return (prev + 1) % totalSlides;
      return (prev - 1 + totalSlides) % totalSlides;
    });
  };

  const SlideControls = () => (
    <div className="mt-8 flex items-center justify-center gap-4">
      <button
        onClick={() => navigate('prev')}
        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
        disabled={currentSlide === 0}
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === idx ? 'bg-[#FFD700]' : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => navigate('next')}
        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
        disabled={currentSlide === totalSlides - 1}
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex justify-between items-center"
      >
        <h2 className="text-3xl font-bold text-amber-600">Shopping Aisle</h2>
        <Link 
          href="/collections" 
          className="hidden lg:inline-block text-amber-600 hover:text-amber-600 transition-colors"
          aria-label="View all collections"
        >
          View all
        </Link>
      </motion.div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex transition-transform duration-500 ease-out"
          style={{ 
            width: `${totalSlides * 100}%`,
            transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div 
              key={slideIndex}
              className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr"
              style={{ flex: `0 0 ${100 / totalSlides}%` }}
            >
              {collections
                .slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage)
                .map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    className="group relative bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-t-xl bg-gray-900">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full h-full"
                      >
                        <ImageWithFallback
                        src={item.image}
                        alt={`${item.title} - ${item.subtitle}`}
                        fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-90"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        quality={85}
                          priority={index === 0}
                        />
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"
                        />
                      </motion.div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-amber-600 mb-2">
                        <Link 
                          href={item.href || '#'}
                          className="hover:text-amber-600 transition-colors"
                        >
                          {item.title}
                        </Link>
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-2">
                        {item.subtitle}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-amber-600">{item.price}</span>
                        <Link
                          href={item.href || '/Shop'}
                          className="inline-flex items-centertext-amber-600 hover:text-amber-600 transition-colors"
                        >
                          Shop Now {arrowIcon}
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          ))}
        </motion.div>

        <SlideControls />
      </div>

      <div className="mt-8 text-center lg:hidden">
        <Link
          href="/collections"
          className="inline-block px-8 py-3 bg-[#FFD700] text-gray-900 rounded-full hover:bg-[#b59a00] transition-colors"
          aria-label="View all collections on mobile"
        >
          View All Collections
        </Link>
      </div>
    </section>
  );
}