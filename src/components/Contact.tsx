import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "(619) 471-7077",
      link: "tel:619-471-7077",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "agaperoofcleaning@gmail.com",
      link: "mailto:agaperoofcleaning@gmail.com",
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
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2A44] tracking-tight">
            Contact Us
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 leading-relaxed">
            Get in touch for a free estimate
          </p>
          <div className="mt-6 h-1 w-20 bg-[#FF69B4] rounded-full mx-auto"></div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center">
                <div className="rounded-full bg-[#FF69B4]/10 p-3 text-[#FF69B4]">
                  {item.icon}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1F2A44]">
                {item.title}
              </h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="mt-2 text-gray-600 hover:text-[#FF69B4] transition-colors duration-200"
                >
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
