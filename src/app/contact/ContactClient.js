'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SubpageNavbar from '../../components/SubpageNavbar';
import Footer from '../../components/Footer';

export default function ContactClient() {
  // State untuk hamburger menu
  const [isNavActive, setIsNavActive] = useState(false);

  // State untuk form submission
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);

  // Fungsi untuk toggle hamburger menu
  const toggleNav = () => {
    setIsNavActive(prev => !prev);
  };

  // Fungsi untuk menangani perubahan input form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Validasi email sederhana
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setFormStatus('invalid-email');
      console.error('Invalid email format');
      return;
    }
    try {
      setFormStatus('sending');
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulasi delay
      console.log('Form submitted:', formData);
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };

  // Log saat halaman dimuat
  useEffect(() => {
    console.log('TechVers Contact Page Loaded');
  }, []);

  return (
    <>
      {/* Header Section */}
      <SubpageNavbar />

      {/* Contact Section */}
      <section className="contact-section py-20 bg-white">
        <div className="container mx-auto max-w-[1280px] px-5">
          <div className="section-header mb-[50px] text-center relative">
            <h5 className="text-[#D4AF37] text-base font-medium uppercase tracking-[2px] mb-[10px]">
              Contact Us
            </h5>
            <h2 className="text-[#1E3A8A] text-[40px] font-bold mb-[15px]">
              Get in Touch With Us
            </h2>
            <p className="text-[#64748B] text-base max-w-[600px] mx-auto">
              We’d love to hear from you. Reach out to our team for any inquiries or support.
            </p>
          </div>
          <div className="contact-content grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="contact-info flex flex-col gap-5">
              <div className="info-item flex items-center gap-[15px] p-5 bg-[#F9FAFB] rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out">
                <i className="fas fa-phone text-[#1E3A8A] text-xl"></i>
                <div>
                  <h4 className="text-[#1E3A8A] text-base font-semibold mb-[5px]">
                    Phone
                  </h4>
                  <p className="text-[#64748B] text-sm">(+63) 236 6322</p>
                </div>
              </div>
              <div className="info-item flex items-center gap-[15px] p-5 bg-[#F9FAFB] rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out">
                <i className="fas fa-envelope text-[#1E3A8A] text-xl"></i>
                <div>
                  <h4 className="text-[#1E3A8A] text-base font-semibold mb-[5px]">
                    Email
                  </h4>
                  <a
                    href="mailto:info@techvers.com"
                    className="text-[#64748B] text-sm hover:text-[#D4AF37] transition-colors duration-300 ease-in-out"
                  >
                    info@techvers.com
                  </a>
                </div>
              </div>
              <div className="info-item flex items-center gap-[15px] p-5 bg-[#F9FAFB] rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out">
                <i className="fas fa-map-marker-alt text-[#1E3A8A] text-xl"></i>
                <div>
                  <h4 className="text-[#1E3A8A] text-base font-semibold mb-[5px]">
                    Address
                  </h4>
                  <p className="text-[#64748B] text-sm">
                    639 Jade Valley, Washington DC
                  </p>
                </div>
              </div>
              <div className="info-item flex items-center gap-[15px] p-5 bg-[#F9FAFB] rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out">
                <i className="fas fa-clock text-[#1E3A8A] text-xl"></i>
                <div>
                  <h4 className="text-[#1E3A8A] text-base font-semibold mb-[5px]">
                    Hours
                  </h4>
                  <p className="text-[#64748B] text-sm">
                    Mon - Fri: 10am - 6pm
                    <br />
                    Sat - Sun: 10am - 6pm
                  </p>
                </div>
              </div>
            </div>
            <form
              className="contact-form bg-[#F9FAFB] p-5 rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.05)]"
              id="contactForm"
              onSubmit={handleSubmit}
            >
              <div className="form-group mb-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-3 py-3 border border-[#E5E7EB] rounded-lg text-sm text-[#2D3748] bg-white focus:outline-none focus:border-[#1E3A8A] focus:shadow-[0_0_5px_rgba(30,58,138,0.2)] transition-all duration-300 ease-in-out"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  aria-label="Your Name"
                />
              </div>
              <div className="form-group mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-3 border border-[#E5E7EB] rounded-lg text-sm text-[#2D3748] bg-white focus:outline-none focus:border-[#1E3A8A] focus:shadow-[0_0_5px_rgba(30,58,138,0.2)] transition-all duration-300 ease-in-out"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  aria-label="Your Email"
                />
              </div>
              <div className="form-group mb-5">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-3 py-3 border border-[#E5E7EB] rounded-lg text-sm text-[#2D3748] bg-white focus:outline-none focus:border-[#1E3A8A] focus:shadow-[0_0_5px_rgba(30,58,138,0.2)] transition-all duration-300 ease-in-out"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  aria-label="Subject"
                />
              </div>
              <div className="form-group mb-5">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-3 py-3 border border-[#E5E7EB] rounded-lg text-sm text-[#2D3748] bg-white focus:outline-none focus:border-[#1E3A8A] focus:shadow-[0_0_5px_rgba(30,58,138,0.2)] transition-all duration-300 ease-in-out resize-none min-h-[120px]"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  aria-label="Your Message"
                />
              </div>
              {formStatus === 'success' && (
                <p className="text-green-600 text-sm mb-4">
                  Message sent successfully!
                </p>
              )}
              {formStatus === 'invalid-email' && (
                <p className="text-red-600 text-sm mb-4">
                  Please enter a valid email address.
                </p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600 text-sm mb-4">
                  Failed to send message. Please try again later.
                </p>
              )}
              <button
                type="submit"
                className="form-btn bg-[#1E3A8A] text-white px-[30px] py-3 rounded-[25px] text-base font-medium hover:bg-[#D4AF37] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)] hover:-translate-y-[2px] transition-all duration-300 ease-in-out disabled:opacity-50"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
}