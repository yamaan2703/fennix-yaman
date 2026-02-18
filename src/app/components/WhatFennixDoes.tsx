import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, TrendingUp, DollarSign, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WhatFennixDoes = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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

    // Animate features
    const features = featuresRef.current?.children;
    if (features) {
      gsap.fromTo(
        features,
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

  const features = [
    {
      title: "What is happening",
      description: "Real-time insights into your business performance",
      icon: Eye,
    },
    {
      title: "Why it's happening",
      description: "Understand the drivers behind the numbers",
      icon: TrendingUp,
    },
    {
      title: "What it will cost",
      description: "Projected impact on your bottom line",
      icon: DollarSign,
    },
    {
      title: "What to do next",
      description: "Actionable recommendations for your team",
      icon: ArrowRight,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start bg-[#238ef8]/5 border border-[#238ef8]/20 p-8 rounded-2xl">
            {/* Left Side - Header */}
            <div ref={headerRef} className="lg:sticky lg:top-24">
              <div className="inline-block mb-4">
                <span className="inline-block bg-[#238ef8] border border-[#238ef8] rounded-full px-4 py-1.5 text-xs font-semibold text-white tracking-wider">
                  All Your Tools, One Fennix Solution
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
                One decision layer.{" "}
                <span className="text-[#238ef8]">
                  One source of truth.
                </span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed">
                Fennix sits above your existing systems and connects Marketing, Financial, Revenue, Sales, Supply chain, logistics and IT into a unified artificial decision intelligence software.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed mt-4">
                Instead of static reporting and analytics, Fennix explains:
              </p>
            </div>

            {/* Right Side - Features */}
            <div ref={featuresRef} className="space-y-3">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#238ef8]/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#238ef8]/10 flex items-center justify-center group-hover:bg-[#238ef8]/20 transition-colors duration-300">
                        <IconComponent className="w-5 h-5 text-[#238ef8]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1.5 leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatFennixDoes;
