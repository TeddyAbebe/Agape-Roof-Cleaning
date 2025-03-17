import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg hover:border-[#FF69B4] border-b-2 border-transparent transition-all duration-300">
      <div className="mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold text-[#1F2A44] mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
