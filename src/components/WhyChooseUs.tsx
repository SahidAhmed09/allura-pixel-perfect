import { Zap, Shield, TrendingUp, Users } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing-fast automation that saves you hours every single day",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols to protect your valuable data",
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Our solutions grow seamlessly with your business from startup to enterprise",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 dedicated support team always ready to help you succeed",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Why Choose <span className="text-white/40">Us?</span>
          </h2>
          <p className="text-base text-white/50 max-w-2xl mx-auto font-light">
            We combine cutting-edge technology with exceptional service to deliver
            results that consistently exceed expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/[0.02] border border-white/10 p-7 rounded-xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-white/10 transition-colors">
                <feature.icon className="text-white" size={22} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
