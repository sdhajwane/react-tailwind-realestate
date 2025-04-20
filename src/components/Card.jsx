import React from 'react';

const Card = ({ onBrochureClick }) => {
  return (
    // Show only on small/medium screens
    <div className="block md:hidden items-center  absolute w-fit max-w-xs mx-auto  bg-white shadow-lg z-[2] rounded-lg p-4  mt-[220px]">
  <div className="flex flex-col space-y-2">
    <div className="flex justify-between items-center border-b-2 border-black py-2">
      <p className="text-lg font-semibold text-gray-800 text-center">
        Booking Open: Limited Time Only
      </p>
    </div>

    <h2 className="text-2xl font-bold text-gray-800">Godrej Horizon Wadala</h2>

    <div className="w-full bg-white shadow-md rounded-lg px-4 py-2 bg-slate-50 space-y-2">
      <p className="text-base font-semibold text-gray-800">Land Parcel: 5 Acres</p>
      <p className="text-base font-semibold text-gray-800">Floors: 44 Storeys</p>
      <p className="text-base font-semibold text-gray-800">Possession: Dec 2026</p>
    </div>

    <div className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 rounded-lg">
      <div className="text-white rounded-lg justify-evenly font-semibold p-2 border border-white border-dashed border-[3px] space-y-2 text-sm">
        <p>- Get 1% Monthly Payment Plan Benefit</p>
        <p>- 30:30:30:10 Payment Plan Available</p>
        <p>- Exclusive Flexi Payment Plan</p>
      </div>
    </div>

    <div className="px-2 mt-2">
      <p className="text-base text-gray-800 text-center">
        Luxurious <strong>2 & 3 BHK</strong> Starts at
      </p>
      <h2 className="text-xl text-gray-800 text-center">
        <strong>₹ 2.91 Cr</strong> Onwards
      </h2>
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

export default Card;
