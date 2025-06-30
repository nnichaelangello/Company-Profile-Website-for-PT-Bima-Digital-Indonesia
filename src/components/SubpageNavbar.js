import { useState } from 'react';
import Link from 'next/link';

export default function SubpageNavbar() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive((prev) => !prev);
  };

  return (
    <header className="bg-white py-5 shadow-[0_2px_15px_rgba(0,0,0,0.05)] sticky top-0 z-[1000]">
      <div className="container mx-auto max-w-[1280px] px-5 flex items-center justify-between">
        <div className="logo text-[#1E3A8A] text-[28px] font-bold uppercase tracking-[1px]">
          TechVers
        </div>
        <nav className={isNavActive ? 'active' : ''}>
          <ul className="flex gap-[30px]">
            <li>
              <Link
                href="/"
                className="text-[#2D3748] text-[15px] font-medium hover:text-[#D4AF37] hover:-translate-y-[2px] active:text-[#D4AF37] transition-all duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-[#2D3748] text-[15px] font-medium hover:text-[#D4AF37] hover:-translate-y-[2px] active:text-[#D4AF37] transition-all duration-300 ease-in-out"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-[#2D3748] text-[15px] font-medium hover:text-[#D4AF37] hover:-translate-y-[2px] active:text-[#D4AF37] transition-all duration-300 ease-in-out"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[#2D3748] text-[15px] font-medium hover:text-[#D4AF37] hover:-translate-y-[2px] active:text-[#D4AF37] transition-all duration-300 ease-in-out"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[#2D3748] text-[15px] font-medium hover:text-[#D4AF37] hover:-translate-y-[2px] active:text-[#D4AF37] transition-all duration-300 ease-in-out"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="auth flex items-center">
          <Link
            href="#"
            className="chat-btn bg-[#1E3A8A] text-white px-5 py-2.5 rounded-[25px] text-[15px] font-medium hover:bg-[#D4AF37] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)] hover:-translate-y-[2px] transition-all duration-300 ease-in-out"
          >
            ID | EN
          </Link>
        </div>
        <button
          className="hamburger md:hidden text-[#1E3A8A] text-2xl"
          onClick={toggleNav}
          aria-label="Toggle navigation"
          aria-expanded={isNavActive}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
}