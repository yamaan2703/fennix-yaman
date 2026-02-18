"use client";

import { useEffect, useMemo } from "react";
import { gsap } from "gsap";
import { Clock } from "lucide-react";

interface WaitlistInitialProps {
    waitlistCount: number;
    onStartClick: () => void;
    iconsRef: React.RefObject<HTMLDivElement | null>;
    textRef: React.RefObject<HTMLHeadingElement | null>;
    buttonRef: React.RefObject<HTMLButtonElement | null>;
    timerRef: React.RefObject<HTMLDivElement | null>;
}

const WaitlistInitial = ({
    waitlistCount,
    onStartClick,
    iconsRef,
    textRef,
    buttonRef,
    timerRef,
}: WaitlistInitialProps) => {
    // App icons data - shuffled randomly (only once on mount)
    const appIcons = useMemo(() => {
        const allIcons = [
            { imageSrc: "/images/facebook.png" },
            { imageSrc: "/images/insta.png" },
            { imageSrc: "/images/twitter.png" },
            { imageSrc: "/images/linkedin.png" },
            { imageSrc: "/images/slack.png" },
        ];
        // Shuffle icons randomly
        return [...allIcons].sort(() => Math.random() - 0.5);
    }, []);

    useEffect(() => {
        // Animate icons
        if (iconsRef.current) {
            const icons = iconsRef.current.children;
            gsap.fromTo(
                icons,
                {
                    opacity: 0,
                    scale: 0.3,
                    y: 30,
                    rotation: -10,
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotation: 0,
                    duration: 0.8,
                    stagger: 0.08,
                    ease: "back.out(1.7)",
                    delay: 0.5,
                }
            );
        }

        // Animate text
        if (textRef.current) {
            gsap.fromTo(
                textRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: 0.8,
                }
            );
        }

        // Animate button
        if (buttonRef.current) {
            gsap.fromTo(
                buttonRef.current,
                { opacity: 0, y: 20, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: 1,
                }
            );
        }

        // Animate timer
        if (timerRef.current) {
            gsap.fromTo(
                timerRef.current,
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    delay: 1.2,
                }
            );
        }
    }, [iconsRef, textRef, buttonRef, timerRef]);

    return (
        <div className="relative z-10 flex flex-col items-center">
            {/* App Icons in Arc */}
            <div
                ref={iconsRef}
                className="relative w-full mb-8 md:mb-12 flex justify-center items-center"
            >
                {/* Mobile: Layout - 2 left, 1 center, 2 right */}
                <div className="md:hidden flex items-center justify-center gap-3 w-full max-w-sm">
                    {/* Left side - 2 icons */}
                    <div className="flex flex-col gap-3">
                        {appIcons.slice(0, 2).map((app, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center"
                            >
                                <div
                                    className={`relative w-14 h-14 rounded-xl bg-white border border-gray-200 p-2 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md hover:border-gray-300 cursor-pointer`}
                                >
                                    <div
                                        className={`w-full h-full rounded-lg flex items-center justify-center overflow-hidden bg-gray-50`}
                                    >
                                        <img
                                            src={app.imageSrc}
                                            alt={`App Icon ${index + 1}`}
                                            className="w-full h-full object-contain p-1"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center - 1 icon */}
                    <div className="flex items-center justify-center">
                        <div
                            className={`relative size-12 rounded-xl bg-white border border-gray-200 p-2 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md hover:border-gray-300 cursor-pointer`}
                        >
                            <div
                                className={`w-full h-full rounded-lg flex items-center justify-center overflow-hidden`}
                            >
                                <img
                                    src={appIcons[2].imageSrc}
                                    alt="App Icon 3"
                                    className="w-full h-full object-contain p-1"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right side - 2 icons */}
                    <div className="flex flex-col gap-3">
                        {appIcons.slice(3, 5).map((app, index) => (
                            <div
                                key={index + 3}
                                className="flex items-center justify-center"
                            >
                                <div
                                    className={`relative size-12 rounded-xl bg-white border border-gray-200 p-2 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md hover:border-gray-300 cursor-pointer`}
                                >
                                    <div
                                        className={`w-full h-full rounded-lg flex items-center justify-center overflow-hidden`}
                                    >
                                        <img
                                            src={app.imageSrc}
                                            alt={`App Icon ${index + 4}`}
                                            className="w-full h-full object-contain p-1"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop: Layout - 2 left, 1 center, 2 right */}
                <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8 w-full">
                    {/* Left side - 2 icons */}
                    <div className="flex flex-col gap-5">
                        {appIcons.slice(0, 2).map((app, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center"
                            >
                                <div
                                    className={`relative size-20 rounded-xl bg-white border border-gray-200 p-3 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md hover:border-gray-300 cursor-pointer`}
                                >
                                    <div
                                        className={`w-full h-full rounded-lg flex items-center justify-center overflow-hidden`}
                                    >
                                        <img
                                            src={app.imageSrc}
                                            alt={`App Icon ${index + 1}`}
                                            className="w-full h-full object-contain p-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center - 1 icon (larger) */}
                    <div className="flex items-center justify-center">
                        <div
                            className={`relative size-24 rounded-xl bg-white border border-gray-200 p-3 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md hover:border-gray-300 cursor-pointer`}
                        >
                            <div
                                className={`w-full h-full rounded-lg flex items-center justify-center overflow-hidden`}
                            >
                                <img
                                    src={appIcons[2].imageSrc}
                                    alt="App Icon 3"
                                    className="w-full h-full object-contain p-2"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right side - 2 icons */}
                    <div className="flex flex-col gap-5">
                        {appIcons.slice(3, 5).map((app, index) => (
                            <div
                                key={index + 3}
                                className="flex items-center justify-center"
                            >
                                <div
                                    className={`relative size-20 rounded-2xl bg-white border-2 border-[#238ef8]/30 p-3 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-[#238ef8] cursor-pointer`}
                                >
                                    <div
                                        className={`w-full h-full rounded-lg flex items-center justify-center overflow-hidden`}
                                    >
                                        <img
                                            src={app.imageSrc}
                                            alt={`App Icon ${index + 4}`}
                                            className="w-full h-full object-contain p-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Text */}
            <h1
                ref={textRef}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 text-center leading-tight"
            >
                Join The{" "}
                <span className="text-[#238ef8]">
                    Fennix
                </span>{" "}
                Waitlist
            </h1>

            {/* Waitlist Count */}
            {waitlistCount > 0 && (
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 text-center leading-relaxed">
                    Join{" "}
                    <span className="font-bold text-[#238ef8]">
                        {waitlistCount.toLocaleString()}
                    </span>{" "}
                    others on the waitlist
                </p>
            )}

            {/* Start Button */}
            <button
                ref={buttonRef}
                onClick={onStartClick}
                className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg cursor-pointer"
            >
                Start
            </button>

            {/* Timer */}
            <div
                ref={timerRef}
                className="flex items-center gap-2 mt-6 text-gray-500 text-sm"
            >
                <Clock className="w-4 h-4 md:w-5 md:h-5" />
                <span>Takes 30 sec</span>
            </div>
        </div>
    );
};

export default WaitlistInitial;

