import React from 'react'
import logo2 from '../../public/logo.png'

const AboveFooter = () => {
  return (
    <footer className="w-full md:w-[calc(100%-300px)] bg-white text-gray-700 text-sm px-4 md:px-6 py-8">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      
      {/* Text Content */}
      <div className="flex-1">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-left mb-3">
          About HouseBazaar
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-justify">
          Housebazaar, an esteemed initiative of HomeBazaar.com, operates as a dedicated platform exclusively designed
          to promote our esteemed partner brands. With a commitment to facilitating effective and transparent promotion,
          our platform empowers brands to efficiently reach their target audience. Through a comprehensive range of tools,
          including targeted advertising campaigns and data-driven analytics, Housebazaar equips brands with the essential
          resources needed to optimize their promotional endeavors and drive substantial growth.
        </p>
      </div>
  
      {/* Logo */}
      <div className="flex-shrink-0 mt-4 md:mt-0 md:block hidden">
        <img src={logo2} alt="HouseBazaar Logo" className="h-12 sm:h-14 w-auto" />
      </div>
    </div>
  </footer>
  
  )
}

export default AboveFooter