import React from 'react'
import bannerImg from '../assets/banner-house.png' // Update path if needed

const Banner = () => {
  return (
    <div className='px-[4%] py-[4%]'>
    <section
      className="relative w-[100%] min-h-[90vh] flex items-stretch  overflow-hidden"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '200px',
      }}
    >
      {/* Overlay for mobile */}
      <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/70 to-transparent md:hidden z-0"></div>
      {/* Overlay for desktop */}
      <div className="hidden md:block absolute inset-0  to-transparent z-0"></div>
      {/* Left Content */}
      <div className="relative z-10 flex flex-col justify-center px-6 py-12 md:py-0 md:px-16 w-full md:w-[45%]">
        <h1 className="text-[16px] md:text-4xl lg:text-4xl font-bold text-[#656B74] mb-4">
          Petroprojects
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7B4A1D] mb-2 leading-tight">
          Architecture Design
        </h2>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7B4A1D] mb-2 leading-tight">
          And Construction Firm
        </h2>
        <button className="mt-8 w-fit px-10 py-3 border-2 border-[#7B4A1D] text-[#7B4A1D] font-semibold rounded-xl hover:bg-[#7B4A1D] hover:text-white transition">
          Hire Us
        </button>
      </div>
      {/* Projects Built Box */}
      <div className="absolute bottom-[-25px] right-0 mb-6 mr- bg-[#7B4A1D]  px-8 py-6 flex flex-col items-center shadow-lg z-10">
        <span className="text-white text-3xl md:text-4xl font-bold leading-none">102</span>
        <span className="text-white text-lg md:text-xl font-semibold leading-none mt-2 text-center">
          Projects Built
        </span>
      </div>
    </section>
    </div>
  )
}

export default Banner