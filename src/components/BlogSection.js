'use client';

import Link from 'next/link';
import Image from 'next/image';

const BlogSection = () => {
  return (
    <section className="blog-section py-20 bg-[#EEEEEE]" id="blog">
      <div className="container mx-auto max-w-[1280px] px-5">
        <div className="section-header text-center mb-[50px]">
          <h5 className="text-[#D4AF37] text-[16px] font-medium uppercase tracking-[2px] mb-[10px]">
            Our Blog
          </h5>
          <h2 className="text-[#1E3A8A] text-[40px] font-bold mb-[15px] leading-[1.2]">
            Latest Insights & Updates
          </h2>
          <p className="text-[#64748B] text-[16px] max-w-[600px] mx-auto leading-[1.6]">
            Stay updated with the latest trends and insights from our blog.
          </p>
        </div>
        <div className="blog-cards flex gap-[30px] justify-center flex-wrap">
          <div className="blog-card bg-white rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] w-[350px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] transition-all duration-300 ease-in-out overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Data Analysis"
              width={400}
              height={200}
              className="w-full h-[200px] object-cover"
            />
            <div className="blog-card-content p-5">
              <h3 className="text-[18px] font-semibold text-[#1E3A8A] mb-[10px] leading-[1.4]">
                Data Analysis Trends
              </h3>
              <p className="text-[14px] text-[#64748B] leading-[1.6]">
                Explore the latest trends in data analysis to stay ahead of the curve.
              </p>
            </div>
          </div>
          <div className="blog-card bg-white rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] w-[350px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] transition-all duration-300 ease-in-out overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1733503711063-3427bff34612?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
              alt="App Development"
              width={400}
              height={200}
              className="w-full h-[200px] object-cover"
            />
            <div className="blog-card-content p-5">
              <h3 className="text-[18px] font-semibold text-[#1E3A8A] mb-[10px] leading-[1.4]">
                App Development Tips
              </h3>
              <p className="text-[14px] text-[#64748B] leading-[1.6]">
                Learn key strategies for building successful mobile applications.
              </p>
            </div>
          </div>
          <div className="blog-card bg-white rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] w-[350px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] transition-all duration-300 ease-in-out overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="E-commerce Solutions"
              width={400}
              height={200}
              className="w-full h-[200px] object-cover"
            />
            <div className="blog-card-content p-5">
              <h3 className="text-[18px] font-semibold text-[#1E3A8A] mb-[10px] leading-[1.4]">
                E-commerce Growth
              </h3>
              <p className="text-[14px] text-[#64748B] leading-[1.6]">
                Discover how to scale your e-commerce business effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;