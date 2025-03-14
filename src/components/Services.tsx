import React from 'react';
import { Home, Droplets, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-12 h-12 text-blue-800" />,
      title: "Residential Roof Cleaning",
      description: "Complete roof cleaning services for homes of all sizes. We remove moss, algae, and debris to protect your roof."
    },
    {
      icon: <Droplets className="w-12 h-12 text-blue-800" />,
      title: "Moss Treatment",
      description: "Professional moss removal and prevention treatments to extend the life of your roof."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-800" />,
      title: "Roof Protection",
      description: "Preventative treatments and maintenance programs to keep your roof clean and protected year-round."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Professional roof cleaning services to protect and maintain your home
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;