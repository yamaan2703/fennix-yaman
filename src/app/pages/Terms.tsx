"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Terms = () => {
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
              Terms & Conditions
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
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing and using Fennix ("the Service"), you accept and
                  agree to be bound by the terms and provision of this
                  agreement. If you do not agree to abide by the above, please
                  do not use this service.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Use License
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the
                  materials on Fennix's website for personal, non-commercial
                  transitory viewing only. This is the grant of a license, not a
                  transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Modify or copy the materials</li>
                  <li>
                    Use the materials for any commercial purpose or for any
                    public display
                  </li>
                  <li>
                    Attempt to reverse engineer any software contained on
                    Fennix's website
                  </li>
                  <li>
                    Remove any copyright or other proprietary notations from the
                    materials
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Service Description
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Fennix provides real-time intelligence and analytics services
                  for business decision-making. We reserve the right to modify,
                  suspend, or discontinue any part of the Service at any time,
                  with or without notice.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. User Accounts
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you create an account with us, you must provide
                  information that is accurate, complete, and current at all
                  times. You are responsible for safeguarding the password and
                  for all activities that occur under your account.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your use of the Service is also governed by our Privacy
                  Policy. Please review our Privacy Policy, which also governs
                  your use of the Service, to understand our practices.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Prohibited Uses
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may not use our Service:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    In any way that violates any applicable national or
                    international law or regulation
                  </li>
                  <li>
                    To transmit, or procure the sending of, any advertising or
                    promotional material
                  </li>
                  <li>
                    To impersonate or attempt to impersonate the company, a
                    company employee, another user, or any other person or
                    entity
                  </li>
                  <li>
                    In any way that infringes upon the rights of others, or in
                    any way is illegal, threatening, fraudulent, or harmful
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Intellectual Property
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Service and its original content, features, and
                  functionality are and will remain the exclusive property of
                  Fennix and its licensors. The Service is protected by
                  copyright, trademark, and other laws.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In no event shall Fennix, nor its directors, employees,
                  partners, agents, suppliers, or affiliates, be liable for any
                  indirect, incidental, special, consequential, or punitive
                  damages, including without limitation, loss of profits, data,
                  use, goodwill, or other intangible losses, resulting from your
                  use of the Service.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  9. Changes to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We reserve the right, at our sole discretion, to modify or
                  replace these Terms at any time. If a revision is material, we
                  will provide at least 30 days notice prior to any new terms
                  taking effect.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  10. Contact Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms & Conditions,
                  please contact us at{" "}
                  <a
                    href="mailto:legal@fennix.com"
                    className="text-[#238ef8] hover:underline"
                  >
                    legal@fennix.com
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

export default Terms;
