"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const highlightSpanRef = useRef<HTMLSpanElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const ctaButton1Ref = useRef<HTMLButtonElement>(null);
  const ctaButton2Ref = useRef<HTMLButtonElement>(null);
  const waitlistTextRef = useRef<HTMLParagraphElement>(null);
  const waitlistButtonRef = useRef<HTMLButtonElement>(null);
  const waitlistCountRef = useRef<HTMLSpanElement>(null);
  const router = useRouter();

  // Get initial count from localStorage or default to 15250
  const getInitialCount = () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("waitlistCount");
      return stored ? parseInt(stored, 10) : 15250;
    }
    return 15250;
  };
  const [waitlistCount, setWaitlistCount] = useState<number>(getInitialCount());

  // Fetch waitlist count from API on component mount
  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        const response = await fetch(
          "https://go-insights-be-production.up.railway.app/waitlist/count",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          if (data.success && data.count !== undefined) {
            setWaitlistCount(data.count);
            if (typeof window !== "undefined") {
              localStorage.setItem("waitlistCount", data.count.toString());
            }
          }
        }
      } catch (error) {
        console.error("Failed to fetch waitlist count:", error);
      }
    };

    fetchWaitlistCount();
  }, []);

  // Listen for count updates from other components
  useEffect(() => {
    const handleCountUpdate = (event: CustomEvent) => {
      if (event.detail?.count !== undefined) {
        setWaitlistCount(event.detail.count);
      }
    };

    window.addEventListener("waitlistCountUpdated", handleCountUpdate as EventListener);
    return () => {
      window.removeEventListener("waitlistCountUpdated", handleCountUpdate as EventListener);
    };
  }, []);

  // Animation on scroll
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Set initial state - hide all elements
    gsap.set([headingRef.current, highlightSpanRef.current, subheadingRef.current, descRef.current, ctaButton1Ref.current, ctaButton2Ref.current, waitlistTextRef.current, waitlistButtonRef.current], {
      opacity: 0,
      y: 50,
    });

    // Create a timeline for staggered animation
    // Trigger when user scrolls down (not at top left of viewport)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: () => `top ${window.innerHeight * 0.4}px`,
        end: "bottom top",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });

    // Animate heading
    if (headingRef.current) {
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });
    }

    // Animate highlight span
    if (highlightSpanRef.current) {
      tl.to(highlightSpanRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.8");
    }

    // Animate subheading
    if (subheadingRef.current) {
      tl.to(subheadingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.7");
    }

    // Animate description
    if (descRef.current) {
      tl.to(descRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.6");
    }

    // Animate CTA Button 1
    if (ctaButton1Ref.current) {
      tl.to(ctaButton1Ref.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5");
    }

    // Animate CTA Button 2
    if (ctaButton2Ref.current) {
      tl.to(ctaButton2Ref.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.4");
    }

    // Animate waitlist text
    if (waitlistTextRef.current) {
      tl.to(waitlistTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5");
    }

    // Animate waitlist button
    if (waitlistButtonRef.current) {
      tl.to(waitlistButtonRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.4");
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars?.trigger === section) {
          trigger.kill();
        }
      });
      tl.kill();
    };
  }, []);

  // Hero Section
  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Headline */}
          <div className="max-w-5xl mx-auto">
            <h1
              ref={headingRef}
              className="text-3xl sm:text-5xl md:text-6xl font-semibold text-gray-900 mb-3 leading-[1.1] tracking-tight"
            >
              AI-Powered{" "}
              <span ref={highlightSpanRef} className="text-[#238ef8] inline-block">
                Decision Intelligence
              </span>{" "}
              Platform For Businesses, Analytics & Actions
            </h1>
          </div>

          {/* Sub-headline */}
          <p
            ref={subheadingRef}
            className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-4 max-w-3xl mx-auto font-medium"
          >
            Turn complex business insights into clear decision making in real time.
          </p>

          {/* Description */}
          <p
            ref={descRef}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            Fennix connects IT, finance, operations, sales, marketing, and external market signals into a single AI decision Intelligence layer. Turning them into real-time answers and actionable insights for leaders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-16">
            <button
              ref={ctaButton1Ref}
              onClick={() => router.push("/waitlist")}
              className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg cursor-pointer"
            >
              14 Days Free Trial
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              ref={ctaButton2Ref}
              onClick={() => router.push("/waitlist")}
              className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-transparent text-gray-800 rounded-full font-medium text-sm border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg cursor-pointer"
            >
              Watch Demo
            </button>
          </div>

          {/* Waitlist Section */}
          <div className="flex flex-col items-center gap-4 md:gap-5">
            <p
              ref={waitlistTextRef}
              className="text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed"
            >
              Join{" "}
              <span
                ref={waitlistCountRef}
                className="font-bold text-[#238ef8] inline-block"
              >
                {waitlistCount.toLocaleString()}
              </span>{" "}
              others on the waitlist.
            </p>
            <button
              ref={waitlistButtonRef}
              onClick={() => router.push("/waitlist")}
              className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg cursor-pointer"
            >
              Join now
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
