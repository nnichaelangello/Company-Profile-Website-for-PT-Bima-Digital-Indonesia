'use client';

import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="hero-section h-[90vh] bg-[linear-gradient(rgba(30,58,138,0.7),rgba(30,58,138,0.7)),url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center flex items-center justify-center text-center text-white">
      <div className="container mx-auto max-w-[1280px] px-5">
        <div className="hero-content">
          <h1 className="text-[60px] font-bold mb-5 leading-[1.2] animate-fadeIn">
            Transforming Your Digital Presence
          </h1>
          <p className="text-[20px] font-light mb-[30px] mx-[4rem] animate-fadeIn animate-delay-500">
            We craft stunning and functional websites to elevate your online presence. Partner with us to make a lasting impact in the digital world.
          </p>
          <Link
            href="#services"
            className="hero-btn bg-[#D4AF37] text-white px-[35px] py-[15px] rounded-[30px] text-base font-medium hover:bg-white hover:text-[#1E3A8A] hover:shadow-[0_5px_20px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 ease-in-out"
          >
            View Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;