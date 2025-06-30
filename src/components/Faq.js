'use client';

import { useState, useEffect, useRef } from 'react';

const FAQSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const faqRefs = useRef([]);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    faqRefs.current.forEach((answer, index) => {
      if (answer) {
        answer.style.maxHeight = '0';
        answer.style.opacity = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';

        if (openFaqIndex === index) {
          answer.style.maxHeight = `${answer.scrollHeight}px`;
          answer.style.opacity = '1';
        } else {
          answer.style.maxHeight = '0';
          answer.style.opacity = '0';
        }
      }
    });
  }, [openFaqIndex]);

  return (
    <section className="faq-section py-20 bg-white">
      <div className="container mx-auto max-w-[1280px] px-5">
        <div className="section-header text-center mb-[50px]">
          <h5 className="text-[#D4AF37] text-[16px] font-medium uppercase tracking-[2px] mb-[10px]">
            FAQ
          </h5>
          <h2 className="text-[#1E3A8A] text-[40px] font-bold mb-[15px] leading-[1.2]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#64748B] text-[16px] max-w-[600px] mx-auto leading-[1.6]">
            Find answers to common questions about our services and processes.
          </p>
        </div>
        <div className="faq-content max-w-[800px] mx-auto">
          {[
            {
              question: 'What types of websites do you build?',
              answer:
                'We specialize in building a wide range of websites, including e-commerce platforms, corporate websites, portfolios, and custom web applications tailored to your needs.',
            },
            {
              question: 'How long does it take to complete a project?',
              answer:
                'Project timelines vary based on complexity, but most websites are completed within 4-8 weeks, including design, development, and testing phases.',
            },
            {
              question: 'Do you offer ongoing support?',
              answer:
                'Yes, we provide comprehensive maintenance and support packages to ensure your website remains secure, updated, and optimized.',
            },
            {
              question: 'Can you help with SEO and digital marketing?',
              answer:
                'Absolutely! We offer tailored SEO strategies and digital marketing services, including content marketing, PPC campaigns, and social media advertising, to boost your online visibility and drive traffic.',
            },
            {
              question: 'What is your process for starting a new project?',
              answer:
                'Our process begins with a consultation to understand your goals, followed by research, wireframing, design, development, and testing. We keep you involved at every stage to ensure the final product aligns with your vision.',
            },
            {
              question: 'Do you provide training for managing our website?',
              answer:
                'Yes, we offer personalized training sessions to help your team manage and update your website using CMS platforms or custom dashboards, ensuring you have full control.',
            },
          ].map((faq, index) => (
            <div
              key={index}
              className={`faq-item mb-5 bg-[#EEEEEE] rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] p-5 ${openFaqIndex === index ? 'open' : ''}`}
            >
              <h3
                className="text-[18px] font-semibold text-[#1E3A8A] mb-[10px] cursor-pointer flex items-center justify-between"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span>
                  <i
                    className={`fas fa-chevron-down text-[#D4AF37] transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                  ></i>
                </span>
              </h3>
              <p
                className="text-[14px] text-[#64748B] leading-[1.6]"
                ref={(el) => (faqRefs.current[index] = el)}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;