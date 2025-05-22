import React from 'react'
import vectorone from '../assets/Vector1.png'
import vectortwo from '../assets/Vector2.png'
import vectorthree from '../assets/icon-park-outline_building-one.png'

const SectionOne = () => {
  return (
    <div className="px-[4%] py-[4%]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {/* Card 1 */}
        <div className="bg-[#374151] w-full max-w-[370px] h-[260px] flex flex-col justify-center  shadow-md">
          <div className="px-[10%] py-[9%] flex flex-col h-full">
            <img className="w-[30%] p-4" src={vectorone} alt="Cutting-Edge Architecture" />
            <h5 className="px-2 pb-3 text-white text-lg font-semibold">Cutting-Edge Architecture</h5>
            <p className="pl-2 text-white text-[14px] leading-5">
              We pioneer innovative designs that redefine the future of urban landscapes.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-[#374151] w-full max-w-[370px] h-[260px] flex flex-col justify-center  shadow-md">
          <div className="px-[10%] py-[9%] flex flex-col h-full">
            <img className="w-[30%] p-4" src={vectortwo} alt="Home Architectural Design" />
            <h5 className="px-2 pb-3 text-white text-lg font-semibold ">Home Architectural Design</h5>
            <p className="pl-2 text-white text-[14px] leading-5 ">
              Crafting personalized living spaces that blend style, comfort, and functionality
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-[#374151] w-full max-w-[370px] h-[260px] flex flex-col justify-center shadow-md">
          <div className="px-[10%] py-[9%] flex flex-col h-full">
            <img className="w-[30%] p-4" src={vectorthree} alt="Business Building Architecture" />
            <h5 className="px-2 pb-3 text-white text-lg font-semibold ">Business Building Architecture</h5>
            <p className="pl-2 text-white text-[14px] leading-5 ">
              Creating dynamic commercial spaces that inspire productivity and growth
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionOne