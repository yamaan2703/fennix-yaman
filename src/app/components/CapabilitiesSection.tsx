"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Brain,
  Network,
  TrendingUp,
  BarChart3,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CapabilitiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

    // Animate cards
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.fromTo(
        cards,
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

  const capabilities = [
    {
      icon: Brain,
      title: "AI Decision Intelligence",
      description:
        "Move beyond \"what happened\" to actionable clarity, with drivers, impact, and next steps.",
    },
    {
      icon: Network,
      title: "Cross-Functional Intelligence",
      description:
        "Fennix's decision intelligence platform connects all internal sources including, finance, operations, sales, marketing, and customer data to uncover real bottlenecks across the organization.",
    },
    {
      icon: TrendingUp,
      title: "Market & Customer Signals",
      description:
        "Monitor social sentiments, reviews, competitor activity, and market shifts and act before they impact revenue.",
    },
    {
      icon: BarChart3,
      title: "From Answers to Live Dashboards",
      description:
        "When an insight matters, pin it as a live view. Dashboards update continuously, without rebuilding reports.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="inline-block bg-[#238ef8] border border-[#238ef8] rounded-full px-4 py-1.5 text-xs font-semibold text-white tracking-wider">
                Core Capabilities
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
              Key Capabilities Driving Adaptive{" "}
              <span className="text-[#238ef8]">
                Decision Intelligence
              </span>
            </h2>
          </div>

          {/* Capabilities Grid */}
          <div ref={cardsRef} className="grid md:grid-cols-2 gap-2">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-100 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#238ef8]/30 transition-all duration-300"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#238ef8]/10 flex items-center justify-center group-hover:bg-[#238ef8]/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-[#238ef8]" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 leading-tight">
                    {capability.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {capability.description}
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

export default CapabilitiesSection;
