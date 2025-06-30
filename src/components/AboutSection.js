'use client';

import Link from 'next/link';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="about-section py-20 bg-[#F9FAFB]" id="about">
      <div className="container mx-auto max-w-[1280px] px-5">
        <div className="section-header text-center mb-[50px]">
          <h5 className="text-[#D4AF37] text-[16px] font-medium uppercase tracking-[2px] mb-[10px]">
            About Us
          </h5>
          <h2 className="text-[#1E3A8A] text-[40px] font-bold mb-[15px] leading-[1.2]">
            Who We Are
          </h2>
          <p className="text-[#64748B] text-[16px] max-w-[600px] mx-auto leading-[1.6]">
            Discover the story behind TechVers and our passionate team dedicated to your success.
          </p>
        </div>
        <div className="about-content grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="about-text text-left">
            <p className="text-[#64748B] text-[16px] mb-5 leading-[1.8]">
              At TechVers, we are a team of creative and skilled professionals with a shared passion for transforming digital experiences. Founded in 2015, our mission is to empower businesses with innovative web solutions that drive growth and engagement. Our vision is to lead the industry by delivering excellence in every project, blending cutting-edge technology with artistic design.
            </p>
            <p className="text-[#64748B] text-[16px] mb-5 leading-[1.8]">
              Our team consists of experienced designers, developers, and strategists who work collaboratively to bring your vision to life. We pride ourselves on our client-centric approach, ensuring every project reflects your unique brand identity.
            </p>
            <br />
            <Link
              href="/about"
              className="bg-[#D4AF37] text-white px-[30px] py-[15px] rounded-[25px] text-[16px] font-medium hover:bg-[#1E3A8A] hover:text-[#D4AF37] hover:shadow-[0_5px_15px_rgba(255,255,255,0.3)] hover:-translate-y-[3px] transition-all duration-300 ease-in-out"
            >
              Read More
            </Link>
          </div>
          <div className="about-image">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Team at TechVers"
              width={800}
              height={600}
              className="w-full h-auto rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.05)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;