'use client';

import Link from 'next/link';

const ServicesSection = () => {
  return (
    <section className="services-section py-20 bg-[#EEEEEE]" id="services">
        <div className="container mx-auto max-w-[1280px] px-5 flex">
          <div className="services-cards relative">
            <div className="service-card service-card1 bg-white p-[30px] rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] text-center hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] transition-all duration-300 ease-in-out absolute h-[20rem] w-[15rem] mt-[4rem]">
              <i className="fas fa-layer-group text-[#D4AF37] text-[32px] mb-5"></i>
              <h3 className="text-[20px] font-semibold mb-[10px] text-[#2D3748]">
                Content Creation
              </h3>
              <p className="text-[14px] text-[#64748B] mb-[10px]">
                Engaging and high-quality content to captivate your audience.
              </p>
            </div>
            <div className="service-card highlight service-card2 bg-[#1E3A8A] text-white p-[30px] rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] text-center hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] transition-all duration-300 ease-in-out absolute h-[20rem] w-[15rem] ml-[17rem]">
              <i className="fas fa-pen-nib text-white text-[32px] mb-5"></i>
              <h3 className="text-[20px] font-semibold mb-[10px]">
                Website Design
              </h3>
              <p className="text-[14px] text-[#E5E7EB] mb-[10px]">
                Beautiful, responsive designs tailored to your brand.
              </p>
            </div>
            <div className="service-card service-card3 bg-white p-[30px] rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] text-center hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] transition-all duration-300 ease-in-out absolute h-[20rem] w-[15rem] mt-[25rem]">
              <i className="fas fa-share-alt text-[#D4AF37] text-[32px] mb-5"></i>
              <h3 className="text-[20px] font-semibold mb-[10px] text-[#2D3748]">
                Social Media
              </h3>
              <p className="text-[14px] text-[#64748B] mb-[10px]">
                Strategic social media management to boost engagement.
              </p>
            </div>
            <div className="service-card service-card4 bg-white p-[30px] rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] text-center hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] transition-all duration-300 ease-in-out absolute h-[20rem] w-[15rem] ml-[17rem] mt-[21rem]">
              <i className="fas fa-chart-line text-[#D4AF37] text-[32px] mb-5"></i>
              <h3 className="text-[20px] font-semibold mb-[10px] text-[#2D3748]">
                Analytics & Data
              </h3>
              <p className="text-[14px] text-[#64748B] mb-[10px]">
                Insightful data analysis to drive informed decisions.
              </p>
            </div>
          </div>
          <div className="section-header mt-[15rem] ml-[40rem] text-left">
            <h5 className="text-[#D4AF37] text-[16px] font-medium uppercase tracking-[2px] mb-[10px]">
              Our Services
            </h5>
            <h2 className="text-[#1E3A8A] text-[40px] font-bold mb-[15px] leading-[1.2]">
              Delivering Top-Quality Digital Solutions
            </h2>
            <p className="text-[#64748B] text-[16px] max-w-[100vh] mb-5 leading-[1.6]">
              We provide innovative solutions to help your business thrive in the digital landscape.
            </p>
            <Link
              href="/services"
              className="services-btn bg-[#1E3A8A] text-white px-[25px] py-3 rounded-[25px] text-[15px] font-medium hover:bg-[#D4AF37] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)] hover:-translate-y-[2px] transition-all duration-300 ease-in-out"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
  );
};

export default ServicesSection;