import { Code, Cpu, Database, Globe, Smartphone, Workflow } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Streamline your workflows with intelligent automation",
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored solutions built for your unique needs",
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamlessly connect all your business systems",
    },
    {
      icon: Cpu,
      title: "AI Solutions",
      description: "Leverage artificial intelligence for smarter decisions",
    },
    {
      icon: Globe,
      title: "Cloud Services",
      description: "Scalable infrastructure for growing businesses",
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Native apps that delight users on any device",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Smarter Services, <span className="text-gradient">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border p-8 rounded-2xl card-hover"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
