import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Residential Roof Cleaning",
    description:
      "Professional roof cleaning with eco-friendly solutions. We ensure thorough cleaning while protecting your roof's integrity.",
    image:
      "https://i.ibb.co/5W39xk39/Whats-App-Image-2025-03-05-at-21-33-01-5.jpg",
  },
  {
    title: "Moss Treatment & Prevention",
    description:
      "Effective moss removal and preventative treatments using environmentally friendly solutions to protect your roof long-term.",
    image:
      "https://i.ibb.co/5W39xk39/Whats-App-Image-2025-03-05-at-21-33-01-5.jpg",
  },
  {
    title: "Gutter Cleaning",
    description:
      "Complete gutter cleaning service to prevent water damage and maintain proper drainage for your home.",
    image:
      "https://i.ibb.co/5W39xk39/Whats-App-Image-2025-03-05-at-21-33-01-5.jpg",
  },
  {
    title: "Minor Roof Repairs",
    description:
      "Quick and reliable repairs for minor roof issues, helping extend your roof's lifespan and prevent future problems.",
    image:
      "https://i.ibb.co/5W39xk39/Whats-App-Image-2025-03-05-at-21-33-01-5.jpg",
  },
];

const ServicesList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default ServicesList;
