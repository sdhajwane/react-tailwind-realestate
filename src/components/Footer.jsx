import React from 'react'

const Footer = () => {
  
        return (
          <footer className="w-full  absolute left-0 md:w-[calc(100%-300px)] bg-gray-100 text-gray-700 text-sm px-4 md:px-6 py-8">
  {/* Disclaimer */}
  <p className="mb-4 leading-relaxed">
    <strong>Disclaimer:</strong> We are an authorised marketing partner for this project. Provided content is given by respective owners and this website and content is for information purposes only and does not constitute any offer to avail of any services. Prices mentioned are subject to change without prior notice and properties mentioned are subject to availability. You can expect a call, SMS, or emails on details registered with us.
  </p>

  {/* Contact */}
  <p className="mb-4">
    <strong>Contact Us at -</strong> #2304, Cyber One, Sector 30(A), Vashi, Navi Mumbai - 400703
  </p>

  {/* Bottom Bar */}
  <div className="flex flex-col md:flex-row justify-between items-center md:items-center border-t border-gray-300 pt-4">
    <p className="mb-2 md:mb-0">&copy; Copyright</p>
    <div className="flex flex-wrap gap-4">
      <a href="#" className="hover:underline">Terms & Conditions</a>
      <a href="#" className="hover:underline">Privacy Policy</a>
      <a href="#" className="hover:underline">Cookies Policy</a>
      <a href="#" className="hover:underline">Developed by Sawood Hajwane</a>
      
    </div>
  </div>
</footer>

        );
      };

export default Footer