'use client';

import Link from 'next/link';
import Image from 'next/image';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section py-20 bg-white" id="testimonials">
      <div className="container mx-auto max-w-[1280px] px-5">
        <div className="section-header text-center mb-[50px]">
          <h5 className="text-[#D4AF37] text-[16px] font-medium uppercase tracking-[2px] mb-[10px]">
            Testimonials
          </h5>
          <h2 className="text-[#1E3A8A] text-[40px] font-bold mb-[15px] leading-[1.2]">
            What Our Clients Say
          </h2>
          <p className="text-[#64748B] text-[16px] max-w-[600px] mx-auto leading-[1.6]">
            Hear from our satisfied clients about their experience working with us.
          </p>
        </div>
        <div className="testimonials-cards flex gap-[30px] justify-center flex-wrap">
          <div className="testimonial-card bg-white p-[30px] rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] w-[350px] text-center hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] transition-all duration-300 ease-in-out">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              alt="Nick Wade"
              width={80}
              height={80}
              className="w-[80px] h-[80px] rounded-full mb-5 mx-auto object-cover"
            />
            <p className="text-[14px] text-[#64748B] mb-5 italic leading-[1.6]">
              "TechVers transformed our online presence with a stunning website. Their team was professional and attentive."
            </p>
            <h4 className="text-[16px] font-semibold text-[#1E3A8A] leading-[1.4]">
              Nick Wade,{' '}
              <span className="block text-[14px] font-normal text-[#64748B]">CEO, InnovateTech</span>
            </h4>
          </div>
          <div className="testimonial-card bg-white p-[30px] rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] w-[350px] text-center hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] transition-all duration-300 ease-in-out">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              alt="Natasha Reyes"
              width={80}
              height={80}
              className="w-[80px] h-[80px] rounded-full mb-5 mx-auto object-cover"
            />
            <p className="text-[14px] text-[#64748B] mb-5 italic leading-[1.6]">
              "Working with TechVers was a game-changer. Their creative solutions exceeded our expectations."
            </p>
            <h4 className="text-[16px] font-semibold text-[#1E3A8A] leading-[1.4]">
              Natasha Reyes,{' '}
              <span className="block text-[14px] font-normal text-[#64748B]">
                Marketing Director, BrightFuture
              </span>
            </h4>
          </div>
          <div className="testimonial-card bg-white p-[30px] rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] w-[350px] text-center hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] transition-all duration-300 ease-in-out">
            <Image
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              alt="Carolyn Banks"
              width={80}
              height={80}
              className="w-[80px] h-[80px] rounded-full mb-5 mx-auto object-cover"
            />
            <p className="text-[14px] text-[#64748B] mb-5 italic leading-[1.6]">
              "The best web agency we’ve worked with! TechVers delivered a seamless and modern website."
            </p>
            <h4 className="text-[16px] font-semibold text-[#1E3A8A] leading-[1.4]">
              Carolyn Banks,{' '}
              <span className="block text-[14px] font-normal text-[#64748B]">Founder, EcoSolutions</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;