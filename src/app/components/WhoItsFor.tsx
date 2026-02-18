import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Users, TrendingUp, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WhoItsFor = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const rolesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const roles = rolesRef.current?.children;
    if (roles) {
      gsap.fromTo(
        roles,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  const roles = [
    { title: "Business owners & founders", icon: Building2 },
    { title: "CEOs & leadership teams", icon: Users },
    { title: "Operations & finance heads", icon: TrendingUp },
    { title: "Growth and marketing leaders", icon: Rocket },
  ];

  return (
    <section
      ref={sectionRef}
      id="who-its-for"
      className="py-20 relative overflow-hidden bg-gray-950"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "10px 10px",
      }}
    >
      {/* Subtle corner gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/10 to-transparent blur-3xl pointer-events-none" />

      {/* Top white shade */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white/10 via-white/8 to-transparent pointer-events-none z-0" />
      <div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left side - Header */}
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-px w-40 bg-gray-700 mt-3" />
                  <div className="inline-block border border-gray-800 rounded-full px-6 py-0.5 flex-shrink-0">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Who It's For
                    </span>
                  </div>
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Designed for <br className="hidden sm:block" />
                  <span className="text-[#238ef8]">
                    Decision-Makers
                  </span>
                </h2>

                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Fennix is built for teams that need clarity, speed, and
                  confidence:
                </p>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <p className="text-lg text-gray-300">
                    No technical expertise required.{" "}
                    <span className="text-gray-500">
                      No dependency on developers.
                    </span>
                  </p>
                </div>
              </div>

              {/* Right side - Roles */}
              <div ref={rolesRef} className="space-y-4">
                {roles.map((role, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 p-6 rounded-2xl border border-white/5 bg-white/2 backdrop-blur-md hover:bg-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
                  >
                    <div className="w-14 h-14 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/8 transition-colors duration-300">
                      <role.icon className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-white font-medium text-lg">
                      {role.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
