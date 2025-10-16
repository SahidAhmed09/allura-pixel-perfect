import { Code, Cpu, Database, Globe, Smartphone, Workflow } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Streamline your workflows with intelligent automation solutions",
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions built for your unique business needs",
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamlessly connect all your business systems and data sources",
    },
    {
      icon: Cpu,
      title: "AI Solutions",
      description: "Leverage artificial intelligence for smarter business decisions",
    },
    {
      icon: Globe,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure for rapidly growing businesses",
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Native mobile apps that delight users on any device",
    },
  ];

  return (
    <section id="services" className="py-24 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Smarter Services, <span className="text-white/40">Results</span>
          </h2>
          <p className="text-base text-white/50 max-w-2xl mx-auto font-light">
            Comprehensive solutions designed to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/[0.02] border border-white/10 p-8 rounded-xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
            >
              <div className="w-11 h-11 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-5">
                <service.icon className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">
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
