// Sidebar.js
import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import Form from './Form'; // Import the FormComponent

const Sidebar = ({ onBrochureClick }) => {
  return (
    <div className="hidden md:block fixed top-0 right-0 z-50 w-[300px] h-screen bg-white rounded-bl-xl shadow-lg">
  
  {/* Top Links */}
  <div className="flex justify-center bg-black h-20 items-center gap-4 px-4 text-white rounded-b-xl">
    <a onClick={ onBrochureClick } href="#pre-register" className="font-semibold hover:underline">
      Pre-register
    </a>

    <div className="h-6 w-px bg-white" />

    <a href="tel:+1234567890" className="flex items-center gap-1 font-semibold hover:underline">
      <BiSolidPhoneCall size={16} />
      +91  2248970339
    </a>
  </div>

  {/* CallBack Button */}
  <div className="flex justify-center mt-4 px-4">
    <button onClick={ onBrochureClick } className="flex items-center gap-2 text-white font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-primary via-pink-500 to-purple-500 shadow">
      <BiSolidPhoneCall size={16} />
      Get Instant CallBack
    </button>
  </div>

  {/* Form Section */}
  <div className="p-4 overflow-y-auto h-[calc(100%-160px)]"> {/* Adjust height for top sections */}
    <Form />
  </div>
</div>

  );
};

export default Sidebar;
