import { FaPlay } from "react-icons/fa";
import slider2 from '../../public/deskban3.jpg';



export default function VirtualTourRequest({ onBrochureClick }) {
  return (
    <div className="w-full md:w-[calc(100%-300px)] px-0 sm:px-6">
    {/* Heading */}
    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">
      Virtual Tour Request
    </h2>
  
    {/* Image Banner with Hover Effect */}
    <div className="relative w-full aspect-[16/9] sm:aspect-auto h-auto sm:h-[400px] rounded-xl overflow-hidden shadow-md group">
      {/* Background Image */}
      <img
        src={slider2}
        alt="Virtual Tour"
        className="w-full h-full object-cover transition duration-300 group-hover:brightness-75"
      />
  
      {/* Play Button and Text Overlay */}
      <div
        onClick={onBrochureClick}
        className="absolute inset-0 flex flex-col items-center justify-center text-white"
      >
        <div className="bg-white text-red-600 p-4 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white cursor-pointer">
          <FaPlay className="text-2xl" />
        </div>
        <h3 className="text-2xl font-bold mt-4 group-hover:scale-105">
          Virtual Site Visit
        </h3>
        <p className="text-lg mt-1 group-hover:scale-105">Godrej Horizon Wadala</p>
      </div>
    </div>
  </div>
  
  );
}
