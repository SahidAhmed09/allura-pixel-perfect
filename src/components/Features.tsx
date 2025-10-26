import React from "react";

const Features = () => {
  const features = [
    {
      title: "Workflow Automation",
      description: "Automate complex business processes to boost speed, clarity, and efficiency.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          <circle cx="18" cy="8" r="3"/>
        </svg>
      )
    },
    {
      title: "Custom AI Solutions",
      description: "Build tailored AI systems that align with your business goals and challenges.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="6" height="6" rx="1"/>
          <rect x="15" y="3" width="6" height="6" rx="1"/>
          <rect x="9" y="15" width="6" height="6" rx="1"/>
          <path d="M6 9v6"/>
          <path d="M18 9v6"/>
        </svg>
      )
    },
    {
      title: "AI Assistant",
      description: "Deploy intelligent virtual agents to streamline tasks.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="5"/>
          <path d="M20 21a8 8 0 1 0-16 0"/>
          <path d="M12 13l3 3-3 3"/>
        </svg>
      )
    },
    {
      title: "Seamless Integrations",
      description: "Connect your tools and apps for smooth, unified AI-powered workflows.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6"/>
          <path d="M12 17v6"/>
          <path d="M4.22 4.22l4.24 4.24"/>
          <path d="M15.54 15.54l4.24 4.24"/>
          <path d="M1 12h6"/>
          <path d="M17 12h6"/>
          <path d="M4.22 19.78l4.24-4.24"/>
          <path d="M15.54 8.46l4.24-4.24"/>
        </svg>
      )
    },
    {
      title: "Custom Web Development",
      description: "Design and build bespoke web applications tailored to business requirements, performance, and scale.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="14" rx="2"/>
          <path d="M8 20h8"/>
          <path d="M7 9h10"/>
          <path d="M7 13h6"/>
        </svg>
      )
    },
    {
      title: "Mobile Development",
      description: "Native and cross‑platform mobile apps for Android and iOS, optimized for performance and UX.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="7" y="2" width="10" height="20" rx="2"/>
          <circle cx="12" cy="18" r="1"/>
          <g transform="translate(3,6)" opacity="0.9">
            <rect x="0" y="0" width="4" height="10" rx="1" fill="currentColor" opacity="0.06"/>
            <rect x="14" y="0" width="4" height="10" rx="1" fill="currentColor" opacity="0.06"/>
          </g>
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-24 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
            <span className="text-xs font-medium text-white/70 tracking-wider uppercase">Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            All Features In <span className="text-white/40 italic">One Place</span>
          </h2>
          
          <p className="text-base text-white/50 max-w-xl mx-auto font-light">
            Everything you need to automate operations, boost productivity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 transition-all duration-300 group transform-gpu will-change-transform
                         hover:-translate-y-3 hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <div className="text-white/80 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              
              <p className="text-sm text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Glow accents (decorative, behind content) */}
      <div className="pointer-events-none -z-10 absolute inset-0">
        {/* Large soft central glow */}
        <div
          className="absolute left-1/2 top-24 -translate-x-1/2 rounded-full blur-3xl opacity-40"
          style={{
            width: "760px",
            height: "440px",
            background:
              "radial-gradient(closest-side, rgba(99,102,241,0.22), rgba(99,102,241,0.12) 30%, rgba(139,92,246,0.08) 50%, transparent 70%)",
            mixBlendMode: "screen",
            animation: "pulseGlow 8s ease-in-out infinite"
          }}
        />

        {/* Accent glow bottom-right */}
        <div
          className="absolute right-12 bottom-12 rounded-full blur-2xl opacity-28"
          style={{
            width: "260px",
            height: "260px",
            background:
              "radial-gradient(closest-side, rgba(16,185,129,0.18), rgba(59,130,246,0.12) 40%, transparent 65%)",
            mixBlendMode: "screen",
            animation: "floatGlow 10s ease-in-out infinite"
          }}
        />

        {/* Subtle top-left shimmer */}
        <div
          className="absolute left-10 top-6 rounded-full blur-2xl opacity-18"
          style={{
            width: "160px",
            height: "160px",
            background: "radial-gradient(closest-side, rgba(255,255,255,0.06), transparent 60%)",
            mixBlendMode: "overlay",
            animation: "floatGlow 12s ease-in-out infinite"
          }}
        />
      </div>

      {/* Local keyframes for the glow animations */}
      <style>{`
        @keyframes pulseGlow {
          0% { transform: translateY(0) scale(1); opacity: 0.36; }
          50% { transform: translateY(-6px) scale(1.02); opacity: 0.46; }
          100% { transform: translateY(0) scale(1); opacity: 0.36; }
        }
        @keyframes floatGlow {
          0% { transform: translateY(0) scale(1); opacity: 0.26; }
          50% { transform: translateY(-8px) scale(1.03); opacity: 0.36; }
          100% { transform: translateY(0) scale(1); opacity: 0.26; }
        }
      `}</style>
    </section>
  );
};

export default Features;