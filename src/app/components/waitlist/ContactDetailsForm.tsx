"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
import { Input } from "../ui/input";
import { countries } from "../../data/data";

interface ContactDetailsFormProps {
    formData: {
        phone: string;
        email: string;
        company: string;
    };
    selectedCountry: {
        code: string;
        flag: string;
        name: string;
    };
    isSubmitting: boolean;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCountryChange: (country: { code: string; flag: string; name: string }) => void;
    onSubmit: (e: React.FormEvent) => void;
    formRef: React.RefObject<HTMLDivElement | null>;
}

const ContactDetailsForm = ({
    formData,
    selectedCountry,
    isSubmitting,
    onInputChange,
    onPhoneChange,
    onCountryChange,
    onSubmit,
    formRef,
}: ContactDetailsFormProps) => {
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [countrySearchTerm, setCountrySearchTerm] = useState("");

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

    // Close country dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest("[data-country-dropdown]")) {
                setShowCountryDropdown(false);
            }
        };

        if (showCountryDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [showCountryDropdown]);

    return (
        <div
            ref={formRef}
            className="relative z-10 w-full max-w-2xl mx-auto bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm"
        >
            <form onSubmit={onSubmit} className="relative z-10">
                {/* Question */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-8 leading-tight">
                    Share your contact details so we can stay connected
                    <span className="text-[#238ef8] ml-1">*</span>
                </h2>

                {/* Phone Number Field */}
                <div className="mb-5">
                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-900 mb-2"
                    >
                        Phone number
                    </label>
                    <div className="flex items-center gap-2 border-2 border-gray-200 rounded-lg px-3 h-10 focus-within:border-[#238ef8] transition-colors bg-white">
                        {/* Country Code Dropdown */}
                        <div className="relative" data-country-dropdown>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowCountryDropdown(!showCountryDropdown);
                                    if (showCountryDropdown) {
                                        setCountrySearchTerm("");
                                    }
                                }}
                                className={`flex items-center gap-2 px-2 py-1 rounded-lg transition-all duration-200 h-full ${showCountryDropdown
                                    ? "bg-[#238ef8]/10"
                                    : "hover:bg-gray-50"
                                    }`}
                            >
                                <span className="text-xl">{selectedCountry.flag}</span>
                                <span className="text-sm font-semibold text-gray-700 min-w-[45px]">
                                    {selectedCountry.code}
                                </span>
                                <ChevronDown
                                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${showCountryDropdown ? "rotate-180 text-[#238ef8]" : ""
                                        }`}
                                />
                            </button>

                            {/* Dropdown */}
                            {showCountryDropdown && (
                                <div className="absolute top-full left-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl z-50 min-w-[280px] max-h-[320px] overflow-hidden">
                                    {/* Search Input */}
                                    <div className="sticky top-0 bg-white border-b border-gray-200 p-3">
                                        <input
                                            type="text"
                                            placeholder="Search country..."
                                            value={countrySearchTerm}
                                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#238ef8]/20 focus:border-[#238ef8] transition-all"
                                            onChange={(e) => {
                                                setCountrySearchTerm(e.target.value);
                                            }}
                                        />
                                    </div>

                                    {/* Countries List */}
                                    <div className="overflow-y-auto max-h-[260px]">
                                        {countries
                                            .filter(
                                                (country) =>
                                                    country.name
                                                        .toLowerCase()
                                                        .includes(countrySearchTerm.toLowerCase()) ||
                                                    country.code.includes(countrySearchTerm)
                                            )
                                            .map((country) => (
                                                <button
                                                    key={`${country.code}-${country.name}`}
                                                    type="button"
                                                    onClick={() => {
                                                        onCountryChange(country);
                                                        setShowCountryDropdown(false);
                                                        setCountrySearchTerm("");
                                                    }}
                                                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-150 ${selectedCountry.code === country.code &&
                                                        selectedCountry.name === country.name
                                                        ? "bg-[#238ef8]/10 border-l-4 border-[#238ef8]"
                                                        : "hover:bg-[#238ef8]/5 border-l-4 border-transparent"
                                                        }`}
                                                >
                                                    <span className="text-2xl flex-shrink-0">
                                                        {country.flag}
                                                    </span>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-sm font-semibold text-gray-900 truncate">
                                                            {country.name}
                                                        </div>
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-600 flex-shrink-0">
                                                        {country.code}
                                                    </span>
                                                </button>
                                            ))}
                                    </div>

                                    {/* No Results Message */}
                                    {countries.filter(
                                        (country) =>
                                            country.name
                                                .toLowerCase()
                                                .includes(countrySearchTerm.toLowerCase()) ||
                                            country.code.includes(countrySearchTerm)
                                    ).length === 0 && (
                                            <div className="px-4 py-6 text-center text-sm text-gray-500">
                                                No countries found
                                            </div>
                                        )}
                                </div>
                            )}
                        </div>

                        {/* Phone Input */}
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={onPhoneChange}
                            placeholder="0412 345 678"
                            maxLength={13}
                            className="flex-1 border-0 rounded-none px-2 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent h-full"
                        />
                    </div>
                </div>

                {/* Email Field */}
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-900 mb-2"
                    >
                        Email<span className="text-[#238ef8] ml-1">*</span>
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={onInputChange}
                        required
                        placeholder="name@example.com"
                        className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 h-10 focus:border-[#238ef8] focus:ring-[#238ef8] bg-white"
                    />
                </div>

                {/* Company Field */}
                <div className="mb-6">
                    <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-900 mb-2"
                    >
                        Company
                    </label>
                    <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={onInputChange}
                        placeholder="Acme Corporation"
                        className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 h-10 focus:border-[#238ef8] focus:ring-[#238ef8] bg-white"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col items-center gap-4">
                    <button
                        type="submit"
                        disabled={!formData.email || isSubmitting}
                        className={`group inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${formData.email && !isSubmitting
                            ? "bg-gray-900 text-white hover:bg-gray-800 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
                            : "opacity-50 cursor-not-allowed bg-gray-200 text-gray-400"
                            }`}
                    >
                        {isSubmitting ? (
                            <>
                                <svg
                                    className="animate-spin h-4 w-4 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Submitting...
                            </>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactDetailsForm;

