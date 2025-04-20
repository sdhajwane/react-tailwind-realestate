import React from 'react'

export default function GallerySection({ onBrochureClick }) {
    return (
      <section id="gallery">
  <div className="w-full md:w-[calc(100%-300px)] p-6">
    {/* Heading & Button */}
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 md:gap-0">
      <h2 className="text-3xl font-bold text-gray-800 text-left w-full md:w-auto">
        Gallery of Godrej Horizon Wadala
      </h2>
      <button
        onClick={onBrochureClick}
        className="bg-custom-gradient text-white px-4 py-2 rounded hover:bg-orange-700 text-sm animate-seesaw font-medium"
      >
        Download Gallery
      </button>
    </div>

    {/* Image Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <img
        src="/gym.jpg"
        alt="Gallery 1"
        className="w-full h-48 object-cover rounded-xl"
      />
      <img
        src="/swimming.jpg"
        alt="Gallery 2"
        className="w-full h-48 object-cover rounded-xl"
      />
      <img
        src="/libraryg.jpg"
        alt="Gallery 3"
        className="w-full h-48 object-cover rounded-xl"
      />
      <img
        src="/banquet.jpg"
        alt="Gallery 4"
        className="w-full h-48 object-cover rounded-xl"
      />
    </div>
  </div>
</section>

    
    );
  }
  