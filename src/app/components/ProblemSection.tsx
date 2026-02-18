import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingDown, DollarSign, AlertTriangle, Users, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ProblemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const problemsRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 40 },
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

    const problems = problemsRef.current?.children;
    if (problems) {
      gsap.fromTo(
        problems,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: problemsRef.current,
            start: "top 80%",
          },
        }
      );
    }

    gsap.fromTo(
      solutionRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: solutionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  const problems = [
    {
      text: "Slower growth",
      description:
        "Opportunities are missed because critical insights are buried in disconnected systems. Growth stalls when you can't see the full picture of what's working and what's not.",
      icon: TrendingDown,
    },
    {
      text: "Squeezed margins",
      description:
        "Cost pressures and inefficiencies go unnoticed until they've already impacted profitability. Without real-time visibility, margin erosion happens silently.",
      icon: DollarSign,
    },
    {
      text: "Operational bottlenecks",
      description:
        "Delays and constraints across supply chains, production, and operations remain invisible until they cause significant disruption.",
      icon: AlertTriangle,
    },
    {
      text: "Customer churn",
      description:
        "Warning signs of customer dissatisfaction are scattered across multiple systems, making it impossible to act before it's too late.",
      icon: Users,
    },
    {
      text: "Decisions made too late",
      description:
        "By the time you have the information you need, the opportunity has passed or the problem has escalated beyond easy fixes.",
      icon: Clock,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start bg-gray-100 p-7 rounded-2xl">
            {/* Left Side - Main Problem Statement */}
            <div className="lg:sticky lg:top-24">
              {/* Badge */}
              <div className="inline-block mb-3">
                <span className="inline-block bg-[#238ef8] border border-[#238ef8] rounded-full px-4 py-1.5 text-xs font-semibold text-white  tracking-wider">
                  The Problem
                </span>
              </div>

              {/* Main Heading */}
              <h2
                ref={headingRef}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight"
              >
                Your business has the data.{" "}
                <span className="text-[#238ef8]">
                  What it lacks is clarity.
                </span>
              </h2>

              {/* Description */}
              <p
                ref={descRef}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed"
              >
                Companies with multiple dashboards waste 30% of weekly decision-making time. The result isn't insightful. It's noise, that's why Fennix is built for it.
              </p>
            </div>

            {/* Right Side - Problem Cards (First 3 only) */}
            <div ref={problemsRef} className="space-y-2">
              {problems.slice(0, 3).map((problem, index) => {
                const IconComponent = problem.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#238ef8]/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-[#238ef8]" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1.5 leading-tight">
                          {problem.text}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Remaining 2 Cards Below */}
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {problems.slice(3, 5).map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <div
                  key={index + 3}
                  className="bg-white rounded-xl p-4 md:p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#238ef8]/10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-[#238ef8]" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1.5 leading-tight">
                        {problem.text}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Solution */}
          <div ref={solutionRef} className="text-center mt-12">
            <div className="inline-block bg-gray-50 border border-gray-200 rounded-full px-6 py-3">
              <p className="text-base sm:text-lg text-gray-700 font-medium">
                What gets missed doesn't stay hidden, it shows up as:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
