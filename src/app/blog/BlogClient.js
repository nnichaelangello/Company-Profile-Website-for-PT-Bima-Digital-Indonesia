'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SubpageNavbar from '../../components/SubpageNavbar';
import Footer from '../../components/Footer';

export default function BlogClient() {
  // State untuk mengelola menu navigasi (hamburger)
  const [isNavActive, setIsNavActive] = useState(false);

  // State untuk filter kategori
  const [selectedCategory, setSelectedCategory] = useState('all');

  // State untuk pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Jumlah posting per halaman, konstan untuk konsistensi

  // Data posting blog (lengkap dan konsisten)
  const blogPosts = [
    {
      category: 'Analytics',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Data Analysis Trends',
      title: 'Data Analysis Trends for 2025',
      date: 'March 10, 2025',
      description: 'Uncover the top data analysis trends shaping the future, from AI-driven insights to real-time dashboards.',
    },
    {
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1733503711063-3427bff34612?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'App Development Tips',
      title: '5 Essential App Development Tips',
      date: 'March 5, 2025',
      description: 'Learn key strategies to streamline app development and delight your users.',
    },
    {
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'E-commerce Growth',
      title: 'Scaling Your E-commerce Business',
      date: 'February 28, 2025',
      description: 'Proven tactics to grow your online store with optimized UX and analytics.',
    },
    {
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Social Media Hacks',
      title: 'Top 10 Social Media Hacks',
      date: 'February 20, 2025',
      description: 'Boost your social presence with these clever tricks for engagement and reach.',
    },
    {
      category: 'Content',
      image: 'https://plus.unsplash.com/premium_photo-1684107939829-55521ba20905?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Content Strategy',
      title: 'Mastering Content Strategy in 2025',
      date: 'February 15, 2025',
      description: 'Create content that captivates and converts with these modern approaches.',
    },
    {
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1715&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'SEO Updates',
      title: 'SEO Updates You Can’t Ignore',
      date: 'February 10, 2025',
      description: 'Stay ahead with the latest SEO changes and optimization techniques.',
    },
    {
      category: 'Analytics',
      image: 'https://plus.unsplash.com/premium_photo-1682310103070-d22ac81df717?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Predictive Analytics',
      title: 'The Rise of Predictive Analytics',
      date: 'February 5, 2025',
      description: 'How predictive tools are revolutionizing business decisions.',
    },
    {
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Web Dev Frameworks',
      title: 'Best Web Dev Frameworks of 2025',
      date: 'January 30, 2025',
      description: 'A rundown of the top frameworks for efficient web development.',
    },
    {
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'E-commerce UX',
      title: 'Enhancing E-commerce UX',
      date: 'January 25, 2025',
      description: 'Design tips to improve user experience and drive sales.',
    },
    {
      category: 'Social Media',
      image: 'https://plus.unsplash.com/premium_photo-1661683460895-99ef417a7473?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Influencer Marketing',
      title: 'Influencer Marketing 101',
      date: 'January 20, 2025',
      description: 'A beginner’s guide to leveraging influencers for brand growth.',
    },
  ];

  // Filter posting berdasarkan kategori
  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  // Logika pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Efek samping saat komponen dimuat
  useEffect(() => {
    console.log('TechVers Blog Page Loaded');
  }, []);

  // Fungsi untuk toggle menu navigasi
  const toggleNav = () => {
    setIsNavActive(prev => !prev);
  };

  // Fungsi untuk mengatur filter kategori
  const handleFilter = (category, e) => {
    e.preventDefault();
    setSelectedCategory(category);
    setCurrentPage(1); // Reset ke halaman pertama saat filter berubah
  };

  // Fungsi untuk mengganti halaman
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      const blogSection = document.getElementById('blog-list');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      {/* Header Section */}
      <SubpageNavbar />

      {/* Hero Section */}
      <section className="hero-section h-[500px] bg-[linear-gradient(rgba(30,58,138,0.8),rgba(30,58,138,0.8)),url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center flex items-center justify-center text-center text-white">
        <div className="container mx-auto max-w-[1280px] px-5">
          <div className="hero-content">
            <h1 className="text-[60px] font-bold mb-[20px] leading-[1.2] animate-fadeIn">
              TechVers Insights
            </h1>
            <p className="text-[20px] font-light mb-[30px] mx-[4rem] animate-fadeIn animate-delay-[500ms]">
              Unveiling the latest trends, strategies, and innovations in the digital realm.
            </p>
            <Link
              href="#blog-list"
              className="hero-btn bg-[#D4AF37] text-white px-[35px] py-[15px] rounded-[30px] text-base font-medium hover:bg-white hover:text-[#1E3A8A] hover:shadow-[0_5px_20px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Explore Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="blog-section blog-list-section py-[100px] bg-white" id="blog-list">
        <div className="container mx-auto max-w-[1280px] px-5">
          <div className="blog-wrapper flex flex-wrap gap-[50px]">
            <div className="blog-main flex-[3] min-w-[300px]">
              <div className="section-header mb-[60px] text-center relative">
                <h5 className="text-[#D4AF37] text-base font-medium uppercase tracking-[2px] mb-[10px]">
                  Our Blog
                </h5>
                <h2 className="text-[#1E3A8A] text-[40px] font-bold mb-[15px]">
                  Latest Insights
                </h2>
                <p className="text-[#64748B] text-base max-w-[600px] mx-auto">
                  Dive into expertly crafted articles to elevate your digital expertise.
                </p>
              </div>
              <div className="blog-grid grid gap-6" id="blog-grid">
                {currentPosts.length > 0 ? (
                  currentPosts.map((post, index) => (
                    <div
                      key={index}
                      className="blog-post bg-white rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] border border-[#E5E7EB] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-[10px] transition-all duration-300 ease-in-out overflow-hidden"
                      data-category={post.category}
                    >
                      <div className="blog-image relative w-full h-[200px] overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.alt}
                          width={600}
                          height={200}
                          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-in-out"
                          priority={index < 3}
                        />
                      </div>
                      <div className="blog-content p-[25px]">
                        <span className="category inline-block text-xs text-white bg-[#D4AF37] px-3 py-[5px] rounded-[20px] uppercase mb-[15px] font-medium">
                          {post.category}
                        </span>
                        <h3 className="text-xl font-semibold text-[#1E3A8A] mb-[10px] leading-[1.4]">
                          {post.title}
                        </h3>
                        <p className="date text-[13px] text-[#64748B] mb-[15px] italic">
                          {post.date}
                        </p>
                        <p className="text-sm text-[#64748B] mb-5 leading-[1.5]">
                          {post.description}
                        </p>
                        <Link
                          href="#"
                          className="read-more flex items-center text-[#1E3A8A] text-sm font-semibold hover:text-[#D4AF37] transition-colors duration-300 ease-in-out"
                        >
                          Read More
                          <i className="fas fa-arrow-right ml-2"></i>
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-[#64748B] col-span-full">
                    No posts available for this category.
                  </p>
                )}
              </div>
              <div className="pagination flex justify-center gap-4 mt-[50px]" id="pagination">
                {totalPages > 0 ? (
                  Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                    <button
                      key={pageNumber}
                      className={`page-btn ${currentPage === pageNumber ? 'active' : ''} px-3 py-1 rounded-md text-sm font-medium ${currentPage === pageNumber ? 'bg-[#1E3A8A] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                      onClick={() => handlePageChange(pageNumber)}
                      disabled={currentPage === pageNumber}
                      aria-label={`Go to page ${pageNumber}`}
                    >
                      {pageNumber}
                    </button>
                  ))
                ) : (
                  <p className="text-[#64748B] text-sm">No pages to display.</p>
                )}
              </div>
            </div>
            <aside className="blog-sidebar flex-1 min-w-[300px]">
              <div className="trending-section bg-[#F9FAFB] p-[25px] rounded-[15px] mb-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1E3A8A] text-xl font-semibold mb-5 relative">
                  Trending Now
                </h4>
                <ul>
                  {[
                    { title: 'Data Analysis Trends for 2025', date: 'March 10, 2025' },
                    { title: '5 Essential App Development Tips', date: 'March 5, 2025' },
                    { title: 'Top 10 Social Media Hacks', date: 'February 20, 2025' },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="mb-5 pb-5 border-b border-[#E5E7EB] last:mb-0 last:pb-0 last:border-b-0"
                    >
                      <Link
                        href="#"
                        className="text-[#2D3748] text-[15px] font-medium hover:text-[#D4AF37] transition-colors duration-300 ease-in-out"
                      >
                        {item.title}
                      </Link>
                      <p className="text-[#64748B] text-xs mt-[5px]">{item.date}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="categories-section bg-[#F9FAFB] p-[25px] rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1E3A8A] text-xl font-semibold mb-5 relative">
                  Categories
                </h4>
                <ul>
                  {['all', 'Analytics', 'Development', 'E-commerce', 'Social Media', 'Content', 'SEO'].map(category => (
                    <li key={category} className="mb-[15px]">
                      <a
                        href="#"
                        data-filter={category}
                        onClick={(e) => handleFilter(category, e)}
                        className={`block text-[#64748B] text-sm font-medium px-[15px] py-2 rounded-[20px] hover:bg-[#1E3A8A] hover:text-white transition-all duration-300 ease-in-out ${selectedCategory === category ? 'bg-[#1E3A8A] text-white' : ''}`}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-20 bg-[linear-gradient(135deg,#1E3A8A,#2B528F)] text-white text-center">
        <div className="container mx-auto max-w-[1280px] px-5">
          <div className="cta-content max-w-[800px] mx-auto">
            <h2 className="text-[42px] font-bold mb-5 [text-shadow:0_2px_10px_rgba(0,0,0,0.2)]">
              Join the Conversation
            </h2>
            <p className="text-base font-light mb-[30px] text-[#E5E7EB]">
              Subscribe or reach out to stay updated with our latest insights.
            </p>
            <Link
              href="/contact"
              className="cta-btn bg-[#D4AF37] text-white px-[35px] py-[15px] rounded-[30px] text-base font-medium hover:bg-white hover:text-[#1E3A8A] hover:shadow-[0_5px_20px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Connect Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
}