import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Agape Roof Cleaning</h3>
            <p className="text-gray-400">
              Professional roof cleaning services in Lynnwood and surrounding areas.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">Services</a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-gray-400 hover:text-white">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: (619) 471-7077</li>
              <li>Hours: Mon-Sat: 8am - 6pm</li>
              <li>Area: Lynnwood, WA & Surrounding Areas</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Agape Roof Cleaning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;