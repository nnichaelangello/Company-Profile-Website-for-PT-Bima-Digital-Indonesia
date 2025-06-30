'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SubpageNavbar from '../../components/SubpageNavbar';
import Footer from '../../components/Footer';

export default function AboutClient() {
  // State untuk counter animasi
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    awards: 0,
  });
  const targetCounters = {
    projects: 150,
    clients: 200,
    years: 5,
    awards: 12,
  };

  // Data tim
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      bio: 'John leads TechVers with over 15 years of experience in web innovation.',
    },
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      bio: 'Jane drives our technical excellence with expertise in modern frameworks.',
    },
    {
      name: 'Michael Brown',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      bio: 'Michael crafts strategies to elevate our brand presence globally.',
    },
    {
      name: 'Emily Davis',
      role: 'UX Designer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      bio: 'Emily creates user experiences that are intuitive and engaging.',
    },
  ];

  // Data klien terkemuka (logo merek terkenal)
  const clients = [
    { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg' },
  ];

  // Data testimoni
  const testimonials = [
    {
      quote: 'TechVers transformed our online presence with a stunning website that doubled our conversions!',
      author: 'Sarah Johnson',
      company: 'Startup Inc.',
    },
    {
      quote: 'Their team is professional, responsive, and truly understands digital strategy.',
      author: 'Mark Lee',
      company: 'E-commerce Co.',
    },
    {
      quote: 'Working with TechVers was a game-changer for our brand visibility.',
      author: 'Anna Taylor',
      company: 'Marketing Agency',
    },
  ];

  // Animasi counter
  useEffect(() => {
    const duration = 2000; // Durasi animasi dalam milidetik
    const stepTime = 20; // Waktu per langkah
    const steps = duration / stepTime;

    const timers = [];

    const animateCounter = (key, target) => {
      let start = 0;
      const increment = target / steps;
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(timer);
          start = target;
        }
        setCounters((prev) => ({ ...prev, [key]: Math.ceil(start) }));
      }, stepTime);
      timers.push(timer);
    };

    animateCounter('projects', targetCounters.projects);
    animateCounter('clients', targetCounters.clients);
    animateCounter('years', targetCounters.years);
    animateCounter('awards', targetCounters.awards);

    // Cleanup timers on unmount
    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, []);

  // Log saat halaman dimuat
  useEffect(() => {
    console.log('TechVers About Page Loaded');
  }, []);

  return (
    <>
      {/* Header Section */}
      <SubpageNavbar />

      {/* Hero Section */}
      <section className="hero-section h-[500px] bg-[linear-gradient(rgba(30,58,138,0.8),rgba(30,58,138,0.8)),url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center flex items-center justify-center text-center text-white">
        <div className="container mx-auto max-w-[1280px] px-5">
          <div className="hero-content">
            <h1 className="text-[60px] font-bold mb-[20px] leading-[1.2] animate-fadeIn">
              About TechVers
            </h1>
            <p className="text-[20px] font-light mb-[30px] mx-[4rem] animate-fadeIn animate-delay-[500ms]">
              Discover our story, mission, and the team driving digital innovation.
            </p>
            <Link
              href="#about-content"
              className="hero-btn bg-[#D4AF37] text-white px-[35px] py-[15px] rounded-[30px] text-base font-medium hover:bg-white hover:text-[#1E3A8A] hover:shadow-[0_5px_20px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-20 bg-white" id="about-content">
        <div className="container mx-auto max-w-[1280px] px-5">
          {/* Overview and History */}
          <div className="section-header mb-[50px] text-center relative">
            <h5 className="text-[#D4AF37] text-base font-medium uppercase tracking-[2px] mb-[10px]">
              Our Story
            </h5>
            <h2 className="text-[#1E3A8A] text-[40px] font-bold mb-[15px]">
              Who We Are
            </h2>
            <p className="text-[#64748B] text-base max-w-[600px] mx-auto">
              TechVers is a leading web agency committed to transforming businesses through innovative digital solutions.
            </p>
          </div>
          <div className="history-content grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-20">
            <div className="history-text">
              <h3 className="text-[#1E3A8A] text-xl font-semibold mb-5">
                A Journey of Innovation
              </h3>
              <p className="text-[#64748B] text-base mb-4">
                Founded in 2020, TechVers started as a small team of passionate developers and designers with a vision to revolutionize the digital landscape. Over the years, we have grown into a trusted partner for businesses worldwide, delivering over 150 projects across various industries.
              </p>
              <p className="text-[#64748B] text-base">
                From startups to enterprises, we pride ourselves on our ability to create tailored solutions that drive measurable results, combining creativity with cutting-edge technology.
              </p>
            </div>
            <div className="history-image">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="TechVers Journey"
                width={600}
                height={300}
                className="w-full h-[300px] object-cover rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.05)]"
              />
            </div>
          </div>

          {/* Mission, Vision, and Core Values */}
          <div className="mission-vision-values mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Mission */}
              <div className="mission bg-[#F9FAFB] p-[30px] rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.05)]">
                <h3 className="text-[#1E3A8A] text-xl font-semibold mb-5">
                  Our Mission
                </h3>
                <p className="text-[#64748B] text-base">
                  To empower businesses with innovative web solutions that drive success and growth in the digital age.
                </p>
              </div>
              {/* Vision */}
              <div className="vision bg-[#F9FAFB] p-[30px] rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.05)]">
                <h3 className="text-[#1E3A8A] text-xl font-semibold mb-5">
                  Our Vision
                </h3>
                <p className="text-[#64748B] text-base">
                  To become a global leader in digital transformation by 2030, setting the standard for innovation and excellence.
                </p>
              </div>
              {/* Core Values */}
              <div className="core-values bg-[#F9FAFB] p-[30px] rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.05)]">
                <h3 className="text-[#1E3A8A] text-xl font-semibold mb-5">
                  Core Values
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-[#D4AF37]"></i>
                    <span className="text-[#64748B] text-sm">Innovation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-[#D4AF37]"></i>
                    <span className="text-[#64748B] text-sm">Integrity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-[#D4AF37]"></i>
                    <span className="text-[#64748B] text-sm">Collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-[#D4AF37]"></i>
                    <span className="text-[#64748B] text-sm">Excellence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="achievements-section mb-20">
            <h3 className="text-[#1E3A8A] text-[28px] font-bold text-center mb-10">
              Our Achievements
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-[#F9FAFB] p-6 rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.05)]">
                <p className="text-[32px] font-bold text-[#1E3A8A] mb-2">
                  {counters.projects}+
                </p>
                <p className="text-[#64748B] text-sm">Projects Completed</p>
              </div>
              <div className="bg-[#F9FAFB] p-6 rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.05)]">
                <p className="text-[32px] font-bold text-[#1E3A8A] mb-2">
                  {counters.clients}+
                </p>
                <p className="text-[#64748B] text-sm">Happy Clients</p>
              </div>
              <div className="bg-[#F9FAFB] p-6 rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.05)]">
                <p className="text-[32px] font-bold text-[#1E3A8A] mb-2">
                  {counters.years}+
                </p>
                <p className="text-[#64748B] text-sm">Years of Experience</p>
              </div>
              <div className="bg-[#F9FAFB] p-6 rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.05)]">
                <p className="text-[32px] font-bold text-[#1E3A8A] mb-2">
                  {counters.awards}+
                </p>
                <p className="text-[#64748B] text-sm">Awards Won</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="team-section mb-20">
            <h3 className="text-[#1E3A8A] text-[28px] font-bold text-center mb-10">
              Meet Our Team
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="team-member relative overflow-hidden rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.1)] animate-teamCard"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-[400px] object-cover transition-transform duration-500 ease-in-out"
                  />
                  <div className="team-overlay absolute inset-0 bg-[rgba(30,58,138,0.85)] flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <h4 className="text-white text-lg font-semibold mb-2">{member.name}</h4>
                    <p className="text-[#D4AF37] text-sm mb-2">{member.role}</p>
                    <p className="text-white text-sm text-center px-4">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clients Section */}
          <div className="clients-section mb-20 bg-[#F9FAFB] py-10">
            <h3 className="text-[#1E3A8A] text-[28px] font-bold text-center mb-10">
              Trusted by Leading Brands
            </h3>
            <div className="flex flex-wrap justify-center gap-8 px-4">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="client-logo flex items-center justify-center h-[80px] w-[150px] bg-white rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] animate-clientLogo grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={40}
                    className="object-contain h-10 w-auto"
                    onError={(e) => (e.target.src = '/images/fallback-logo.png')}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="testimonials-section mb-20">
            <h3 className="text-[#1E3A8A] text-[28px] font-bold text-center mb-10">
              What Our Clients Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial bg-[#F9FAFB] p-6 rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] animate-fadeIn"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <p className="text-[#64748B] text-sm mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-[#1E3A8A] text-sm font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="text-[#64748B] text-xs">{testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20 bg-[linear-gradient(135deg,#1E3A8A,#2B528F)] text-white text-center">
        <div className="container mx-auto max-w-[1280px] px-5">
          <div className="cta-content max-w-[800px] mx-auto">
            <h2 className="text-[42px] font-bold mb-5 [text-shadow:0_2px_10px_rgba(0,0,0,0.2)]">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base font-light mb-[30px] text-[#E5E7EB]">
              Let’s work together to create a digital presence that drives success.
            </p>
            <Link
              href="/contact"
              className="cta-btn bg-[#D4AF37] text-white px-[35px] py-[15px] rounded-[30px] text-base font-medium hover:bg-white hover:text-[#1E3A8A] hover:shadow-[0_5px_20px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 ease-in-out"
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