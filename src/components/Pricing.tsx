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
    <section id="pricing" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Flexible Plans <span className="text-gradient">For Agency</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border ${
                plan.popular
                  ? "border-primary shadow-glow scale-105"
                  : "border-border"
              } rounded-2xl p-8 card-hover`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary px-4 py-1 rounded-full text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-5xl font-bold text-gradient">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-2">
                      {plan.period}
                    </span>
                  )}
                </div>
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  {plan.price === "Let's Talk" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>

              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-primary" size={14} />
                    </div>
                    <span className="text-sm text-muted-foreground">
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
