import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DollarSign,
  TrendingUp,
  Megaphone,
  Settings,
  Shield,
  Key,
  Lock,
  Server,
  ArrowRight,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const MergedSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const rolesRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate roles
    const roles = rolesRef.current?.children;
    if (roles) {
      gsap.fromTo(
        roles,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
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
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }

    // Animate CTA content
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  const leadershipViews = [
    { role: "Finance", views: "margin, cash flow, cost pressure, financial risk", icon: DollarSign },
    { role: "Sales", views: "pipeline, win rates, pricing pressure, market movement", icon: TrendingUp },
    { role: "Marketing", views: "ROI, demand drivers, attribution signals, sentiment", icon: Megaphone },
    { role: "Operations", views: "throughput, inventory risk, bottlenecks, delays", icon: Settings },
  ];

  const securityFeatures = [
    { title: "Explainable insights", description: "(drivers and contributing factors)", icon: Shield },
    { title: "Role-based access", description: "(only what you're allowed to see)", icon: Key },
    { title: "Audit trails", description: "(what changed, when, and why)", icon: Lock },
    { title: "Encryption", description: "in transit and at rest", icon: Server },
    { title: "Deployment options", description: "including private/on-prem", icon: Rocket },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="who-its-for"
      className="relative overflow-hidden"
    >
      {/* Who It's For Section */}
      <div className="py-12 sm:py-16 md:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start bg-gray-100 p-7 rounded-2xl">
              {/* Left side - Header */}
              <div className="lg:sticky lg:top-24">
                <div className="inline-block mb-4">
                  <span className="inline-block bg-[#238ef8] border border-[#238ef8] rounded-full px-4 py-1.5 text-xs font-semibold text-white tracking-wider">
                    Leadership-Aligned Views
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
                  One platform.{" "}
                  <span className="text-[#238ef8]">
                    Multiple perspectives.
                  </span>
                </h2>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed">
                  One shared truth, tailored to how each business leader operates.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mt-4">
                  Designed for CEOs, COOs, CFOs, Heads of Operations, and VPs.
                </p>
              </div>

              {/* Right side - Leadership Views Cards in 2x2 Grid */}
              <div ref={rolesRef} className="grid grid-cols-2 gap-1">
                {leadershipViews.map((view, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#238ef8]/30 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="mb-3">
                      <div className="w-12 h-12 rounded-lg bg-[#238ef8]/10 flex items-center justify-center group-hover:bg-[#238ef8]/20 transition-colors duration-300">
                        <view.icon className="w-6 h-6 text-[#238ef8]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 leading-tight">
                        {view.role}:
                      </h3>
                      <p className="text-xs sm:text-xs text-gray-600 leading-relaxed flex-1">
                        {view.views}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="py-12 sm:py-16 md:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <span className="inline-block bg-[#238ef8] border border-[#238ef8] rounded-full px-4 py-1.5 text-xs font-semibold text-white tracking-wider">
                  Decisions You Can Defend
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
                Explainable, Auditable,{" "}
                <span className="text-[#238ef8]">
                  and Governed.
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Leadership decisions need more than an answer; they need confidence.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
                Fennix supports enterprise industries' decision standards with:
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
                Fennix continuously crawls enterprise systems. Your data stays safe, governed, and under your control.
              </p>
            </div>

            {/* Features grid - 4 cards in a row, all same size */}
            <div className="flex justify-center">
              <div className="p-7 rounded-2xl max-w-7xl w-full">
                <div
                  ref={featuresRef}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2"
                >
                  {securityFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className="group bg-gray-100 rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#238ef8]/30 transition-all duration-300 h-full flex flex-col"
                      >
                        {/* Icon */}
                        <div className="mb-3">
                          <div className="w-12 h-12 rounded-lg bg-[#238ef8]/10 flex items-center justify-center group-hover:bg-[#238ef8]/20 transition-colors duration-300">
                            <Icon className="w-6 h-6 text-[#238ef8]" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 leading-tight">
                            {feature.title}
                          </h3>
                          <p className="text-xs sm:text-xs text-gray-600 leading-relaxed flex-1">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security & Governance Section */}
      <div className="py-12 sm:py-16 md:py-20 relative z-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <span className="inline-block bg-[#238ef8] border border-[#238ef8] rounded-full px-4 py-1.5 text-xs font-semibold text-white tracking-wider">
                  Security & Governance
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
                Enterprise-ready{" "}
                <span className="text-[#238ef8]">
                  by design.
                </span>
              </h2>
            </div>

            {/* Security Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              <div className="group bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#238ef8]/30 transition-all duration-300">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 leading-tight">
                  Role-based permissions
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  across teams and functions
                </p>
              </div>
              <div className="group bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#238ef8]/30 transition-all duration-300">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 leading-tight">
                  Audit logging
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  for accountability and compliance
                </p>
              </div>
              <div className="group bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#238ef8]/30 transition-all duration-300">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 leading-tight">
                  Encryption everywhere
                </h3>
              </div>
              <div className="group bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#238ef8]/30 transition-all duration-300">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 leading-tight">
                  Private/on-prem deployment options
                </h3>
              </div>
              <div className="group bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#238ef8]/30 transition-all duration-300 sm:col-span-2 lg:col-span-4">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 leading-tight">
                  Web and mobile access without compromising security
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default MergedSection;
