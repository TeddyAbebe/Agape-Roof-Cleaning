import React from 'react';
import ServicesList from './ServicesList';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Professional roof cleaning and maintenance services with a personal touch
          </p>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            At Agape Roof Cleaning, we pride ourselves on delivering exceptional service with 
            a focus on customer satisfaction. Our team, led by Nahom, is known for attention 
            to detail, prompt response times, and fair pricing. We believe in building trust 
            through quality work and personal relationships with our customers.
          </p>
        </div>
        <ServicesList />
      </div>
    </section>
  );
};

export default Services;