import React from 'react'
export default function About() {
return (
  <section id='about' className="scroll-mt-20">
  <div className="w-full md:w-[calc(100%-300px)] bg-white text-gray-700 text-sm px-4 md:px-6 py-8">
    
    {/* Logo Centered */}
    <div className="flex justify-center mb-6">
      <img
        src="/logo2.png"
        alt="Godrej Properties Logo"
        className="h-14 sm:h-16 w-auto"
      />
    </div>

    {/* Left-Aligned Heading */}
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-left">
      About Godrej Properties
    </h2>

    {/* Justified Description */}
    <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-justify mb-6">
      Godrej Properties brings the Godrej Group philosophy of innovation, sustainability, and excellence
      to the real estate industry. Each Godrej Properties development combines a 125-year legacy of
      excellence and trust with a commitment to cutting-edge design and technology. The company is known
      for delivering thoughtfully planned projects that offer a luxurious lifestyle, modern architecture,
      and a strong focus on green and sustainable development. With a presence in multiple cities across
      India, Godrej Properties continues to redefine the way people experience spaces.
    </p>

    {/* RERA Info */}
    <h3 className="text-md font-semibold text-gray-800 text-left mb-4">RERA Information</h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="flex flex-col items-center">
        <img
          src="/qr1.jpg"
          alt="QR Code 1"
          className="h-28 w-28 object-contain mb-2"
        />
        <p className="text-sm font-semibold text-gray-700 text-center">
          Godrej Horizon MahaRERA - P51900034851
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="/qr2.jpg"
          alt="QR Code 2"
          className="h-28 w-28 object-contain mb-2"
        />
        <p className="text-sm font-semibold text-gray-700 text-center">
          Godrej Horizon MahaRERA - P51900049757
        </p>
      </div>
    </div>

    {/* Footer Disclaimer */}
    <p className="text-[10px] text-gray-500 text-left mt-6">
      Godrej has been registered via MahaRERA registration number and is available on the RERA website under registered projects.
    </p>
  </div>
</section>



      );
    }