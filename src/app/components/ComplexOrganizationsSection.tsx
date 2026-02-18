import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, TrendingDown, Target } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ComplexOrganizationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

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

    // Animate bottom text
    if (bottomRef.current) {
      gsap.fromTo(
        bottomRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.3,
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
      text: "Multiple departments, systems, and owners of data",
      icon: Building2,
    },
    {
      text: "Changing demand, pricing pressure, and supply constraints",
      icon: TrendingDown,
    },
    {
      text: "High accountability decisions with real financial impact",
      icon: Target,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="inline-block bg-[#238ef8] border border-[#238ef8] rounded-full px-4 py-1.5 text-xs font-semibold text-white tracking-wider">
                Built for Complex Organizations
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
              Designed for real operations{" "}
              <span className="text-[#238ef8]">
                — not demo data.
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fennix is built for the reality of modern businesses:
            </p>
          </div>

          {/* Features Cards Grid */}
          <div ref={featuresRef} className="grid md:grid-cols-3 gap-2 mb-6">
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
                    <p className="text-sm text-gray-800 leading-relaxed flex-1">
                      {feature.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Text */}
          <div ref={bottomRef} className="text-center">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                Fennix doesn't require you to replace your tools. It removes the friction between
              </p>
              <strong className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed">data → insight → decision → action</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplexOrganizationsSection;

