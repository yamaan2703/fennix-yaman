import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DollarSign,
  Heart,
  ShoppingCart,
  Factory,
  Truck,
  Cloud,
  Building2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const IndustriesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate header
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
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

    // Animate industries
    const industries = industriesRef.current?.children;
    if (industries) {
      gsap.fromTo(
        industries,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars?.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  const industries = [
    {
      name: "Financial Services",
      icon: DollarSign,
    },
    {
      name: "Healthcare",
      icon: Heart,
    },
    {
      name: "Retail & E-commerce",
      icon: ShoppingCart,
    },
    {
      name: "Manufacturing",
      icon: Factory,
    },
    {
      name: "Logistics & Supply Chain",
      icon: Truck,
    },
    {
      name: "SaaS & Technology",
      icon: Cloud,
    },
    {
      name: "Enterprise Services",
      icon: Building2,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="inline-block bg-[#238ef8] border border-[#238ef8] rounded-full px-4 py-1.5 text-xs font-semibold text-white tracking-wider">
                Industries We Serve
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
              Industries We Serve
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fennix AI Decision Intelligence software supports organizations where performance, risk, and execution must stay aligned:
            </p>
          </div>

          {/* Industries Grid */}
          <div ref={industriesRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-100 rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#238ef8]/30 transition-all duration-300 h-full flex flex-col items-center justify-center text-center"
                >
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-lg bg-[#238ef8]/10 flex items-center justify-center mb-3 group-hover:bg-[#238ef8]/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-[#238ef8]" />
                  </div>

                  {/* Industry Name */}
                  <p className="text-sm font-semibold text-gray-900 leading-tight">
                    {industry.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

