const Hero = () => {
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-[700px] object-cover object-center"
          src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80"
          alt="Professional roof cleaning in action"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F2A44]/80 to-[#1F2A44]/50"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-28 px-4 sm:py-36 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Expert Roof Cleaning Solutions
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Serving Lynnwood and surrounding areas with top-tier roof cleaning
          services. Protect your home with our eco-friendly, professional
          approach.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#FF69B4] rounded-lg shadow-md hover:bg-[#FF85C1] hover:shadow-lg transition-all duration-300"
          >
            Get a Free Quote
          </a>
          <a
            href="tel:425-773-3101"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-[#FF69B4] bg-white rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
          >
            Call Now: (425) 773-3101
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
