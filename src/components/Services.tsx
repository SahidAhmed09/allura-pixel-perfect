import React from "react";

const Services = () => {
  const services = [
    {
      title: "Automate Repetitive Tasks",
      description: "We help you streamline internal operation by automating manual workflows",
      illustration: (
        <svg viewBox="0 0 280 200" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="taskGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
          </defs>
          
          {/* Task list container */}
          <rect x="20" y="30" width="240" height="140" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          
          {/* Header bar */}
          <rect x="30" y="40" width="220" height="25" rx="4" fill="rgba(255,255,255,0.02)"/>
          
          {/* Task items */}
          <g transform="translate(35, 75)">
            {/* Social media post - completed */}
            <circle cx="8" cy="8" r="4" fill="rgba(255,255,255,0.3)"/>
            <path d="M6 8 L7.5 9.5 L10 6.5" stroke="rgba(0,0,0,0.8)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <rect x="20" y="4" width="120" height="8" rx="2" fill="rgba(255,255,255,0.1)"/>
            <rect x="150" y="4" width="20" height="8" rx="2" fill="rgba(255,255,255,0.05)"/>
            
            {/* Employee Tracking - in progress */}
            <circle cx="8" cy="28" r="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            <circle cx="8" cy="28" r="2" fill="rgba(255,255,255,0.6)"/>
            <rect x="20" y="24" width="100" height="8" rx="2" fill="rgba(255,255,255,0.1)"/>
            <rect x="150" y="24" width="20" height="8" rx="2" fill="rgba(255,255,255,0.05)"/>
            
            {/* Payment reminder - completed */}
            <circle cx="8" cy="48" r="4" fill="rgba(255,255,255,0.3)"/>
            <path d="M6 48 L7.5 49.5 L10 46.5" stroke="rgba(0,0,0,0.8)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <rect x="20" y="44" width="110" height="8" rx="2" fill="rgba(255,255,255,0.1)"/>
            <rect x="150" y="44" width="20" height="8" rx="2" fill="rgba(255,255,255,0.05)"/>
            
            {/* Deal management - pending */}
            <circle cx="8" cy="68" r="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
            <rect x="20" y="64" width="90" height="8" rx="2" fill="rgba(255,255,255,0.06)"/>
            <rect x="150" y="64" width="20" height="8" rx="2" fill="rgba(255,255,255,0.05)"/>
          </g>
        </svg>
      )
    },
    {
      title: "Automated Workflows",
      description: "Boost efficiency across teams with smart automation Build intelligent workflows that automate multi-step processes across tools and platforms.",
      illustration: (
        <svg viewBox="0 0 280 200" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="workflowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
          </defs>
          
          {/* Central hub */}
          <circle cx="140" cy="100" r="25" fill="url(#workflowGradient)" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
          <g transform="translate(125, 85)">
            <path d="M15 10 L20 15 L15 20 L10 15 Z" fill="rgba(255,255,255,0.8)"/>
            <circle cx="15" cy="15" r="3" fill="rgba(255,255,255,0.4)"/>
          </g>
          
          {/* Connected nodes */}
          <g>
            {/* Top nodes */}
            <rect x="84" y="44" width="12" height="12" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)"/>
            <rect x="184" y="44" width="12" height="12" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)"/>
            
            {/* Side nodes */}
            <rect x="44" y="94" width="12" height="12" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)"/>
            <rect x="224" y="94" width="12" height="12" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)"/>
            
            {/* Bottom nodes */}
            <rect x="84" y="144" width="12" height="12" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)"/>
            <rect x="184" y="144" width="12" height="12" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)"/>
          </g>
          
          {/* Connection lines */}
          <g stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none">
            <line x1="115" y1="82" x2="96" y2="56"/>
            <line x1="165" y1="82" x2="184" y2="56"/>
            <line x1="118" y1="100" x2="56" y2="100"/>
            <line x1="162" y1="100" x2="224" y2="100"/>
            <line x1="115" y1="118" x2="96" y2="144"/>
            <line x1="165" y1="118" x2="184" y2="144"/>
          </g>
        </svg>
      )
    },
    {
      title: "Custom AI Agent Development",
      description: "We develop custom AI agents that integrate seamlessly with your tools.",
      illustration: (
        <svg viewBox="0 0 280 200" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="codeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.03)" />
            </linearGradient>
          </defs>
          
          {/* Code editor window */}
          <rect x="25" y="35" width="230" height="130" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)"/>
          
          {/* Title bar */}
          <rect x="25" y="35" width="230" height="25" rx="8" fill="rgba(255,255,255,0.05)"/>
          <circle cx="40" cy="47" r="3" fill="rgba(255,100,100,0.6)"/>
          <circle cx="52" cy="47" r="3" fill="rgba(255,200,100,0.6)"/>
          <circle cx="64" cy="47" r="3" fill="rgba(100,255,100,0.6)"/>
          
          {/* Code lines */}
          <g transform="translate(35, 75)">
            <rect x="0" y="5" width="200" height="8" rx="2" fill="rgba(255,255,255,0.05)"/>
            <rect x="0" y="20" width="180" height="8" rx="2" fill="rgba(255,255,255,0.05)"/>
            <rect x="0" y="35" width="160" height="8" rx="2" fill="rgba(255,255,255,0.05)"/>
            <rect x="0" y="50" width="190" height="8" rx="2" fill="rgba(255,255,255,0.05)"/>
            <rect x="0" y="65" width="170" height="8" rx="2" fill="rgba(255,255,255,0.05)"/>
            <rect x="0" y="80" width="150" height="8" rx="2" fill="rgba(255,255,255,0.05)"/>
            <rect x="0" y="95" width="140" height="8" rx="2" fill="rgba(255,255,255,0.05)"/>
          </g>
        </svg>
      )
    },
    {
      title: "Real-Time Intelligence",
      description: "Make smarter decisions with live data insights Tap into real-time data.",
      illustration: (
        <svg viewBox="0 0 280 200" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="searchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
          </defs>
          
          {/* Search interface */}
          <rect x="40" y="50" width="200" height="100" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)"/>
          
          {/* Search bar */}
          <rect x="55" y="70" width="130" height="20" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)"/>
          <rect x="190" y="75" width="30" height="10" rx="2" fill="rgba(255,255,255,0.2)"/>
          
          {/* Search results */}
          <g transform="translate(55, 100)">
            <rect x="0" y="0" width="150" height="12" rx="2" fill="rgba(255,255,255,0.06)"/>
            <rect x="0" y="18" width="150" height="12" rx="2" fill="rgba(255,255,255,0.06)"/>
            <rect x="0" y="36" width="150" height="12" rx="2" fill="rgba(255,255,255,0.06)"/>
          </g>
          
          {/* Data visualization bars */}
          <g transform="translate(220, 80)">
            <rect x="0" y="10" width="3" height="15" rx="1" fill="rgba(255,255,255,0.2)"/>
            <rect x="5" y="5" width="3" height="20" rx="1" fill="rgba(255,255,255,0.3)"/>
            <rect x="10" y="0" width="3" height="25" rx="1" fill="rgba(255,255,255,0.4)"/>
            <rect x="15" y="8" width="3" height="17" rx="1" fill="rgba(255,255,255,0.25)"/>
          </g>
        </svg>
      )
    },
    {
      title: "AI Strategy Consulting",
      description: "Get expert guidance to implement AI solutions that drive business growth.",
      illustration: (
        <svg viewBox="0 0 280 200" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
            </linearGradient>
          </defs>
          
          {/* Chart container */}
          <rect x="40" y="40" width="200" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)"/>
          
          {/* Chart lines */}
          <g transform="translate(60, 60)">
            {/* Grid lines */}
            <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
              <line x1="0" y1="0" x2="160" y2="0"/>
              <line x1="0" y1="20" x2="160" y2="20"/>
              <line x1="0" y1="40" x2="160" y2="40"/>
              <line x1="0" y1="60" x2="160" y2="60"/>
              <line x1="0" y1="80" x2="160" y2="80"/>
            </g>
            
            {/* Growth curve */}
            <path d="M0 70 Q40 65 80 45 Q120 25 160 15" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none"/>
            
            {/* Data points */}
            <circle cx="0" cy="70" r="3" fill="rgba(255,255,255,0.6)"/>
            <circle cx="40" cy="60" r="3" fill="rgba(255,255,255,0.6)"/>
            <circle cx="80" cy="45" r="3" fill="rgba(255,255,255,0.6)"/>
            <circle cx="120" cy="30" r="3" fill="rgba(255,255,255,0.6)"/>
            <circle cx="160" cy="15" r="3" fill="rgba(255,255,255,0.6)"/>
            
            {/* Sparkle effects */}
            <g transform="translate(140, 25)">
              <path d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5 Z" fill="rgba(255,255,255,0.6)"/>
            </g>
            <g transform="translate(100, 35)" scale="0.6">
              <path d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5 Z" fill="rgba(255,255,255,0.4)"/>
            </g>
          </g>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
            <span className="text-xs font-medium text-white/70 tracking-wider uppercase">Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Smarter Services, <span className="text-white/40 italic">Built with AI</span>
          </h2>
          
          <p className="text-base text-white/50 max-w-xl mx-auto font-light">
            Everything you need to automate operations, boost productivity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Top row - 2 cards */}
          <div className="lg:col-span-1">
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 h-full">
              <div className="h-48 mb-6 flex items-center justify-center">
                {services[0].illustration}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{services[0].title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{services[0].description}</p>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 h-full">
              <div className="h-48 mb-6 flex items-center justify-center">
                {services[1].illustration}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{services[1].title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{services[1].description}</p>
            </div>
          </div>
          
          {/* Bottom row - 3 cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.slice(2).map((service, index) => (
                <div
                  key={index + 2}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
                >
                  <div className="h-40 mb-6 flex items-center justify-center">
                    {service.illustration}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;