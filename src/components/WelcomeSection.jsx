import { useState } from 'react';
const WelcomeSection = ({ onBrochureClick }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="relative"> {/* 👈 Prevent overlap */}
      {/* Large Screens */}
      <div className="w-[calc(100%-300px)] left-0 right-[300px] px-6 py-10 text-left mt-[600px] md:mt-[600px] hidden lg:block">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Godrej Horizon Wadala
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-2">
          A residential address at the premium locale of Wadala, Signature Tower at Godrej Horizon offers a world of grandeur in the heart of Mumbai...
        </p>

        {showMore && (
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            These luxuries become only more enhanced by the beautiful locale of the property!...
          </p>
        )}

        <button
          className="text-black underline text-lg"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Read Less" : "Read More"}
        </button>

        <div className="flex justify-left mt-6">
          <button
            onClick={onBrochureClick}
            className="w-1/3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-3 px-6 rounded-lg text-lg"
          >
            Download Brochure
          </button>
        </div>
      </div>

      {/* Small & Medium Devices */}
      <div className="w-full relative left-0 right-0 px-4 py-10 text-left mt-[700px] md:w-[calc(100%-300px)] block lg:hidden">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to Godrej Horizon Wadala
        </h2>

        <p className="text-base text-gray-700 leading-relaxed mb-2">
          A residential address at the premium locale of Wadala, Signature Tower at Godrej Horizon offers a world of grandeur in the heart of Mumbai...
        </p>

        {showMore && (
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            These luxuries become only more enhanced by the beautiful locale of the property!...
          </p>
        )}

        <button
          className="text-black underline text-base"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Read Less" : "Read More"}
        </button>

        <div className="flex justify-left mt-6">
          <button
            onClick={onBrochureClick}
            className="w-3/4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-3 px-6 rounded-lg text-base"
          >
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
};


export default WelcomeSection;
