import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Key, Cloud, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TrustSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  const features = [
    { title: "Secure data handling", icon: Shield },
    { title: "Controlled access permissions", icon: Key },
    { title: "Scalable cloud infrastructure", icon: Cloud },
    { title: "Reliable, real-time processing", icon: Zap },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "10px 10px",
      }}
    >
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-700" />
            <span className="text-gray-400 font-medium text-sm tracking-wider uppercase">
              Trust & Reliability
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-700" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Enterprise-Ready{" "}
            <span className="text-[#238ef8]">
              by Design
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
            Your data remains protected, accurate, and under your control.
          </p>

          {/* Features grid */}
          <div
            ref={featuresRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#238ef8]/30 to-cyan-400/30 blur-xl" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    <div className="w-14 h-14 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#238ef8]" strokeWidth={2} />
                    </div>
                    <p className="text-white font-semibold text-sm tracking-wide text-center max-w-[140px] break-words leading-relaxed">
                      {feature.title}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;