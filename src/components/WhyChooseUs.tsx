import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Professional Expertise",
      description: "Licensed and insured professionals with years of experience in roof cleaning and maintenance."
    },
    {
      title: "Quality Guaranteed",
      description: "We stand behind our work with a satisfaction guarantee on all our services."
    },
    {
      title: "Eco-Friendly Solutions",
      description: "Using environmentally responsible cleaning products that are safe for your home and the environment."
    },
    {
      title: "Competitive Pricing",
      description: "Fair and transparent pricing with free estimates for all services."
    },
    {
      title: "Local Service",
      description: "Proudly serving Lynnwood and surrounding areas with personalized attention."
    },
    {
      title: "Customer-First Approach",
      description: "Led by Nahom, our team prioritizes customer satisfaction and attention to detail."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
              Why Choose AGAPE Roof Cleaning?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-800 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 mb-10 lg:mb-0">
            <img
              src="https://i.ibb.co/zWHGPN8g/Whats-App-Image-2025-03-05-at-21-34-21-2.jpg"
              alt="Professional roof cleaning service"
              className="rounded-lg shadow-xl w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;