import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-900'>
    <footer className=" max-w-5xl mx-auto text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Us Section */}
        <div>
          <img
            src="https://gulfriders.net/wp-content/uploads/2024/03/cropped-cropped-modern-letter-c-colorful-logo-with-watter-drop-good-for-technology-logo-company-logo-dummy-logo-bussiness-logo-free-vector-150x150.jpg"
            alt="Logo"
            className="mx-auto md:mx-0 w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-semibold text-orange-500 mb-2">[ <span className='text-white'>ABOUT US</span> ]</h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Pages Section */}
        <div className='lg:ml-10 ml-0'>
          <h3 className="text-lg font-semibold  text-orange-500 mb-2">[ <span className='text-white'>PAGES</span>   ]</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                &rsaquo; Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                &rsaquo; About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                &rsaquo; Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                &rsaquo; Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                &rsaquo; Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-2">[ <span className='text-white'>SUPPORT</span> ]</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                &rsaquo; Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                &rsaquo; Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                &rsaquo; Refund Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center">
        <div className="flex ml-0 lg:ml-[700px] mt-3 space-x-4 mb-4">
          <a
            href="#"
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
          >
            <FaFacebookF className="text-white" />
          </a>
          <a
            href="#"
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
          >
            <FaTwitter className="text-white" />
          </a>
          <a
            href="#"
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
          >
            <FaInstagram className="text-white" />
          </a>
        </div>
        <p className="text-sm mt-0 lg:-mt-10 text-left">
          &copy; Copyright Gulf Riders. All rights reserved
        </p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
