import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80",
      title: "Expert Roof Cleaning Solutions",
      description:
        "Serving Lynnwood and surrounding areas with top-tier roof cleaning services. Protect your home with our eco-friendly approach.",
      alt: "Professional roof cleaning in action",
    },
    {
      image:
        "https://i.ibb.co/twPqTVyG/Whats-App-Image-2025-03-05-at-21-34-21.jpg",
      title: "Moss Removal Specialists",
      description:
        "Safe and effective moss removal to extend your roof's lifespan. Professional service you can trust.",
      alt: "Roof moss removal process",
    },
    {
      image:
        "https://i.ibb.co/kV3tvtc2/Whats-App-Image-2025-03-05-at-21-34-20-1.jpg",
      title: "Residential Roof Care",
      description:
        "Comprehensive roof cleaning for homes in Lynnwood and beyond. Eco-friendly solutions for lasting results.",
      alt: "Clean residential roof",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="relative pt-20 overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-[500px] sm:h-[600px] md:h-[700px]"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                className="w-full h-full object-cover object-center"
                src={slide.image}
                alt={slide.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#1F2A44]/80 to-[#1F2A44]/50"></div>
            </div>

            {/* Content with Animation */}
            <div className="relative max-w-7xl mx-auto py-12 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 text-center h-full flex flex-col justify-start animate-slide-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight animate-fade-in">
                {slide.title}
              </h1>

              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
                {slide.description}
              </p>

              {/* Call-to-Action Buttons */}
              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-fade-in-delay-2">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-[#FF69B4] rounded-lg shadow-md hover:bg-[#FF85C1] hover:shadow-lg transition-all duration-300"
                >
                  Get a Free Quote
                </a>
                <a
                  href="tel:425-773-3101"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-[#FF69B4] bg-white rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  Call Now: (425) 773-3101
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
