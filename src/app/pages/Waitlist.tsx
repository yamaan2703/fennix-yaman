"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toast } from "sonner";
import WaitlistInitial from "../components/waitlist/WaitlistInitial";
import PurposeSelectionForm from "../components/waitlist/PurposeSelectionForm";
import SourceSelectionForm from "../components/waitlist/SourceSelectionForm";
import ContactDetailsForm from "../components/waitlist/ContactDetailsForm";

const Waitlist = () => {
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();
  // Get initial count from localStorage or default to 15250 (base count)
  const getInitialCount = () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("waitlistCount");
      return stored ? parseInt(stored, 10) : 15250;
    }
    return 15250;
  };
  const [waitlistCount, setWaitlistCount] = useState<number>(getInitialCount());
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedPurpose, setSelectedPurpose] = useState<string>("");
  const [selectedSource, setSelectedSource] = useState<string>("");
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    company: "",
  });
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+1",
    flag: "🇺🇸",
    name: "United States",
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const timerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const purposeFormRef = useRef<HTMLDivElement>(null);
  const sourceFormRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate card container
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }
  }, []);

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
              window.dispatchEvent(new CustomEvent("waitlistCountUpdated", { detail: { count: data.count } }));
            }
            console.log("=== Waitlist Count Fetched ===");
            console.log("Count from API:", data.count);
          }
        }
      } catch (error) {
        console.error("Failed to fetch waitlist count:", error);
        // Keep the localStorage value if API fails
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


  const handleStartClick = () => {
    setCurrentStep(1);
  };

  const handlePurposeSelect = (purpose: string) => {
    setSelectedPurpose(purpose);
  };

  const handleSourceSelect = (source: string) => {
    setSelectedSource(source);
  };

  const handleOkClick = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numeric values
    const numericValue = e.target.value.replace(/\D/g, '');
    // Limit to 13 digits
    const limitedValue = numericValue.slice(0, 13);
    setFormData({
      ...formData,
      phone: limitedValue,
    });
  };

  // Map purpose values to API format (uppercase with underscores)
  const mapPurposeToAPI = (purpose: string): string => {
    const purposeMap: Record<string, string> = {
      "Finance": "FINANCE",
      "Business Consultant": "BUSINESS_CONSULTANT",
      "Analytics": "ANALYTICS",
      "Social Media Sentiments": "SOCIAL_MEDIA_SENTIMENTS",
      "Marketing": "MARKETING",
      "Other": "OTHER",
    };
    return purposeMap[purpose] || purpose.toUpperCase().replace(/\s+/g, "_");
  };

  // Map source values to API format (uppercase with underscores)
  const mapSourceToAPI = (source: string): string => {
    const sourceMap: Record<string, string> = {
      "Social Media": "SOCIAL_MEDIA",
      "Friends": "FRIENDS",
      "Word of Mouth": "WORD_OF_MOUTH",
      "Search Engine": "SEARCH_ENGINE",
    };
    return sourceMap[source] || source.toUpperCase().replace(/\s+/g, "_");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = toast.loading("Verifying security...", {
      position: "bottom-right",
    });

    try {
      let recaptchaToken: string | null = null;

      // Execute reCAPTCHA v3 if available
      if (executeRecaptcha) {
        try {
          toast.loading("Verifying reCAPTCHA...", {
            id: loadingToast,
            position: "bottom-right",
          });

          recaptchaToken = await executeRecaptcha("waitlist_submit");

          if (!recaptchaToken) {
            console.warn("reCAPTCHA token is empty, proceeding without token");
          }
        } catch (recaptchaError) {
          console.warn("reCAPTCHA execution failed, proceeding without token:", recaptchaError);
          // Continue with form submission even if reCAPTCHA fails
        }
      } else {
        console.warn("reCAPTCHA is not available, proceeding without verification");
      }

      toast.loading("Submitting to server...", {
        id: loadingToast,
        position: "bottom-right",
      });

      // Prepare the complete form data body according to API format
      const apiBody: {
        purpose: string;
        referralSource: string;
        email: string;
        phone: string;
        company: string;
        recaptchaToken?: string;
      } = {
        purpose: mapPurposeToAPI(selectedPurpose),
        referralSource: mapSourceToAPI(selectedSource),
        email: formData.email,
        phone: `${selectedCountry.code}${formData.phone}`,
        company: formData.company || "",
      };

      // Include reCAPTCHA token only if available
      if (recaptchaToken) {
        apiBody.recaptchaToken = recaptchaToken;
      }

      // Main waitlist submission
      const response = await fetch(
        "https://go-insights-be-production.up.railway.app/waitlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiBody),
        }
      );

      const data = await response.json();

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      if (!response.ok) {
        // Show error toast
        toast.error("Submission Failed", {
          description: data.message || "Something went wrong. Please try again.",
          duration: 5000,
          position: "bottom-right",
        });
      } else {
        // Fetch updated count from API after successful submission
        if (data.success) {
          try {
            const countResponse = await fetch(
              "https://go-insights-be-production.up.railway.app/waitlist/count",
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            if (countResponse.ok) {
              const countData = await countResponse.json();

              // Update count from API response
              if (countData.success && countData.count !== undefined) {
                const newCount = countData.count;
                setWaitlistCount(newCount);
                // Store in localStorage
                if (typeof window !== "undefined") {
                  localStorage.setItem("waitlistCount", newCount.toString());
                  // Dispatch event to notify other components
                  window.dispatchEvent(new CustomEvent("waitlistCountUpdated", { detail: { count: newCount } }));
                }
              }
            }
          } catch (countError) {
            // Fallback: increment local count if API fails
            setWaitlistCount((prev) => {
              const newCount = prev + 1;
              if (typeof window !== "undefined") {
                localStorage.setItem("waitlistCount", newCount.toString());
                window.dispatchEvent(new CustomEvent("waitlistCountUpdated", { detail: { count: newCount } }));
              }
              return newCount;
            });
          }

          // Show success toast
          toast.success("Successfully Added!", {
            description: data.message || "You've been added to the waitlist.",
            duration: 3000,
            position: "bottom-right",
          });

          // Navigate to home page after successful submission
          setTimeout(() => {
            router.push("/");
          }, 1500); // Small delay to show toast
        }
      }
    } catch (error) {
      // Dismiss loading toast
      toast.dismiss(loadingToast);

      // Show error toast
      toast.error("Network Error", {
        description: "Failed to submit form. Please check your connection and try again.",
        duration: 5000,
        position: "bottom-right",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div
        ref={containerRef}
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 md:py-20"
      >

        {/* Main Card Container */}
        <div ref={cardRef} className="relative w-full max-w-4xl mx-auto">
          {currentStep === 0 ? (
            <WaitlistInitial
              waitlistCount={waitlistCount}
              onStartClick={handleStartClick}
              iconsRef={iconsRef}
              textRef={textRef}
              buttonRef={buttonRef}
              timerRef={timerRef}
            />
          ) : currentStep === 1 ? (
            <PurposeSelectionForm
              selectedPurpose={selectedPurpose}
              onPurposeSelect={handlePurposeSelect}
              onOkClick={handleOkClick}
              formRef={purposeFormRef}
            />
          ) : currentStep === 2 ? (
            <SourceSelectionForm
              selectedSource={selectedSource}
              onSourceSelect={handleSourceSelect}
              onOkClick={handleOkClick}
              formRef={sourceFormRef}
            />
          ) : (
            <ContactDetailsForm
              formData={formData}
              selectedCountry={selectedCountry}
              isSubmitting={isSubmitting}
              onInputChange={handleInputChange}
              onPhoneChange={handlePhoneChange}
              onCountryChange={setSelectedCountry}
              onSubmit={handleSubmit}
              formRef={contactFormRef}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
