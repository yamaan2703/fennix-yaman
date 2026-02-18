import { Hero } from "@/components/ui/hero";

function HeroDemo() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Hero
        title="AI that works for you."
        subtitle="Transform your workflow with intelligent automation. Simple, powerful, reliable."
        actions={[
          {
            label: "Try Demo",
            href: "#",
            variant: "outline",
          },
          {
            label: "Start Free",
            href: "#",
            variant: "default",
          },
        ]}
        titleClassName="text-5xl md:text-6xl font-extrabold text-white"
        subtitleClassName="text-lg md:text-xl max-w-[600px] text-gray-400"
        actionsClassName="mt-8"
        className="bg-gray-950"
      />
    </div>
  );
}

export default HeroDemo;
