import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Powering Modern Businesses</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Automate Smarter,{" "}
            <span className="text-gradient">Grow Faster</span>,<br />
            Thrive
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in">
            Transform your business with cutting-edge automation solutions.
            We help you scale efficiently while maintaining quality and innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in">
            <Button variant="hero" size="lg" className="group">
              Get Started Free
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg" className="group">
              <Play className="mr-2" size={16} />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 glass-effect p-8 rounded-2xl animate-fade-in">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Active Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">100K+</div>
              <div className="text-sm text-muted-foreground">Tasks Automated</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-muted-foreground" size={32} />
      </div>
    </section>
  );
};

export default Hero;
