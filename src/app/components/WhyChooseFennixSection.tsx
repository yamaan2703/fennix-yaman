import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseFennixSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);

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

    // Animate closing statement
    if (closingRef.current) {
      gsap.fromTo(
        closingRef.current,
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
  }, []);

  const features = [
    "AI decision maker for executives, not just analysts",
    "Connects internal performance with external market reality",
    "Explains cause, impact, and action — not just metrics",
    "Turns critical answers into live dashboards for ongoing tracking",
    "Enterprise security, governance, and deployment flexibility",
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
                Why Choose Fennix Enterprise decision-making platform
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
              Built for Market leaders who{" "}
              <span className="text-[#238ef8]">
                can't afford blind spots.
              </span>
            </h2>
          </div>

          {/* Features Cards Grid */}
          <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#238ef8]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#238ef8]/10 flex items-center justify-center group-hover:bg-[#238ef8]/20 transition-colors duration-300">
                    <Check className="w-5 h-5 text-[#238ef8]" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-800 leading-relaxed flex-1">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div ref={closingRef} className="text-center">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl text-gray-900 font-semibold mb-2">
                Most platforms report data.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-900 font-semibold mb-4">
                Fennix explains the business, Check from anywhere, Phone, Tablet & Desktop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseFennixSection;

