import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link2, TrendingUp, MessageSquare, BarChart3 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate cards
    const steps = stepsRef.current?.children;
    if (steps) {
      gsap.fromTo(
        steps,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        }
      );
    }

    // Animate image
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
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

  const steps = [
    {
      number: "1",
      title: "Connect your ecosystem",
      description:
        "Integrate ERP, CRM, accounting, inventory, HR, databases, and external sources, including market and customer signals.",
      icon: Link2,
    },
    {
      number: "2",
      title: "Continuously analyze",
      description:
        "Fennix AI detects drivers, bottlenecks, risks, anomalies, and performance shifts across the business in context, not in silos.",
      icon: TrendingUp,
    },
    {
      number: "3",
      title: "Surface decisions",
      description:
        "Ask questions in natural language and get structured answers with quantified impact and recommended actions.",
      icon: MessageSquare,
    },
    {
      number: "4",
      title: "Track what matters",
      description:
        "Turn critical answers into live dashboards that update automatically.",
      icon: BarChart3,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="mb-4 max-w-xl mx-auto">
              <span className="bg-[#238ef8] border border-[#238ef8] rounded-full px-4 py-1.5 text-xs font-semibold text-white tracking-wider">
                How It Works
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
              Connect → Analyze → Decide → Track
            </h2>
          </div>

          {/* Grid Layout - Cards and Image */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - 4 Cards in 2x2 Flex Grid */}
            <div ref={stepsRef} className="grid grid-cols-2 gap-1">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={index}
                    className="group bg-gray-100 rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#238ef8]/30 transition-all duration-300 "
                  >


                    {/* Icon */}
                    <div className="mb-3">
                      <div className="w-12 h-12 rounded-lg bg-[#238ef8]/10 flex items-center justify-center group-hover:bg-[#238ef8]/20 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-[#238ef8]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-xs text-gray-600 leading-relaxed flex-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Side - Mockup Image */}
            <div ref={imageRef} className="relative flex justify-center items-center lg:sticky lg:top-24">
              <div className="relative w-full max-w-2xl mx-auto">
                <div className="relative">
                  <img
                    src="/images/mockup.png"
                    alt="Fennix Dashboard Template"
                    className="w-full h-auto object-contain object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
