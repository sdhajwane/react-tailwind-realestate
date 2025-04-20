import React from 'react';

const CardLarge = ({ onBrochureClick }) => {
  return (
    <div className="md:block hidden absolute top-20 left-6 z-[2] max-w-xs max-h-max mx-auto bg-white shadow-lg rounded-lg p-4">
  <div className="flex flex-col space-y-4">
    <div className="flex text-center border-b-2 border-black py-2">
      <p className="text-md text-center font-semibold text-gray-800">
        Booking Open: Limited Time Only
      </p>
    </div>

    <h2 className="text-xl font-bold text-gray-800">Godrej Horizon Wadala</h2>

    <div className="w-full mx-auto bg-white shadow-md rounded-lg px-10 py-3 bg-slate-50 space-y-2">
      <p className="text-md font-semibold text-gray-800 text-left">Land Parcel: 5 Acres</p>
      <p className="text-md font-semibold text-gray-800 text-left">Floors: 44 Storeys</p>
      <p className="text-md font-semibold text-gray-800 text-left">Possession: Dec 2026</p>
    </div>

    <div className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 rounded-lg">
      <div className="text-white rounded-lg justify-evenly font-semibold p-3 border border-white border-dashed border-[3px] space-y-2 text-sm">
        <p>- Get 1% Monthly Payment Plan Benefit</p>
        <p>- 30:30:30:10 Payment Plan Available</p>
        <p>- Exclusive Flexi Payment Plan</p>
      </div>
    </div>

    <div className="px-2 mt-2">
      <p className="text-lg text-gray-800 text-center">Luxurious <strong>2 & 3 BHK</strong> Starts at</p>
      <h2 className="text-2xl text-gray-800 text-center"><strong>₹ 2.91 Cr</strong> Onwards</h2>
    </div>

    <div className="flex justify-center">
      <button onClick={onBrochureClick} className="animate-seesaw w-4/5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-2 px-4 rounded-lg">
        Download Brochure
      </button>
    </div>
  </div>
</div>


  );
};

export default CardLarge;
