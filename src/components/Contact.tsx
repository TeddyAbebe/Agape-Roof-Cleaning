import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "(619) 471-7077",
      link: "tel:619-471-7077"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "agaperoofcleaning@gmail.com",
      link: "mailto:agaperoofcleaning@gmail.com"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      content: "Mon-Sat: 8am - 6pm",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Service Area",
      content: "Lynnwood & Surrounding Areas",
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Get in touch for a free estimate
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center">
                <div className="rounded-full bg-blue-100 p-3 text-blue-800">
                  {item.icon}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {item.title}
              </h3>
              {item.link ? (
                <a href={item.link} className="mt-2 text-gray-600 hover:text-blue-800">
                  {item.content}
                </a>
              ) : (
                <p className="mt-2 text-gray-600">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;