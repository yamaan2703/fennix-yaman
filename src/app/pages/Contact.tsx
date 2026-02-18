"use client";

import { useState } from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Mail, Phone, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

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

    // Animate form
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
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

    // Animate contact info
    if (infoRef.current) {
      gsap.fromTo(
        infoRef.current,
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="inline-block bg-[#238ef8] border border-[#238ef8] rounded-full px-4 py-1.5 text-xs font-semibold text-white tracking-wider">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
              Contact{" "}
              <span className="text-[#238ef8]">
                Us
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have a question or want to learn more? We'd love to hear from you.
            </p>
          </div>

          {/* Main Container */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Contact Form */}
            <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm">
              <form ref={formRef} onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 mb-1.5"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full border-gray-200 focus:border-[#238ef8] focus:ring-[#238ef8] h-10 bg-white"
                  />
                </div>

                {/* Email Field */}
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 mb-1.5"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full border-gray-200 focus:border-[#238ef8] focus:ring-[#238ef8] h-10 bg-white"
                  />
                </div>

                {/* Subject Field */}
                <div className="mb-3">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-900 mb-1.5"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full border-gray-200 focus:border-[#238ef8] focus:ring-[#238ef8] h-10 bg-white"
                  />
                </div>

                {/* Message Field */}
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900 mb-1.5"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows={4}
                    className="w-full border-gray-200 focus:border-[#238ef8] focus:ring-[#238ef8] resize-none bg-white"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 h-10 text-sm font-semibold rounded-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>

            {/* Right Side - Contact Details */}
            <div ref={infoRef} className="lg:sticky lg:top-24">
              <div className="bg-gray-100 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Contact Information
                </h2>
                <p className="text-base text-gray-600 mb-8 leading-relaxed">
                  Feel free to reach out to us. We're here to help.
                </p>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="group flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#238ef8]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#238ef8]/20 transition-colors duration-300">
                      <MapPin className="w-5 h-5 text-[#238ef8]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">
                        Address
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        30 N Gould St Ste R, Sheridan, WY 82801, Wyoming United States
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="group flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#238ef8]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#238ef8]/20 transition-colors duration-300">
                      <Phone className="w-5 h-5 text-[#238ef8]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">
                        Phone Number
                      </h3>
                      <a
                        href="tel:+15122344807"
                        className="text-sm text-gray-600 hover:text-[#238ef8] transition-colors duration-200 cursor-pointer"
                      >
                        +1 512 234 4807
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#238ef8]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#238ef8]/20 transition-colors duration-300">
                      <Mail className="w-5 h-5 text-[#238ef8]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">
                        Email Address
                      </h3>
                      <a
                        href="mailto:info@fennix.com"
                        className="text-sm text-gray-600 hover:text-[#238ef8] transition-colors duration-200 cursor-pointer"
                      >
                        info@fennix.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
