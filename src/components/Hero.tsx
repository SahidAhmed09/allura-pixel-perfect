import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-32 max-w-6xl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-white/80">AI-Powered Business Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-7 leading-[1.1] tracking-tight">
            Automate Smarter,{" "}
            <span className="text-white">Grow Faster</span>,<br />
            <span className="text-white/40">Thrive</span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Transform your business operations with intelligent automation.
            Scale efficiently while maintaining excellence and driving innovation forward.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20">
            <Button variant="hero" size="lg" className="rounded-full group">
              Get Started Free
              <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={16} />
            </Button>
            <Button variant="glass" size="lg" className="rounded-full group">
              <Play className="mr-2" size={14} />
              Watch Demo
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/[0.02] border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1.5">500+</div>
              <div className="text-xs text-white/40 font-medium uppercase tracking-wider">Active Clients</div>
            </div>
            <div className="text-center border-l border-white/10">
              <div className="text-4xl font-bold text-white mb-1.5">98%</div>
              <div className="text-xs text-white/40 font-medium uppercase tracking-wider">Success Rate</div>
            </div>
            <div className="text-center border-l border-white/10">
              <div className="text-4xl font-bold text-white mb-1.5">24/7</div>
              <div className="text-xs text-white/40 font-medium uppercase tracking-wider">Support</div>
            </div>
            <div className="text-center border-l border-white/10">
              <div className="text-4xl font-bold text-white mb-1.5">100K+</div>
              <div className="text-xs text-white/40 font-medium uppercase tracking-wider">Tasks Done</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
