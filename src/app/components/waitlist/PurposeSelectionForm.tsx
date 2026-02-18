"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { Check } from "lucide-react";
import { purposes } from "../../data/data";

interface PurposeSelectionFormProps {
    selectedPurpose: string;
    onPurposeSelect: (purpose: string) => void;
    onOkClick: () => void;
    formRef: React.RefObject<HTMLDivElement | null>;
}

const PurposeSelectionForm = ({
    selectedPurpose,
    onPurposeSelect,
    onOkClick,
    formRef,
}: PurposeSelectionFormProps) => {
    useEffect(() => {
        if (formRef.current) {
            gsap.fromTo(
                formRef.current,
                { opacity: 0, y: 30, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "power3.out",
                }
            );
        }
    }, [formRef]);

    return (
        <div
            ref={formRef}
            className="relative z-10 w-full max-w-2xl mx-auto bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm"
        >
            <div className="relative z-10">
                {/* Question */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
                    What's your Purpose
                    <span className="text-[#238ef8] ml-1">*</span>
                </h2>

                {/* Purpose Options */}
                <div className="w-full space-y-2 mb-6">
                    {purposes.map((purpose, index) => {
                        const isSelected = selectedPurpose === purpose;
                        const letters = ["A", "B", "C", "D", "E", "F"];

                        return (
                            <button
                                key={purpose}
                                onClick={() => onPurposeSelect(purpose)}
                                className={`group relative w-full p-4 rounded-xl border transition-all duration-300 text-left hover:scale-[1.01] cursor-pointer ${isSelected
                                    ? "border-[#238ef8] bg-[#238ef8]/5 shadow-sm"
                                    : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    {/* Letter Circle */}
                                    <div
                                        className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-sm transition-all duration-300 ${isSelected
                                            ? "bg-[#238ef8] text-white shadow-md"
                                            : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                                            }`}
                                    >
                                        {letters[index]}
                                    </div>

                                    {/* Purpose Text */}
                                    <span
                                        className={`flex-1 font-medium text-sm sm:text-base ${isSelected
                                            ? "text-[#238ef8]"
                                            : "text-gray-700 group-hover:text-gray-900"
                                            }`}
                                    >
                                        {purpose}
                                    </span>

                                    {/* Check Icon */}
                                    {isSelected && (
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#238ef8] flex items-center justify-center shadow-md">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* OK Button */}
                <div className="flex justify-center">
                    <button
                        onClick={onOkClick}
                        disabled={!selectedPurpose}
                        className={`group inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${selectedPurpose
                            ? "bg-gray-900 text-white hover:bg-gray-800 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                            }`}
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PurposeSelectionForm;

