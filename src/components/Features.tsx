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
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            All Features <span className="text-gradient">In One Place</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to automate, scale, and succeed
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-xl hover:bg-glass/60 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
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
