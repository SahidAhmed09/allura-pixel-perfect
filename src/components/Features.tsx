import {
  Check,
  Clock,
  Target,
  BarChart3,
  Lock,
  Zap,
  Headphones,
  RefreshCw,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Check,
      title: "Easy Integration",
      description: "Connect with your existing tools in minutes",
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Monitor productivity and optimize workflows",
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Set and achieve your business objectives",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time insights into your operations",
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "Enterprise-grade security for peace of mind",
    },
    {
      icon: Zap,
      title: "Instant Deployment",
      description: "Go live in hours, not weeks",
    },
    {
      icon: Headphones,
      title: "Priority Support",
      description: "Get help whenever you need it",
    },
    {
      icon: RefreshCw,
      title: "Auto Updates",
      description: "Always access the latest features",
    },
  ];

  return (
    <section id="features" className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            All Features <span className="text-white/40">In One Place</span>
          </h2>
          <p className="text-base text-white/50 max-w-2xl mx-auto font-light">
            Everything you need to automate, scale, and succeed
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/[0.02] border border-white/10 p-6 rounded-xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <feature.icon className="text-white" size={20} />
                </div>
                <h3 className="text-base font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
