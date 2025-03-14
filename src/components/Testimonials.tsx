import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "D. H.",
      location: "Lake Forest Park, WA",
      date: "6 Sep",
      rating: 5,
      text: "Nahom has cleaned my roof and gutters the last two years. He is hardworking and does an excellent job. The roof and surrounding garden look excellent. And, if you have time for a chat, you'll find a thoughtful and caring man."
    },
    {
      name: "L. T.",
      location: "Lynnwood, WA",
      date: "19 Jul",
      rating: 5,
      text: "We used Agape to clean our roof and gutters of moss and found them to be hardworking, friendly, efficient, and cleaned up the mess afterward!"
    },
    {
      name: "M. R.",
      location: "Shoreline, WA",
      date: "23 Jun",
      rating: 5,
      text: "Outstanding service from start to finish! The team was professional, thorough, and left my roof looking brand new. Their attention to detail and commitment to quality work really shows. Highly recommend their services to anyone in need of roof cleaning."
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Real feedback from our valued customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 mb-6 min-h-[100px]">"{testimonial.text}"</p>
              <div className="mt-4 border-t pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                  <p className="text-sm text-gray-400">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;