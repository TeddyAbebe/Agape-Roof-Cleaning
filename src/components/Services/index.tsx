import ServicesList from "./ServicesList";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2A44] tracking-tight">
            Our Services
          </h2>

          <p className="mt-4 text-lg md:text-xl text-gray-700 font-medium">
            Professional Roof Cleaning Services to Protect and Maintain Your
            Home
          </p>
          
          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Agape Roof Cleaning, we deliver exceptional service with a
            commitment to customer satisfaction. Led by Nahom, our team excels
            in attention to detail, prompt responses, and fair pricing. We build
            trust through quality craftsmanship and strong client relationships.
          </p>

          {/* Divider */}
          <div className="mt-8 h-1 w-20 bg-[#FF69B4] rounded-full mx-auto"></div>
        </div>

        {/* Services List */}
        <ServicesList />
      </div>
    </section>
  );
};

export default Services;
