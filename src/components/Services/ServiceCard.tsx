import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;