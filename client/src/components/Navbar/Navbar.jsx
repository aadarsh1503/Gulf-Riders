import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="shadow-sm bg-white">
    <header className=" max-w-5xl mx-auto ">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div>
          <img
            src="https://gulfriders.net/wp-content/uploads/2024/03/cropped-cropped-modern-letter-c-colorful-logo-with-watter-drop-good-for-technology-logo-company-logo-dummy-logo-bussiness-logo-free-vector-150x150.jpg"
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-orange-500 transition">
            Home
          </a>
          <a href="#" className="hover:text-orange-500 transition">
            About Us
          </a>
          <a href="#" className="hover:text-orange-500 transition">
            Services
          </a>
          <a href="#" className="hover:text-orange-500 transition">
            Team
          </a>
          <a href="#" className="hover:text-orange-500 transition">
            Contact Us
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-orange-500">
          <a href="#" className="hover:text-orange-600 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-orange-600 transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-orange-600 transition">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Navbar;
