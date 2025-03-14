import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative">
            <img
              src="https://i.ibb.co/Nn3Pj7fm/Whats-App-Image-2025-03-05-at-21-36-16-2.jpg"
              alt="AGAPE Roof Cleaning Service"
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
            />
          </div>
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              About AGAPE Roof Cleaning
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                AGAPE Roof Cleaning in Lynnwood, WA has built a strong
                reputation for delivering professional, efficient, and friendly
                service. Our team, led by Nahom, takes pride in providing prompt
                responses, thorough work, and fair pricing to all our customers.
              </p>
              <p>
                We believe in the power of personal connection, which is why we
                maintain time-tested business practices like door-to-door
                marketing and handshake agreements. Our comprehensive services
                include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Professional roof cleaning</li>
                <li>Moss killer application</li>
                <li>Gutter cleaning</li>
                <li>Minor roof repairs</li>
              </ul>
              <p>
                Our commitment to environmental responsibility is reflected in
                our use of eco-friendly cleaning solutions. We take pride in our
                attention to detail, customer service orientation, and
                reasonable pricing, making us the preferred choice for roof and
                gutter cleaning needs in the Lynnwood area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
