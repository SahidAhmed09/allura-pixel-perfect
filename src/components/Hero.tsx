import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-32 max-w-6xl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Slim pill nav badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-8 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-white/70">
              AI Automation • Web • App Development
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 leading-[1.05] tracking-tight">
            <span className="block text-[40px] md:text-[64px] lg:text-[86px] font-extrabold text-white/90">
              Transform Ideas Into
            </span>
            <span className="block text-[40px] md:text-[64px] lg:text-[86px] font-extrabold text-white/90">
              Digital Reality.
              <span className="ml-3 font-serif italic font-normal text-white/70">
                Faster
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-[15px] md:text-[17px] text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            We build intelligent automation, stunning web experiences, and powerful mobile apps that drive real business growth.
          </p>

          {/* CTA */}
          <div className="flex items-center justify-center mb-16">
            <a href="https://wa.me/916900273892" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="rounded-full px-8 py-6 text-[15px] font-semibold group">
                Book A Discovery Call
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-0.5" size={16} />
              </Button>
            </a>
          </div>

          {/* Social strip */}
          <div className="flex items-center justify-center gap-6 text-white/50 text-sm">
            <span className="opacity-70">✕</span>
            <span className="opacity-70">@</span>
            <span className="opacity-70">f</span>
          </div>
        </div>
      </div>

      {/* Font fallbacks */}
      <style>{`
        .font-serif {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }
      `}</style>
    </section>
  );
};

export default Hero;
