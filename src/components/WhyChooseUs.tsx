import { Star } from "lucide-react";
import Stars from "@/components/Stars";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Real‑Time Intelligence",
      description: "Access accurate, real‑time data to drive smarter decisions across teams and workflows.",
      diagram: (
        <svg viewBox="0 0 200 120" className="w-full h-24" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="gaugeGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
            </linearGradient>
          </defs>
          
          {/* Background arc */}
          <path 
            d="M 40 80 A 60 60 0 0 1 160 80" 
            stroke="rgba(255,255,255,0.1)" 
            strokeWidth="4" 
            fill="none" 
            strokeLinecap="round"
          />
          
          {/* Active arc */}
          <path 
            d="M 40 80 A 60 60 0 0 1 120 40" 
            stroke="url(#gaugeGrad1)" 
            strokeWidth="4" 
            fill="none" 
            strokeLinecap="round"
          />
          
          {/* Indicator dot */}
          <circle cx="120" cy="40" r="4" fill="rgba(255,255,255,0.8)" />
          
          {/* Center dot */}
          <circle cx="100" cy="80" r="3" fill="rgba(255,255,255,0.6)" />
        </svg>
      )
    },
    {
      title: "Measurable Impact",
      description: "Track performance, uncover insights, and achieve data‑backed growth with clear metrics.",
      diagram: (
        <svg viewBox="0 0 200 120" className="w-full h-24" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="barGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
          </defs>
          
          {/* Chart bars */}
          <rect x="30" y="60" width="16" height="30" rx="2" fill="rgba(255,255,255,0.1)" />
          <rect x="55" y="45" width="16" height="45" rx="2" fill="rgba(255,255,255,0.15)" />
          <rect x="80" y="30" width="16" height="60" rx="2" fill="url(#barGrad2)" />
          <rect x="105" y="40" width="16" height="50" rx="2" fill="rgba(255,255,255,0.2)" />
          <rect x="130" y="55" width="16" height="35" rx="2" fill="rgba(255,255,255,0.12)" />
          <rect x="155" y="50" width="16" height="40" rx="2" fill="rgba(255,255,255,0.08)" />
        </svg>
      )
    },
    {
      title: "Seamless Integration",
      description: "Connect tools, teams, and workflows with intelligent automation and unified orchestration.",
      diagram: (
        <svg viewBox="0 0 200 120" className="w-full h-24" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="glow3">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Connection lines */}
          <line x1="100" y1="45" x2="60" y2="25" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <line x1="100" y1="45" x2="140" y2="25" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <line x1="100" y1="45" x2="100" y2="75" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <line x1="100" y1="45" x2="70" y2="75" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <line x1="100" y1="45" x2="130" y2="75" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          
          {/* Network nodes */}
          <circle cx="100" cy="45" r="8" fill="rgba(255,255,255,0.3)" filter="url(#glow3)" />
          <circle cx="60" cy="25" r="5" fill="rgba(255,255,255,0.2)" />
          <circle cx="140" cy="25" r="5" fill="rgba(255,255,255,0.2)" />
          <circle cx="100" cy="75" r="5" fill="rgba(255,255,255,0.2)" />
          <circle cx="70" cy="75" r="5" fill="rgba(255,255,255,0.2)" />
          <circle cx="130" cy="75" r="5" fill="rgba(255,255,255,0.2)" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden border-t border-white/5">
      {/* stars background */}
      <Stars />
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
            <Star className="text-white/60" size={14} />
            <span className="text-xs font-medium text-white/60 tracking-wider uppercase">Benefits</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Why Choose <span className="text-white/40 italic">Us?</span>
          </h2>
          
          <p className="text-base text-white/50 max-w-xl mx-auto font-light">
            Everything you need to automate, optimize, and scale.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 group overflow-hidden"
            >
              {/* Diagram */}
              <div className="mb-8 h-24 flex items-center justify-center">
                {benefit.diagram}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-white text-center">
                {benefit.title}
              </h3>
              
              <p className="text-sm text-white/50 leading-relaxed text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;