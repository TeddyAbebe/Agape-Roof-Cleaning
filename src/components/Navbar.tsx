import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/zTFYc7JB/Logo.jpg"
              alt="Agape Roof Cleaning Logo"
              className="h-8 w-8 mr-2 rounded-full"
            />
            <span className="text-2xl font-bold text-blue-800">
              Agape Roof Cleaning
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-800">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-800">
              Services
            </a>
            <a
              href="#why-choose-us"
              className="text-gray-700 hover:text-blue-800"
            >
              Why Choose Us
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-800">
              Gallery
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-800">
              Contact
            </a>
            <a
              href="tel:619-471-7077"
              className="flex items-center bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              <Phone className="w-4 h-4 mr-2" />
              (619) 471-7077
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-blue-800"
            >
              About
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:text-blue-800"
            >
              Services
            </a>
            <a
              href="#why-choose-us"
              className="block px-3 py-2 text-gray-700 hover:text-blue-800"
            >
              Why Choose Us
            </a>
            <a
              href="#gallery"
              className="block px-3 py-2 text-gray-700 hover:text-blue-800"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-blue-800"
            >
              Contact
            </a>
            <a
              href="tel:619-471-7077"
              className="block px-3 py-2 text-blue-800 font-bold"
            >
              Call (619) 471-7077
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
