import { Zap, Shield, TrendingUp, Users } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing-fast automation that saves you hours every day",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols to protect your data",
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Our solutions grow with your business, from startup to enterprise",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 dedicated support team ready to help you succeed",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">Us?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with exceptional service to deliver
            results that exceed expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-2xl card-hover group"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
