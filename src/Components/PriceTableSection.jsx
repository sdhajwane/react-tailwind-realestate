import React from 'react';
import price from '../../public/costing.jpg';
const PriceTableSection = ({ onBrochureClick }) => {
  const tableData = [
    ['1 BHK', '450 sq.ft.', '$100,000'],
    ['2 BHK', '650 sq.ft.', '$150,000'],
    ['3 BHK', '900 sq.ft.', '$200,000'],
    ['1 RK', '300 sq.ft.', '$80,000'],
  ];

  return (
    <section id="price" className="scroll-mt-20">
    <div className="flex flex-col md:flex-row w-full md:w-[calc(100%-300px)] p-4 md:p-6 gap-6 items-start">
  
      {/* Left Section (Table) */}
      <div className="flex-1 w-full">
        <h2 className="text-xl font-semibold mb-4 text-left">Price</h2>
  
        {/* Desktop & Medium Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full max-w-[800px] text-left border-collapse mx-auto">
            <thead>
              <tr>
                <th className="border border-gray-300 px-3 py-3 font-bold text-lg">Type</th>
                <th className="border border-gray-300 px-3 py-3 font-bold text-lg">Carpet Area</th>
                <th className="border border-gray-300 px-3 py-3 font-bold text-lg">Price</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 !== 0 ? 'bg-gray-200' : ''}>
                  <td className="border border-gray-300 px-3 py-2">{row[0]}</td>
                  <td className="border border-gray-300 px-3 py-2">{row[1]}</td>
                  <td className="border border-gray-300 px-3 py-2">
                    <div className="flex justify-between items-center">
                      <span>{row[2]}</span>
                      <button
                        onClick={onBrochureClick}
                        className="ml-1 px-4 py-1 text-sm font-normal bg-orange-600 text-white rounded hover:bg-red-500"
                      >
                        Price Breakup
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Mobile Table */}
        <div className="md:hidden w-full space-y-2">
          {tableData.map((row, index) => (
            <div
              key={index}
              className={`w-full border border-gray-300 rounded ${index % 2 !== 0 ? 'bg-gray-100' : 'bg-white'}`}
            >
              <div className="p-3 border-b border-gray-300">
                <span className="font-medium text-gray-700">Type:</span> {row[0]}
              </div>
              <div className="p-3 border-b border-gray-300">
                <span className="font-medium text-gray-700">Carpet Area:</span> {row[1]}
              </div>
              <div className="p-3 flex justify-between items-center">
                <span>
                  <span className="font-medium text-gray-700">Price:</span> {row[2]}
                </span>
                <button
                  onClick={onBrochureClick}
                  className="ml-2 px-3 py-1 text-sm bg-orange-600 text-white rounded hover:bg-red-500"
                >
                  Price Breakup
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* Right Image Section - for medium and up (hidden on small only) */}
      <div className="w-full md:w-[300px] hidden md:flex justify-center items-start">
        <div className="group border rounded-xl shadow-md overflow-hidden relative w-full">
          <img
            src={price}
            alt="Project"
            className="w-full object-cover transition-all duration-300 group-hover:opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-black text-white py-2 px-6 text-sm hover:bg-black">
              Enquire Now
            </button>
          </div>
          <button
            onClick={onBrochureClick}
            className="w-full bg-orange-600 text-white py-2 text-sm hover:bg-blue-700"
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  
    {/* Small screen image (hidden on md and above) */}
    <div className="md:hidden w-full mt-6 flex justify-center items-start">
      <div className="group border rounded-xl shadow-md overflow-hidden relative w-full">
        <img
          src={price}
          alt="Project"
          className="w-full object-cover transition-all duration-300 group-hover:opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-black text-white py-2 px-6 text-sm hover:bg-black">
            Enquire Now
          </button>
        </div>
        <button
          onClick={onBrochureClick}
          className="w-full bg-orange-600 text-white py-2 text-sm hover:bg-blue-700"
        >
          Know More
        </button>
      </div>
    </div>
  </section>
  
  );
};


export default PriceTableSection;
