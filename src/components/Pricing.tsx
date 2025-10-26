import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$50",
      period: "/month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 10 team members",
        "Basic automation workflows",
        "5GB storage",
        "Email support",
        "Basic analytics",
        "Mobile app access",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$80",
      period: "/month",
      description: "For growing businesses that need more",
      features: [
        "Up to 50 team members",
        "Advanced automation",
        "50GB storage",
        "Priority support 24/7",
        "Advanced analytics",
        "API access",
        "Custom integrations",
        "White-label options",
      ],
      popular: true,
    },
    {
      name: "Custom",
      price: "Let's Talk",
      period: "",
      description: "Enterprise solutions tailored to you",
      features: [
        "Unlimited team members",
        "Custom workflows",
        "Unlimited storage",
        "Dedicated account manager",
        "Custom analytics",
        "SLA guarantees",
        "On-premise deployment",
        "Advanced security",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Flexible Plans <span className="text-white/40">For Agency</span>
          </h2>
          <p className="text-base text-white/50 max-w-2xl mx-auto font-light">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/[0.02] border ${
                plan.popular
                  ? "border-white/30 shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                  : "border-white/10"
              } rounded-2xl p-8 hover:bg-white/[0.04] transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-black px-4 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-xs text-white/40 mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-white/40 ml-2 text-sm">
                      {plan.period}
                    </span>
                  )}
                </div>
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full rounded-full"
                  size="default"
                >
                  {plan.price === "Let's Talk" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/10">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-white" size={12} />
                    </div>
                    <span className="text-xs text-white/50">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
