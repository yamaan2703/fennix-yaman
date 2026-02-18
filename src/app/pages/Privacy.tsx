"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Privacy = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section className="min-h-screen flex flex-col">
      <main className="flex-1 py-16 px-4 bg-background">
        <div className="container-custom max-w-7xl mx-auto">
          <div
            ref={contentRef}
            className="p-8 md:p-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-sm mb-8">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <div className="prose prose-gray max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Fennix, we take your privacy seriously. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your
                  information when you use our Service. Please read this privacy
                  policy carefully. If you do not agree with the terms of this
                  privacy policy, please do not access the Service.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Information We Collect
                </h2>
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">
                  2.1 Personal Information
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily
                  provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Register for an account</li>
                  <li>Use our Service</li>
                  <li>Contact us for support</li>
                  <li>Subscribe to our newsletter</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This information may include your name, email address, phone
                  number, company name, and other contact details.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">
                  2.2 Usage Data
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We automatically collect certain information when you access
                  and use the Service, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    Device information (IP address, browser type, operating
                    system)
                  </li>
                  <li>Usage patterns and preferences</li>
                  <li>Log data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Provide, maintain, and improve our Service</li>
                  <li>Process your transactions and manage your account</li>
                  <li>
                    Send you technical notices, updates, and support messages
                  </li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, prevent, and address technical issues</li>
                  <li>Personalize and improve your experience</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Information Sharing and Disclosure
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information only in the
                  following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect and defend our rights or property</li>
                  <li>
                    With service providers who assist us in operating our
                    Service
                  </li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the Internet or
                  electronic storage is 100% secure, and we cannot guarantee
                  absolute security.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to track
                  activity on our Service and hold certain information. You can
                  instruct your browser to refuse all cookies or to indicate
                  when a cookie is being sent. However, if you do not accept
                  cookies, you may not be able to use some portions of our
                  Service.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Your Rights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have certain rights
                  regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>The right to access your personal information</li>
                  <li>The right to rectify inaccurate information</li>
                  <li>The right to request deletion of your information</li>
                  <li>The right to object to processing of your information</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  8. Data Retention
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We will retain your personal information only for as long as
                  necessary to fulfill the purposes outlined in this Privacy
                  Policy, unless a longer retention period is required or
                  permitted by law.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  9. Children's Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our Service is not intended for children under the age of 13.
                  We do not knowingly collect personal information from children
                  under 13. If you are a parent or guardian and believe your
                  child has provided us with personal information, please
                  contact us.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  10. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date. You are
                  advised to review this Privacy Policy periodically for any
                  changes.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  11. Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please
                  contact us at{" "}
                  <a
                    href="mailto:privacy@fennix.com"
                    className="text-[#238ef8] hover:underline"
                  >
                    privacy@fennix.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Privacy;
