import React, { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='px-[4%]'>
    <nav className="flex items-center justify-between px-8 py-4 bg-white relative">
      <div className="text-2xl font-bold text-[#7B4A1D]">Petroprojects</div>
      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block h-1 w-8 bg-[#7B4A1D] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block h-1 w-8 bg-[#7B4A1D] rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block h-1 w-8 bg-[#7B4A1D] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-12">
        <li>
          <a href="#" className="text-[#7B4A1D] font-semibold hover:text-[#A86B2C]">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500 font-semibold hover:text-[#7B4A1D]">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500 font-semibold hover:text-[#7B4A1D]">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500 font-semibold hover:text-[#7B4A1D]">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500 font-semibold hover:text-[#7B4A1D]">
            Blog
          </a>
        </li>
      </ul>
      <a
        href="#"
        className="hidden md:inline-block bg-[#7B4A1D]  text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#A86B2C] transition"
      >
        Contact Us
      </a>
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 z-20 ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li>
            <a
              href="#"
              className="text-[#7B4A1D] font-semibold hover:text-[#A86B2C] block"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 font-semibold hover:text-[#7B4A1D] block"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 font-semibold hover:text-[#7B4A1D] block"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 font-semibold hover:text-[#7B4A1D] block"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 font-semibold hover:text-[#7B4A1D] block"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-[#7B4A1D] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#A86B2C] transition block"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar