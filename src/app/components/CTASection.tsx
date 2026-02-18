import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-4">
            <span className="inline-block bg-[#238ef8] border border-[#238ef8] rounded-full px-4 py-1.5 text-xs font-semibold text-white tracking-wider">
              14 Days Free Demo Trial
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
            Your business has always been talking.{" "}
            <span className="text-[#238ef8]">
              Now you can finally listen
            </span>{" "}
            to fennix decision making with a free 14-day demo trial.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("#cta")}
              className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg cursor-pointer"
            >
              Get 14 Days Free Demo
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("#cta")}
              className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-transparent text-gray-800 rounded-full font-medium text-sm border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg cursor-pointer"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
