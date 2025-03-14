import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const images = [
    {
      url: "https://i.ibb.co/5W39xk39/Whats-App-Image-2025-03-05-at-21-33-01-5.jpg",
      alt: "Professional roof cleaning in progress",
    },
    {
      url: "https://i.ibb.co/PZKv4qSP/Whats-App-Image-2025-03-05-at-21-33-02-1.jpg",
      alt: "Roof cleaning with safety equipment",
    },
    {
      url: "https://i.ibb.co/Rk4ygXG7/Whats-App-Image-2025-03-05-at-21-33-02-2.jpg",
      alt: "Waterfront home roof cleaning",
    },
    {
      url: "https://i.ibb.co/kV3tvtc2/Whats-App-Image-2025-03-05-at-21-34-20-1.jpg",
      alt: "Moss removal from roof",
    },
    {
      url: "https://i.ibb.co/xKYbzdj6/Whats-App-Image-2025-03-05-at-21-34-20.jpg",
      alt: "Clean roof after service",
    },
    {
      url: "https://i.ibb.co/twPqTVyG/Whats-App-Image-2025-03-05-at-21-34-21.jpg",
      alt: "Roof cleaning process",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: number;
    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See the quality of our services through our recent projects
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-[600px] overflow-hidden rounded-lg shadow-xl">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
                  index === currentIndex ? "translate-x-0" : "translate-x-full"
                }`}
                style={{
                  transform: `translateX(${100 * (index - currentIndex)}%)`,
                }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={previousSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Slide Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-6 grid grid-cols-6 gap-4 overflow-x-auto pb-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative h-24 overflow-hidden rounded-lg transition-all ${
                  currentIndex === index
                    ? "ring-2 ring-blue-800 opacity-100"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Autoplay Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="mt-4 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {isAutoPlaying ? "Pause Slideshow" : "Play Slideshow"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
