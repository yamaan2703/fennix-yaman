"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ChevronRight } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const [activeSection, setActiveSection] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentHash(window.location.hash);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    // Animate navbar on mount
    gsap.fromTo(
      ".navbar",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Lock body scroll when mobile menu is open (only on mobile)
  useEffect(() => {
    // Only apply on mobile screens (md breakpoint is 768px)
    const isMobile = window.innerWidth < 768;

    if (isMobileMenuOpen && isMobile) {
      // Lock scroll on mobile when menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Ensure scroll is enabled when menu is closed or on desktop
      document.body.style.overflow = "";
    }

    // Cleanup: always restore scroll on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#", isSection: true },
    { name: "How It Works", href: "#how-it-works", isSection: true },
    { name: "Features", href: "#capabilities", isSection: true },
    { name: "Who It's For", href: "#who-its-for", isSection: true },
    { name: "Industries", href: "#industries", isSection: true },
    { name: "About", href: "#about", isSection: true },
    { name: "Contact", href: "/contact", isSection: false },
  ];

  // Intersection Observer for scroll-based active link detection
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = [
      { id: "how-it-works", href: "#how-it-works" },
      { id: "capabilities", href: "#capabilities" },
      { id: "who-its-for", href: "#who-its-for" },
      { id: "industries", href: "#industries" },
      { id: "about", href: "#about" },
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Section is active when it's in the top 40% of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the section with the highest intersection ratio and closest to top
      let mostVisible: IntersectionObserverEntry | null = null;
      let highestRatio = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Prioritize sections that are more visible and closer to the top
          const ratio = entry.intersectionRatio;
          const distanceFromTop = entry.boundingClientRect.top;

          if (
            ratio > highestRatio ||
            (ratio === highestRatio &&
              distanceFromTop <
              (mostVisible?.boundingClientRect.top || Infinity))
          ) {
            highestRatio = ratio;
            mostVisible = entry;
          }
        }
      });

      if (mostVisible) {
        const sectionId = `#${(mostVisible as IntersectionObserverEntry).target.id}`;
        setActiveSection(sectionId);
        // Update hash without scrolling
        window.history.replaceState(null, "", sectionId);
        setCurrentHash(sectionId);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Handle scroll to detect when at top (home section)
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("#");
        window.history.replaceState(null, "", "/");
        setCurrentHash("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Set initial active section based on scroll position
    const checkInitialSection = () => {
      if (window.scrollY < 100) {
        setActiveSection("#");
        setCurrentHash("");
        return;
      }
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].href);
          setCurrentHash(sections[i].href);
          break;
        }
      }
    };

    // Check after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(checkInitialSection, 100);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  const handleNavClick = (href: string, isSection: boolean) => {
    setIsMobileMenuOpen(false);

    if (isSection) {
      // Handle home link (scroll to top)
      if (href === "#") {
        if (pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.history.pushState(null, "", "/");
          setCurrentHash("");
          setActiveSection("");
        } else {
          router.push("/");
        }
        return;
      }

      // If we're on home page, just scroll
      if (pathname === "/") {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Update hash for active link detection
          window.history.pushState(null, "", href);
          setCurrentHash(href);
        }
      } else {
        // If we're on another page, navigate to home then scroll
        router.push("/");
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            // Update hash for active link detection
            window.history.pushState(null, "", href);
            setCurrentHash(href);
          }
        }, 100);
      }
    } else {
      // Navigate to page
      router.push(href);
    }
  };

  const isLinkActive = (href: string, isSection: boolean) => {
    if (isSection) {
      // For home link, check if we're at top of page
      if (href === "#") {
        return pathname === "/" && (activeSection === "#" || (currentHash === "" && activeSection === ""));
      }
      // For section links, check if we're on home page and the section is active (from scroll or hash)
      return (
        pathname === "/" &&
        (activeSection === href || currentHash === href)
      );
    } else {
      // For page links, check if current path matches
      return pathname === href;
    }
  };

  return (
    <>
      {/* Mobile Menu - Backdrop Blur */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-md z-[9998] transition-opacity duration-300" />
      )}

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-[9999] transition-transform duration-300 ease-out will-change-transform ${isMobileMenuOpen
          ? "translate-x-0 pointer-events-auto"
          : "translate-x-full pointer-events-none"
          }`}
        style={{
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? "visible" : "hidden",
        }}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 h-14 border-b border-gray-200 bg-white">
          <button
            onClick={() => router.push("/")}
            className="flex items-center flex-shrink-0"
          >
            <img
              src="/images/Fennix (2).png"
              alt="Fennix"
              className="h-6 w-auto"
            />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 -mr-2"
            aria-label="Close menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className="w-full h-[2px] bg-gray-900 rounded-full rotate-45 translate-y-[9px]" />
              <span className="w-full h-[2px] bg-gray-900 rounded-full -rotate-45 -translate-y-[9px]" />
            </div>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="overflow-y-auto h-[calc(100vh-3.5rem)] px-4 sm:px-6 py-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => {
              const isActive = isLinkActive(link.href, link.isSection);
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href, link.isSection)}
                  className={`transition-all duration-300 font-medium text-left px-4 py-3.5 rounded-xl text-base cursor-pointer ${isActive
                    ? "text-black bg-gray-100"
                    : "text-gray-700 hover:text-black hover:bg-gray-50"
                    }`}
                  style={{
                    animationDelay: isMobileMenuOpen
                      ? `${index * 50}ms`
                      : "0ms",
                  }}
                >
                  {link.name}
                </button>
              );
            })}
            <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-gray-200">
              <button
                onClick={() => handleNavClick("#cta", true)}
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium text-left px-4 py-3.5 rounded-xl hover:bg-gray-50 cursor-pointer"
              >
                Login
              </button>
              <button
                onClick={() => handleNavClick("#cta", true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-900 text-white rounded-full font-semibold text-base hover:bg-gray-800 transition-all duration-200 cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`px-4 sm:px-6 md:px-8 navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-white border-b border-gray-200" : "bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between h-14">
          {/* Logo - Left */}
          <button
            onClick={() => router.push("/")}
            className="flex items-center flex-shrink-0 z-10 cursor-pointer"
          >
            <img
              src="/images/Fennix (2).png"
              alt="Fennix"
              className="h-6 w-auto"
            />
          </button>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href, link.isSection);
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href, link.isSection)}
                  className={`transition-colors duration-200 font-medium text-sm cursor-pointer ${isActive
                    ? "text-[#238ef8]"
                    : "text-gray-900 hover:text-gray-600"
                    }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* CTA Buttons - Right */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => handleNavClick("#cta", true)}
              className="px-5 py-2 bg-gray-100 text-gray-900 rounded-full font-medium text-sm hover:bg-gray-200 transition-all duration-200 cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => handleNavClick("#cta", true)}
              className="px-5 py-2 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-all duration-200 cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-[10000] p-2 -mr-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-[2px] bg-gray-900 rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen
                  ? "rotate-45 translate-y-[9px]"
                  : "translate-y-0"
                  }`}
              />
              <span
                className={`w-full h-[2px] bg-gray-900 rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen
                  ? "opacity-0 scale-0"
                  : "opacity-100 scale-100"
                  }`}
              />
              <span
                className={`w-full h-[2px] bg-gray-900 rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen
                  ? "-rotate-45 -translate-y-[9px]"
                  : "translate-y-0"
                  }`}
              />
            </div>
          </button>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
