import React, { useState } from "react";

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

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    alt: string;
  } | null>(null);

  const openModal = (image: { url: string; alt: string }) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2A44] tracking-tight">
            Our Portfolio
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700 font-medium">
            Showcasing Excellence in Roof Cleaning and Maintenance
          </p>
          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Agape Roof Cleaning, our portfolio reflects our dedication to
            quality and precision. Each project highlights our expertise in
            transforming roofs with eco-friendly solutions, meticulous care, and
            outstanding results. Browse our work to see the difference we make.
          </p>
          <div className="mt-8 h-1 w-20 bg-[#FF69B4] rounded-full mx-auto"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.alt}
              </p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative max-w-4xl w-full mx-4">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal Image */}
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              {/* Caption */}
              <p className="mt-4 text-center text-white text-lg font-medium">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
