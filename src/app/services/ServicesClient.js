'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SubpageNavbar from '../../components/SubpageNavbar';
import Footer from '../../components/Footer';

export default function ServicesClient() {
  // State untuk mengontrol status menu navigasi (terbuka/tertutup)
  const [isNavActive, setIsNavActive] = useState(false);

  // Log saat halaman dimuat
  useEffect(() => {
    console.log('TechVers Services Page Loaded');
  }, []);

  // Fungsi untuk toggle menu navigasi
  const toggleNav = () => {
    setIsNavActive((prev) => !prev);
  };

  return (
    <>
      {/* Header Section */}
      <SubpageNavbar />

      {/* Hero Section */}
      <section className="hero-section h-[500px] bg-[linear-gradient(rgba(30,58,138,0.8),rgba(30,58,138,0.8)),url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center flex items-center justify-center text-center text-white">
        <div className="container mx-auto max-w-[1280px] px-5">
          <div className="hero-content">
            <h1 className="text-[50px] font-bold leading-tight mb-5 animate-[fadeIn_1s_ease-in-out]">
              Mastering Your Digital Journey
            </h1>
            <p className="text-lg font-light mb-[30px] max-w-[700px] mx-auto animate-[fadeIn_1.5s_ease-in-out]">
              TechVers offers strategic, results-driven solutions tailored to your unique needs. Dive into our expertise.
            </p>
            <Link
              href="#services-list"
              className="hero-btn bg-[#D4AF37] text-white px-[30px] py-[15px] rounded-[25px] text-base font-medium hover:bg-[#1E3A8A] hover:shadow-[0_5px_15px_rgba(30,58,138,0.3)] hover:-translate-y-[3px] transition-all duration-300 ease-in-out animate-[fadeIn_2s_ease-in-out]"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="services-list-section py-20 bg-[#eee]" id="services-list">
        <div className="container mx-auto max-w-[1280px] px-5">
          <div className="section-header mb-[60px] text-center">
            <h5 className="text-[#D4AF37] text-base font-medium uppercase tracking-[2px] mb-[10px]">
              Our Services
            </h5>
            <h2 className="text-[#1E3A8A] text-[40px] font-bold mb-[15px]">
              Unmatched Digital Excellence
            </h2>
            <p className="text-[#64748B] text-base max-w-[600px] mx-auto">
              Discover how we blend creativity and technology to deliver transformative outcomes.
            </p>
          </div>
          <div className="services-list flex flex-col gap-10">
            <div className="service-row flex items-center gap-[30px] p-5 bg-white border-l-4 border-[#D4AF37] hover:translate-x-[10px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out">
              <div className="service-icon text-[#D4AF37] text-[40px] w-[60px] text-center">
                <i className="fas fa-layer-group"></i>
              </div>
              <div className="service-content flex-1">
                <h3 className="text-2xl font-semibold mb-[15px]">
                  Content Creation
                </h3>
                <p className="text-[#64748B] text-[15px] mb-5">
                  We craft compelling, audience-centric content that drives engagement and builds brand authority. Our team excels in storytelling across multiple formats.
                </p>
                <div className="service-details">
                  <h4 className="text-base font-semibold text-[#1E3A8A] mb-[10px]">
                    Capabilities:
                  </h4>
                  <ul className="list-disc ml-5 text-sm text-[#64748B]">
                    <li>SEO-optimized articles and thought leadership pieces</li>
                    <li>High-quality video production with scriptwriting</li>
                    <li>Custom graphics and animated visuals</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="service-row flex items-center gap-[30px] p-5 bg-[#1E3A8A] text-white border-l-4 border-white hover:translate-x-[10px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out">
              <div className="service-icon text-white text-[40px] w-[60px] text-center">
                <i className="fas fa-pen-nib"></i>
              </div>
              <div className="service-content flex-1">
                <h3 className="text-2xl font-semibold mb-[15px]">
                  Website Design & Development
                </h3>
                <p className="text-[#E5E7EB] text-[15px] mb-5">
                  Our bespoke websites are engineered for performance and designed for impact, ensuring your digital presence is both stunning and functional.
                </p>
                <div className="service-details">
                  <h4 className="text-base font-semibold text-[#D4AF37] mb-[10px]">
                    Capabilities:
                  </h4>
                  <ul className="list-disc ml-5 text-sm text-[#E5E7EB]">
                    <li>Custom UI/UX with interactive prototypes</li>
                    <li>Scalable e-commerce solutions</li>
                    <li>Advanced CMS and API integrations</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="service-row flex items-center gap-[30px] p-5 bg-white border-l-4 border-[#D4AF37] hover:translate-x-[10px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out">
              <div className="service-icon text-[#D4AF37] text-[40px] w-[60px] text-center">
                <i className="fas fa-share-alt"></i>
              </div>
              <div className="service-content flex-1">
                <h3 className="text-2xl font-semibold mb-[15px]">
                  Social Media Strategy
                </h3>
                <p className="text-[#64748B] text-[15px] mb-5">
                  We architect social media ecosystems that amplify your reach and deepen audience connections through targeted, creative campaigns.
                </p>
                <div className="service-details">
                  <h4 className="text-base font-semibold text-[#1E3A8A] mb-[10px]">
                    Capabilities:
                  </h4>
                  <ul className="list-disc ml-5 text-sm text-[#64748B]">
                    <li>Strategic content planning and scheduling</li>
                    <li>Ad optimization with detailed analytics</li>
                    <li>Influencer collaboration and community management</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="service-row flex items-center gap-[30px] p-5 bg-white border-l-4 border-[#D4AF37] hover:translate-x-[10px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out">
              <div className="service-icon text-[#D4AF37] text-[40px] w-[60px] text-center">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="service-content flex-1">
                <h3 className="text-2xl font-semibold mb-[15px]">
                  Data Analytics & Insights
                </h3>
                <p className="text-[#64748B] text-[15px] mb-5">
                  We turn raw data into actionable strategies, offering deep insights that optimize performance and fuel business growth.
                </p>
                <div className="service-details">
                  <h4 className="text-base font-semibold text-[#1E3A8A] mb-[10px]">
                    Capabilities:
                  </h4>
                  <ul className="list-disc ml-5 text-sm text-[#64748B]">
                    <li>Live performance tracking dashboards</li>
                    <li>Behavioral segmentation and trend analysis</li>
                    <li>Predictive modeling for future planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="portfolio-section py-20 bg-[#F9FAFB]">
        <div className="container mx-auto max-w-[1280px] px-5">
          <div className="section-header mb-[60px] text-center">
            <h5 className="text-[#D4AF37] text-base font-medium uppercase tracking-[2px] mb-[10px]">
              Our Achievements
            </h5>
            <h2 className="text-[#1E3A8A] text-[40px] font-bold mb-[15px]">
              Showcasing Impactful Projects
            </h2>
            <p className="text-[#64748B] text-base max-w-[600px] mx-auto">
              See how we’ve empowered brands with innovative digital solutions.
            </p>
          </div>
          <div className="portfolio-timeline relative flex flex-col gap-[60px]">
            <div className="portfolio-item flex flex-col md:flex-row items-center gap-10 max-w-[900px] mx-auto">
              <div className="portfolio-image flex-1">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="EcoSolutions project showcasing sustainable design"
                  width={600}
                  height={250}
                  className="w-full h-[250px] object-cover rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
                />
              </div>
              <div className="portfolio-text flex-1 p-5">
                <h3 className="text-[22px] font-semibold text-[#1E3A8A] mb-[10px]">
                  EcoSolutions
                </h3>
                <p className="text-sm text-[#64748B] mb-[15px]">
                  A comprehensive digital overhaul featuring content creation, social media, and analytics, resulting in a 45% traffic surge and optimized ad spend.
                </p>
                <Link
                  href="#"
                  className="portfolio-link text-[#D4AF37] text-sm font-medium hover:text-[#1E3A8A] transition-colors duration-300 ease-in-out"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="portfolio-reverse portfolio-item flex flex-col md:flex-row-reverse items-center gap-10 max-w-[900px] mx-auto">
              <div className="portfolio-image flex-1">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="InnovateTech project showcasing tech innovation"
                  width={600}
                  height={250}
                  className="w-full h-[250px] object-cover rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
                />
              </div>
              <div className="portfolio-text flex-1 p-5">
                <h3 className="text-[22px] font-semibold text-[#1E3A8A] mb-[10px]">
                  InnovateTech
                </h3>
                <p className="text-sm text-[#64748B] mb-[15px]">
                  A cutting-edge website redesign with e-commerce integration, delivering a 30% uplift in conversions and a seamless user experience.
                </p>
                <Link
                  href="#"
                  className="portfolio-link text-[#D4AF37] text-sm font-medium hover:text-[#1E3A8A] transition-colors duration-300 ease-in-out"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="portfolio-item flex flex-col md:flex-row items-center gap-10 max-w-[900px] mx-auto">
              <div className="portfolio-image flex-1">
                <Image
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="BrightFuture project showcasing social media growth"
                  width={600}
                  height={250}
                  className="w-full h-[250px] object-cover rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
                />
              </div>
              <div className="portfolio-text flex-1 p-5">
                <h3 className="text-[22px] font-semibold text-[#1E3A8A] mb-[10px]">
                  BrightFuture
                </h3>
                <p className="text-sm text-[#64748B] mb-[15px]">
                  A dynamic social media strategy that garnered 200K impressions and built a vibrant online community for a startup.
                </p>
                <Link
                  href="#"
                  className="portfolio-link text-[#D4AF37] text-sm font-medium hover:text-[#1E3A8A] transition-colors duration-300 ease-in-out"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="pricing-section py-20 bg-white" id="pricing">
        <div className="container mx-auto max-w-[1280px] px-5">
          <div className="section-header mb-[60px] text-center">
            <h5 className="text-[#D4AF37] text-base font-medium uppercase tracking-[2px] mb-[10px]">
              Pricing Plans
            </h5>
            <h2 className="text-[#1E3A8A] text-[40px] font-bold mb-[15px]">
              Choose Your Perfect Package
            </h2>
            <p className="text-[#64748B] text-base max-w-[600px] mx-auto">
              Flexible plans designed to suit your goals, with clear benefits and trade-offs.
            </p>
          </div>
          <div className="pricing-plans flex gap-[30px] justify-center flex-wrap">
            <div className="pricing-plan bg-[#F9FAFB] p-[30px] w-[350px] rounded-[10px] text-center hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold mb-[15px]">Starter</h3>
              <p className="price text-[32px] font-bold text-[#D4AF37] mb-5">
                $799 / month
              </p>
              <ul className="features list-none mb-5">
                <li className="text-sm text-[#64748B] mb-[10px]">
                  Basic Website (5 pages)
                </li>
                <li className="text-sm text-[#64748B] mb-[10px]">
                  4 Blog Posts/Month
                </li>
                <li className="text-sm text-[#64748B] mb-[10px]">
                  Social Media (2 Platforms)
                </li>
                <li className="text-sm text-[#64748B] mb-[10px]">
                  Basic Analytics Report
                </li>
              </ul>
              <div className="pros-cons">
                <h4 className="text-base font-semibold text-[#1E3A8A] mb-[5px]">
                  Pros:
                </h4>
                <p className="text-[13px] text-[#64748B] mb-[15px]">
                  Cost-effective entry point, ideal for small businesses or startups.
                </p>
                <h4 className="text-base font-semibold text-[#1E3A8A] mb-[5px]">
                  Cons:
                </h4>
                <p className="text-[13px] text-[#64748B] mb-[15px]">
                  Limited scalability, no advanced features or customizations.
                </p>
              </div>
              <Link
                href="/contact"
                className="plan-btn bg-[#D4AF37] text-white px-[25px] py-3 rounded-[25px] text-[15px] font-medium hover:bg-[#1E3A8A] hover:-translate-y-[2px] transition-all duration-300 ease-in-out"
              >
                Get Started
              </Link>
            </div>
            <div className="pricing-plan bg-[#1E3A8A] text-white p-[30px] w-[350px] rounded-[10px] text-center border-2 border-[#D4AF37] hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold mb-[15px]">
                Professional
              </h3>
              <p className="price text-[32px] font-bold text-white mb-5">
                $1,999 / month
              </p>
              <ul className="features list-none mb-5">
                <li className="text-sm text-[#E5E7EB] mb-[10px]">
                  Dynamic Website (10 pages + CMS)
                </li>
                <li className="text-sm text-[#E5E7EB] mb-[10px]">
                  8 Blog Posts + 2 Videos/Month
                </li>
                <li className="text-sm text-[#E5E7EB] mb-[10px]">
                  Social Media (4 Platforms + Ads)
                </li>
                <li className="text-sm text-[#E5E7EB] mb-[10px]">
                  Advanced Analytics Dashboard
                </li>
              </ul>
              <div className="pros-cons">
                <h4 className="text-base font-semibold text-[#D4AF37] mb-[5px]">
                  Pros:
                </h4>
                <p className="text-[13px] text-[#E5E7EB] mb-[15px]">
                  Balanced features for growing brands, robust analytics, and multimedia support.
                </p>
                <h4 className="text-base font-semibold text-[#D4AF37] mb-[5px]">
                  Cons:
                </h4>
                <p className="text-[13px] text-[#E5E7EB] mb-[15px]">
                  Higher cost, no predictive modeling or full customization.
                </p>
              </div>
              <Link
                href="/contact"
                className="plan-btn bg-white text-[#1E3A8A] px-[25px] py-3 rounded-[25px] text-[15px] font-medium hover:bg-[#D4AF37] hover:text-white hover:-translate-y-[2px] transition-all duration-300 ease-in-out"
              >
                Get Started
              </Link>
            </div>
            <div className="pricing-plan bg-[#F9FAFB] p-[30px] w-[350px] rounded-[10px] text-center hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold mb-[15px]">
                Enterprise
              </h3>
              <p className="price text-[32px] font-bold text-[#D4AF37] mb-5">
                $4,499 / month
              </p>
              <ul className="features list-none mb-5">
                <li className="text-sm text-[#64748B] mb-[10px]">
                  Custom Website (Unlimited Pages + E-commerce)
                </li>
                <li className="text-sm text-[#64748B] mb-[10px]">
                  Unlimited Content + Video Campaigns
                </li>
                <li className="text-sm text-[#64748B] mb-[10px]">
                  All Platforms + Full Campaign Management
                </li>
                <li className="text-sm text-[#64748B] mb-[10px]">
                  Predictive Analytics & Dedicated Support
                </li>
              </ul>
              <div className="pros-cons">
                <h4 className="text-base font-semibold text-[#1E3A8A] mb-[5px]">
                  Pros:
                </h4>
                <p className="text-[13px] text-[#64748B] mb-[15px]">
                  Comprehensive solution with top-tier features, perfect for large-scale businesses.
                </p>
                <h4 className="text-base font-semibold text-[#1E3A8A] mb-[5px]">
                  Cons:
                </h4>
                <p className="text-[13px] text-[#64748B] mb-[15px]">
                  Premium price, may exceed needs of smaller operations.
                </p>
              </div>
              <Link
                href="/contact"
                className="plan-btn bg-[#D4AF37] text-white px-[25px] py-3 rounded-[25px] text-[15px] font-medium hover:bg-[#1E3A8A] hover:-translate-y-[2px] transition-all duration-300 ease-in-out"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-20 bg-[linear-gradient(135deg,#1E3A8A,#2B528F)] text-white text-center">
        <div className="container mx-auto max-w-[1280px] px-5">
          <div className="cta-content max-w-[800px] mx-auto">
            <h2 className="text-[40px] font-bold mb-5">
              Let’s Create Your Success Story
            </h2>
            <p className="text-base font-light text-[#E5E7EB] mb-[30px]">
              Partner with TechVers to unlock your brand’s full potential. Reach out for a personalized consultation.
            </p>
            <Link
              href="/contact"
              className="cta-btn bg-[#D4AF37] text-white px-[30px] py-[15px] rounded-[25px] text-base font-medium hover:bg-white hover:text-[#1E3A8A] hover:shadow-[0_5px_15px_rgba(255,255,255,0.3)] hover:-translate-y-[3px] transition-all duration-300 ease-in-out"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
}