import React from 'react';
import { Home, Droplets, Shield, Wrench } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: <Home className="w-12 h-12 text-blue-800" />,
    title: "Residential Roof Cleaning",
    description: "Professional roof cleaning with eco-friendly solutions. We ensure thorough cleaning while protecting your roof's integrity."
  },
  {
    icon: <Droplets className="w-12 h-12 text-blue-800" />,
    title: "Moss Treatment & Prevention",
    description: "Effective moss removal and preventative treatments using environmentally friendly solutions to protect your roof long-term."
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-800" />,
    title: "Gutter Cleaning",
    description: "Complete gutter cleaning service to prevent water damage and maintain proper drainage for your home."
  },
  {
    icon: <Wrench className="w-12 h-12 text-blue-800" />,
    title: "Minor Roof Repairs",
    description: "Quick and reliable repairs for minor roof issues, helping extend your roof's lifespan and prevent future problems."
  }
];

const ServicesList: React.FC = () => {
  return (
    <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default ServicesList;