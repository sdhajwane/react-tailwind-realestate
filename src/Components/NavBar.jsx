import logo1 from '../../public/logo1.png'
import logo2 from '../../public/logo2.png';

import { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaRupeeSign } from 'react-icons/fa';
import { TbDimensions } from 'react-icons/tb';
import { MdOutlineRoomPreferences } from 'react-icons/md';
import { BsImages } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { HiOutlineDocumentDownload, HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdMenu } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import FirstVisitPopup from './FirstVisitPopup ';
import BrochurePopup from './BrochurePopup';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFirstVisitPopupOpen, setIsFirstVisitPopupOpen] = useState(false); // State for first visit popup
  const [isBrochurePopupOpen, setIsBrochurePopupOpen] = useState(false); // State for brochure popup

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle Brochure Button click (to show popup instantly)
  const handleBrochureClick = (e) => {
    e.preventDefault();
    setIsBrochurePopupOpen(true); // Show the brochure popup immediately when clicked
  };

  return (
    <div className="fixed top-0 left-0 z-[999] bg-white shadow-md h-16 flex items-center justify-between w-full md:w-[calc(100%-300px)] px-4">
  
 {/* LEFT: First Logo (Always Visible) */}
 <div className="flex items-center space-x-2">
    <a href="https://www.housebazaar.com/">
      <img src={logo1} alt="Logo 1" className="h-10 w-auto hover:scale-110" />
    </a>

    {/* Show second logo beside first on large screens */}
    <a href="#about" className="hidden lg:inline">
      <img src={logo2} alt="Logo 2" className="h-10 w-auto hover:scale-110" />
    </a>
  </div>

  {/* CENTER: Second Logo (Only on small/medium screens) */}
  <div className="absolute left-1/2 transform -translate-x-1/2 lg:hidden">
    <a href="#about">
      <img src={logo2} alt="Logo 2" className="h-10 w-auto hover:scale-110" />
    </a>
  </div>

  {/* RIGHT: Hamburger Menu (Only on < lg) */}
  <button className="lg:hidden text-xl" onClick={toggleMenu}>
    <MdMenu />
  </button>

    {/* Dropdown Menu (Visible when menu is toggled) */}
    <div className={`lg:hidden absolute top-16 left-0 w-full bg-white shadow-md ${isMenuOpen ? 'block' : 'hidden'}`}>
      <NavItem icon={<AiFillHome size={18} />} label="Home" href="#" />
      <NavItem icon={<FaRupeeSign size={16} />} label="Price" href="#price" />
      <NavItem icon={<TbDimensions size={18} />} label="Site & Floor Plan" href="#splan" />
      <NavItem icon={<MdOutlineRoomPreferences size={18} />} label="Amenities" href="#amenities" />
      <NavItem icon={<BsImages size={18} />} label="Gallery" href="#gallery" />
      <NavItem icon={<GoLocation size={18} />} label="Location" href="#location" />
      <NavItem icon={<HiOutlineDocumentDownload size={18} />} label="Download Brochure" href="#brochure" onClick={handleBrochureClick} />
    </div>
  
    {/* Full Nav Links (Visible on lg and up) */}
    <div className="hidden lg:flex justify-between flex-1 text-sm text-gray-700 font-medium ml-6">
      <NavItem icon={<AiFillHome size={18} />} label="Home" href="#" />
      <NavItem icon={<FaRupeeSign size={16} />} label="Price" href="#price" />
      <NavItem icon={<TbDimensions size={18} />} label="Site & Floor Plan" href="#splan" />
      <NavItem icon={<MdOutlineRoomPreferences size={18} />} label="Amenities" href="#amenities" />
      <NavItem icon={<BsImages size={18} />} label="Gallery" href="#gallery" />
      <NavItem icon={<GoLocation size={18} />} label="Location" href="#location" />
      <NavItem icon={<FaArrowDown size={16} className="animate-swipeDown" />} label="Download Brochure" href="#popup" onClick={handleBrochureClick} />
    </div>
  
    {/* Popups */}
    {isFirstVisitPopupOpen && <FirstVisitPopup setShowPopup={setIsFirstVisitPopupOpen} />}
    {isBrochurePopupOpen && <BrochurePopup setShowPopup={setIsBrochurePopupOpen} />}
  </div>
  
  );
}

function NavItem({ icon, label, href, onClick }) {
  return (
    <a href={href} onClick={onClick} className="flex items-center gap-1 px-3 py-2 hover:text-black hover:font-semibold transition">
      {icon}
      <span>{label}</span>
    </a>
  );
}