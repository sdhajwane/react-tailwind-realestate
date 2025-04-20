import React from 'react';
import master from '../../public/masterplan2.jpg';
import floor1 from '../../public/2bhk_734.jpg';
import floor2 from '../../public/3bhk_1053.jpg';
import floor3 from '../../public/3bhk_1240.jpg';

const Plans = ({ onBrochureClick }) => {
  return (
    <section id="splan" className="scroll-mt-20">
  <div className="w-full md:w-[calc(100%-300px)] p-6 flex flex-col items-center">
    {/* Heading */}
    <h2 className="w-full text-3xl font-bold text-gray-800 mb-6 text-left">
      Site & Floor Plan of Godrej Horizon Wadala
    </h2>

    {/* Master Plan */}
    <h2 className="w-full text-xl font-semibold mb-6 text-left">Master Plan</h2>
    <div className="w-full md:w-[calc(33.33%-4px)] mb-4">
      <div className="group relative border rounded-xl shadow-md overflow-hidden">
        <img
          src={master}
          alt="Project Top"
          className="w-full object-cover transition-all duration-300 group-hover:opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={onBrochureClick} className="bg-orange-600 text-white py-2 px-6 text-sm group-hover:bg-orange-700">
            Enquire Now
          </button>
        </div>
        <button onClick={onBrochureClick} className="w-full bg-orange-600 text-white py-2 text-sm group-hover:bg-orange-700">
          Know More
        </button>
      </div>
    </div>

    {/* Floor Plans */}
    <h2 className="w-full text-xl font-semibold mb-6 text-left">Floor Plan</h2>
    <div className="flex flex-col md:flex-row gap-4 w-full items-center md:items-start">
      {[floor1, floor2, floor3].map((img, index) => (
        <div key={index} className="w-full md:w-[calc(33.33%-4px)] mb-4 md:mb-0">
          <div className="group relative border rounded-xl shadow-md overflow-hidden">
            <img
              src={img}
              alt={`Project ${index + 1}`}
              className="w-full object-cover transition-all duration-300 group-hover:opacity-70"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button onClick={onBrochureClick} className="bg-orange-600 text-white py-2 px-6 text-sm hover:bg-orange-700">
                Enquire Now
              </button>
            </div>
            <button onClick={onBrochureClick} className="w-full bg-orange-600 text-white py-2 text-sm hover:bg-orange-700">
              Know More
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}

export default Plans