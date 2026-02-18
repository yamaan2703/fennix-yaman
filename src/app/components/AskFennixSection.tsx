"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AskFennixSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const questionsRef = useRef<HTMLDivElement>(null);

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

    // Animate questions
    const questions = questionsRef.current?.children;
    if (questions) {
      gsap.fromTo(
        questions,
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

  const questions = [
    "Why is our market share dropping?",
    "What risks could impact revenue in the next 90 days?",
    "Why is cash flow tightening despite higher sales?",
    "What's causing delays across our supply chain?",
    "Which warehouse zones consistently underperform and why?",
    "Which SKUs are at risk of stockouts in the next 7–14 days?",
    "Where are we overstocked and tying up working capital?",
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
                Ask Fennix Anything
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
              Natural questions.{" "}
              <span className="text-[#238ef8]">
                Executive answers.
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Examples leaders ask:
            </p>
          </div>

          {/* Questions Grid Layout - 2-2-2-1 */}
          <div ref={questionsRef} className="flex flex-col items-center gap-2">
            {/* First 2 cards */}
            <div className="flex flex-wrap justify-center gap-2 w-full max-w-4xl">
              {questions.slice(0, 2).map((question, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#238ef8]/30 transition-all duration-300 w-full sm:flex-1 sm:min-w-[280px] sm:max-w-[48%]"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#238ef8]/10 flex items-center justify-center group-hover:bg-[#238ef8]/20 transition-colors duration-300">
                      <MessageSquare className="w-5 h-5 text-[#238ef8]" />
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-gray-900 flex-1 leading-relaxed">
                      {question}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second 2 cards */}
            <div className="flex flex-wrap justify-center gap-2 w-full max-w-4xl">
              {questions.slice(2, 4).map((question, index) => (
                <div
                  key={index + 2}
                  className="group bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#238ef8]/30 transition-all duration-300 w-full sm:flex-1 sm:min-w-[280px] sm:max-w-[48%]"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#238ef8]/10 flex items-center justify-center group-hover:bg-[#238ef8]/20 transition-colors duration-300">
                      <MessageSquare className="w-5 h-5 text-[#238ef8]" />
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-gray-900 flex-1 leading-relaxed">
                      {question}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Third 2 cards */}
            <div className="flex flex-wrap justify-center gap-2 w-full max-w-4xl">
              {questions.slice(4, 6).map((question, index) => (
                <div
                  key={index + 4}
                  className="group bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#238ef8]/30 transition-all duration-300 w-full sm:flex-1 sm:min-w-[280px] sm:max-w-[48%]"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#238ef8]/10 flex items-center justify-center group-hover:bg-[#238ef8]/20 transition-colors duration-300">
                      <MessageSquare className="w-5 h-5 text-[#238ef8]" />
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-gray-900 flex-1 leading-relaxed">
                      {question}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Last 1 card centered */}
            <div className="flex justify-center w-full max-w-4xl">
              <div className="group bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#238ef8]/30 transition-all duration-300 w-full sm:max-w-[48%]">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#238ef8]/10 flex items-center justify-center group-hover:bg-[#238ef8]/20 transition-colors duration-300">
                    <MessageSquare className="w-5 h-5 text-[#238ef8]" />
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-gray-900 flex-1 leading-relaxed">
                    {questions[6]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskFennixSection;

