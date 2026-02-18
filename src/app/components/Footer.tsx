"use client";

import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const productLinks = [
    { name: "Features", href: "#capabilities" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Industries", href: "#industries" },
    { name: "Pricing", href: "#pricing" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Who It's For", href: "#who-its-for" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];


  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer className="relative py-8 overflow-hidden border-t border-gray-200 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-4">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <a href="/" className="inline-block mb-6 cursor-pointer">
                <img
                  src="/images/Fennix (2).png"
                  alt="Fennix"
                  className="h-8 w-auto"
                />
              </a>

              <p className="text-sm text-gray-700 mb-8 leading-relaxed max-w-sm">
                Real-time intelligence platform that helps businesses make smarter, data-driven decisions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#238ef8]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#238ef8]" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    30 N Gould St Ste R, Sheridan, WY 82801 Wyoming United State
                  </p>
                </div>
                <a
                  href="tel:+15122344807"
                  className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#238ef8] transition-colors duration-200 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#238ef8]/10 flex items-center justify-center group-hover:bg-[#238ef8]/20 transition-colors duration-200">
                    <Phone className="w-4 h-4 text-[#238ef8]" />
                  </div>
                  <span>+15122344807</span>
                </a>
                <a
                  href="mailto:info@fennix.com"
                  className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#238ef8] transition-colors duration-200 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#238ef8]/10 flex items-center justify-center group-hover:bg-[#238ef8]/20 transition-colors duration-200">
                    <Mail className="w-4 h-4 text-[#238ef8]" />
                  </div>
                  <span>info@fennix.com</span>
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-5 text-base">
                Product
              </h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-gray-700 hover:text-[#238ef8] transition-colors duration-200 text-left cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-5 text-base">
                Company
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("#") ? (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-sm text-gray-700 hover:text-[#238ef8] transition-colors duration-200 text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-700 hover:text-[#238ef8] transition-colors duration-200 cursor-pointer"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Legal Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-5 text-base">
                Legal
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-700 hover:text-[#238ef8] transition-colors duration-200 cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
