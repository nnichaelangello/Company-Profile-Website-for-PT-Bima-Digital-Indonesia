import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white pt-[60px] pb-[30px]">
      <div className="container mx-auto max-w-[1280px] px-5">
        <div className="footer-container flex gap-[30px] justify-between flex-wrap mb-10">
          <div className="footer-column flex-1 min-w-[200px]">
            <h4 className="text-[#D4AF37] text-[18px] font-semibold mb-5 leading-[1.4]">
              About TechVers
            </h4>
            <p className="text-[14px] text-[#E5E7EB] leading-[1.6]">
              We are a leading web agency dedicated to transforming your digital presence with innovative solutions.
            </p>
          </div>
          <div className="footer-column flex-1 min-w-[200px]">
            <h4 className="text-[#D4AF37] text-[18px] font-semibold mb-5 leading-[1.4]">
              Quick Links
            </h4>
            <ul className="space-y-[10px]">
              <li>
                <Link
                  href="/"
                  className="text-[#E5E7EB] text-[14px] hover:text-[#D4AF37] transition-colors duration-300 ease-in-out leading-[1.6]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#E5E7EB] text-[14px] hover:text-[#D4AF37] transition-colors duration-300 ease-in-out leading-[1.6]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[#E5E7EB] text-[14px] hover:text-[#D4AF37] transition-colors duration-300 ease-in-out leading-[1.6]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#E5E7EB] text-[14px] hover:text-[#D4AF37] transition-colors duration-300 ease-in-out leading-[1.6]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-column flex-1 min-w-[200px]">
            <h4 className="text-[#D4AF37] text-[18px] font-semibold mb-5 leading-[1.4]">
              Contact Info
            </h4>
            <ul className="space-y-[10px]">
              <li className="flex items-center">
                <i className="fas fa-phone text-[#D4AF37] mr-[10px] text-[14px]"></i>
                <span className="text-[14px] text-[#E5E7EB] leading-[1.6]">
                  (+63) 236 6322
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-[#D4AF37] mr-[10px] text-[14px]"></i>
                <a
                  href="mailto:info@techvers.com"
                  className="text-[#E5E7EB] hover:text-[#D4AF37] transition-colors duration-300 ease-in-out text-[14px] leading-[1.6]"
                >
                  info@techvers.com
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-[#D4AF37] mr-[10px] text-[14px]"></i>
                <span className="text-[14px] text-[#E5E7EB] leading-[1.6]">
                  639 Jade Valley, Washington DC
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-column flex-1 min-w-[200px]">
            <h4 className="text-[#D4AF37] text-[18px] font-semibold mb-5 leading-[1.4]">
              Follow Us
            </h4>
            <div className="social-links flex gap-[15px]">
              <a
                href="#"
                className="text-[#E5E7EB] text-[18px] hover:text-[#D4AF37] transition-colors duration-300 ease-in-out"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-[#E5E7EB] text-[18px] hover:text-[#D4AF37] transition-colors duration-300 ease-in-out"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-[#E5E7EB] text-[18px] hover:text-[#D4AF37] transition-colors duration-300 ease-in-out"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-[#E5E7EB] text-[18px] hover:text-[#D4AF37] transition-colors duration-300 ease-in-out"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright text-center text-[14px] text-[#E5E7EB] border-t border-[rgba(255,255,255,0.1)] pt-5 leading-[1.6]">
          <p>© 2025 TechVers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}