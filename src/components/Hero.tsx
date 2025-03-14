import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-20">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80"
          alt="Roof cleaning"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Professional Roof Cleaning Services
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Serving Lynnwood and surrounding areas with expert roof cleaning services. 
          Protect your investment with our professional cleaning solutions.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700"
          >
            Get Free Quote
          </a>
          <a
            href="tel:425-773-3101"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white hover:bg-gray-50"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;