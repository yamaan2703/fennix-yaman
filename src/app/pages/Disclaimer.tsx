"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Disclaimer = () => {
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
                            Disclaimer
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
                                    1. General Information
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    The information contained on Fennix ("the Service") is for general
                                    information purposes only. Fennix assumes no responsibility for errors
                                    or omissions in the contents of the Service.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Fennix is a real-time intelligence platform that provides AI-powered
                                    analytics and insights. While we strive to provide accurate and
                                    up-to-date information, we make no representations or warranties of
                                    any kind, express or implied, about the completeness, accuracy,
                                    reliability, suitability, or availability of the information, products,
                                    services, or related graphics contained on the Service.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    2. No Professional Advice
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    The information provided by Fennix is not intended to constitute
                                    professional advice of any kind, including but not limited to:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                    <li>Financial, investment, or accounting advice</li>
                                    <li>Legal advice or legal opinions</li>
                                    <li>Medical or health advice</li>
                                    <li>Tax advice or recommendations</li>
                                    <li>Business strategy or consulting services</li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    You should consult with appropriate professionals for advice tailored
                                    to your specific situation before making any decisions based on
                                    information provided by the Service.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    3. Data Accuracy and Reliability
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Fennix processes and analyzes data from various sources, including
                                    your connected systems, databases, and external data feeds. While we
                                    employ advanced AI and analytics technologies to ensure data accuracy,
                                    we cannot guarantee:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                    <li>The accuracy, completeness, or timeliness of data from external sources</li>
                                    <li>That all data processing will be error-free</li>
                                    <li>That insights and recommendations will always be correct or applicable</li>
                                    <li>The availability or reliability of third-party data sources</li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    You are responsible for verifying the accuracy and relevance of any
                                    information, insights, or recommendations provided by the Service
                                    before making business decisions.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    4. Limitation of Liability
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    In no event shall Fennix, Finnovatech LLC, its directors, employees,
                                    partners, agents, suppliers, or affiliates be liable for any indirect,
                                    incidental, special, consequential, or punitive damages, including
                                    without limitation:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                    <li>Loss of profits, revenue, or business opportunities</li>
                                    <li>Loss of data or information</li>
                                    <li>Business interruption or operational losses</li>
                                    <li>Decisions made based on information provided by the Service</li>
                                    <li>Any other intangible losses</li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    This limitation of liability applies regardless of the theory of
                                    liability, whether in contract, tort, strict liability, or otherwise,
                                    even if Fennix has been advised of the possibility of such damages.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    5. Third-Party Services and Data
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Fennix may integrate with or provide access to third-party services,
                                    data sources, and APIs. We are not responsible for:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                    <li>The accuracy, reliability, or availability of third-party services</li>
                                    <li>Any changes, discontinuation, or modifications to third-party services</li>
                                    <li>Data provided by external sources or APIs</li>
                                    <li>Any issues arising from third-party service integrations</li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Your use of third-party services is subject to their respective terms
                                    of service and privacy policies.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    6. AI and Machine Learning Limitations
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Fennix utilizes artificial intelligence and machine learning technologies
                                    to analyze data and provide insights. You acknowledge and understand that:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                    <li>AI-generated insights are based on patterns and algorithms and may not always be accurate</li>
                                    <li>Machine learning models may produce unexpected or incorrect results</li>
                                    <li>AI recommendations should be reviewed and validated by qualified professionals</li>
                                    <li>Technology limitations may affect the quality or availability of AI-powered features</li>
                                </ul>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    7. Service Availability and Interruptions
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    While we strive to maintain continuous availability of the Service,
                                    Fennix does not guarantee:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                    <li>Uninterrupted or error-free operation of the Service</li>
                                    <li>That the Service will be available at all times</li>
                                    <li>That defects or errors will be corrected</li>
                                    <li>That the Service will meet your specific requirements</li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    The Service may be temporarily unavailable due to maintenance, updates,
                                    technical issues, or circumstances beyond our control.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    8. Forward-Looking Statements
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    The Service may contain forward-looking statements, predictions, or
                                    forecasts based on data analysis. These statements are not guarantees
                                    of future performance and are subject to risks, uncertainties, and
                                    assumptions. Actual results may differ materially from those expressed
                                    or implied in such statements.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    9. Changes to Disclaimer
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Fennix reserves the right to modify this Disclaimer at any time.
                                    We will notify users of any material changes by updating the "Last
                                    updated" date at the top of this page. Your continued use of the
                                    Service after such modifications constitutes acceptance of the updated
                                    Disclaimer.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    10. Contact Information
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    If you have any questions about this Disclaimer, please contact us at{" "}
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

export default Disclaimer;