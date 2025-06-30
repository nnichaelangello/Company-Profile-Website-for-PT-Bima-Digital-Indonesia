'use client';

import Link from 'next/link';

const ProjectSection = () => {
  return (
    <section className="project-section py-20 bg-[linear-gradient(135deg,#1E3A8A,#2B528F)] text-white text-center">
      <div className="container mx-auto max-w-[1280px] px-5">
        <div className="project-content max-w-[800px] mx-auto">
          <h2 className="text-[40px] font-bold mb-5 leading-[1.2]">
            Let’s Bring Your Vision to Life
          </h2>
          <p className="text-[16px] font-light mb-[30px] text-[#E5E7EB] leading-[1.6]">
            Share your project ideas with us, and we’ll turn them into reality with our expertise.
          </p>
          <Link
            href="/contact"
            className="project-btn bg-[#D4AF37] text-white px-[30px] py-[15px] rounded-[25px] text-[16px] font-medium hover:bg-white hover:text-[#1E3A8A] hover:shadow-[0_5px_15px_rgba(255,255,255,0.3)] hover:-translate-y-[3px] transition-all duration-300 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;