import { AiOutlineClose } from "react-icons/ai"; // Close icon from react-icons
import { MdCall, MdLocationOn, MdAttachMoney } from "react-icons/md";
import logo2 from '../../public/logo2.png';


const Popup = ({ onClose }) => {
  return (
    <section id="popup">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-white p-0 rounded-2xl shadow-xl w-[40%] max-w-4xl animate-swipe-down">
          
          {/* Close Icon */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black"
          >
            <AiOutlineClose size={24} />
          </button>

          {/* Two Columns */}
          <div className="flex flex-col md:flex-row ">
            {/* Left Section */}
            <div className="flex flex-col justify-center flex-shrink md:flex-4 bg-gray-100 p-6 rounded-l-md">
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
            <p className="text-lg font-medium text-white">Phone: +91 12345 67890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popup;
