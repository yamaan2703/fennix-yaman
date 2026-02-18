import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, ExternalLink, Building2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FinnovatechSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const statementRef = useRef<HTMLDivElement>(null);

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

        // Animate content
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                    },
                }
            );
        }

        // Animate card
        if (cardRef.current) {
            gsap.fromTo(
                cardRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                    },
                }
            );
        }

        // Animate statement
        if (statementRef.current) {
            gsap.fromTo(
                statementRef.current,
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

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Two Column Layout */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left Side - Main Content */}
                        <div ref={contentRef} className="space-y-3">
                            {/* Badge */}
                            <div className="inline-block">
                                <span className="inline-block bg-[#238ef8] border border-[#238ef8] rounded-full px-4 py-1.5 text-xs font-semibold text-white tracking-wider">
                                    About Us
                                </span>
                            </div>

                            {/* Main Title */}
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                                Built by{" "}
                                <span className="text-[#238ef8]">
                                    Finnovatech LLC
                                </span>
                            </h2>

                            {/* Paragraphs */}
                            <div className="space-y-4">
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    Fennix is a real-time intelligence platform developed by <strong className="text-gray-900">Finnovatech LLC</strong>, a technology company based in Wyoming, founded in 2025.
                                </p>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    Finnovatech focuses on building practical, scalable digital solutions
                                    that help businesses operate more efficiently. Fennix reflects this vision
                                    by addressing a growing operational challenge — making smarter, data-driven
                                    decisions in real time.
                                </p>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    Designed with a business-first approach, Fennix combines AI-powered
                                    intelligence, real-time analytics, and enterprise-grade security.
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Company Info Card */}
                        <div ref={cardRef} className="lg:sticky lg:top-24">
                            <div className="bg-gray-100 rounded-2xl p-8 border border-gray-200 shadow-lg">
                                {/* Logo and Tagline */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-3 mb-2">

                                        <img
                                            src="/images/finnovate.png"
                                            alt="Finnovatech"
                                            className="h-7 w-auto"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Where <span className="text-[#238ef8] font-medium">technology</span> meets <span className="text-[#238ef8] font-medium">innovation</span>
                                    </p>
                                </div>

                                {/* Location and Founded */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-[#238ef8] flex-shrink-0" />
                                        <span className="text-sm text-gray-700">
                                            Wyoming, United States
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-5 h-5 text-[#238ef8] flex-shrink-0" />
                                        <span className="text-sm text-gray-700">
                                            Founded 2025
                                        </span>
                                    </div>
                                </div>

                                {/* Mission Statement Box */}
                                <div ref={statementRef} className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
                                    <p className="text-sm text-gray-700 leading-relaxed italic">
                                        "Building practical, scalable digital solutions that help businesses
                                        operate more efficiently."
                                    </p>
                                </div>

                                {/* CTA Link */}
                                <a
                                    href="https://finnovate.com.pk/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-[#238ef8] hover:text-[#1e7cd8] transition-colors duration-200"
                                >
                                    Learn more about Finnovatech
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinnovatechSection;

