import { AiOutlineClose } from "react-icons/ai"; // Close icon from react-icons
import { MdCall, MdLocationOn, MdAttachMoney } from "react-icons/md";
import Form from "./Form"; // Assuming Form component is the same for both popups
import logo2 from '../../public/logo2.png';

const BrochurePopup = ({ setShowPopup }) => {
  const handleClose = () => {
    setShowPopup(false); // Close the popup when the close button is clicked
  };

  return (
    <section id="brochure-popup">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
        <div className="relative bg-white p-0 rounded-2xl shadow-xl w-[90%] max-w-4xl animate-swipe-down md:w-[40%]">
          
          {/* Close Icon */}
          <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
            <AiOutlineClose size={24} />
          </button>

          {/* Two Columns */}
          <div className="flex flex-col md:flex-row">
            {/* Left Section - Hidden on small screens */}
            <div className="flex flex-col justify-center flex-shrink md:flex-4 bg-gray-100 p-6 rounded-l-md lg:block hidden">
              <span className="text-xl font-semibold text-black mb-4 block">We Promise</span>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <MdCall className="text-black text-xl" />
                  <span>Instant Call Back</span>
                </li>
                <li className="flex items-center gap-3">
                  <MdLocationOn className="text-black text-xl" />
                  <span>Free Site Visit</span>
                </li>
                <li className="flex items-center gap-3">
                  <MdAttachMoney className="text-black text-xl" />
                  <span>Unmatched Price</span>
                </li>
              </ul>
            </div>

            {/* Right Section */}
            <div className="flex-1 border p-2 rounded-r-md bg-white">
              {/* Centered Image */}
              <div className="flex justify-center mb-2">
                <img src={logo2} alt="Logo 2" className="h-10 w-auto" />
              </div>

              <p className="text-center">
                Register and avail the <strong className="text-pink-600">best Offers!!!</strong>
              </p>

              {/* Form Component */}
              <Form />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-0 rounded-b-md py-4 text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <p className="text-lg font-medium text-white">Phone: +91 2248970339</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochurePopup;
