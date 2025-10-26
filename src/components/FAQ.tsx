import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can I get started?",
      answer:
        "You can get started in minutes! Simply sign up, and our intuitive onboarding process will guide you through setting up your first automation. Most customers are fully operational within 24 hours.",
    },
    {
      question: "What integrations do you support?",
      answer:
        "We support over 1,000+ integrations including popular tools like Slack, Google Workspace, Salesforce, HubSpot, and many more. Our API also allows for custom integrations with any system.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use bank-grade encryption (AES-256) for data at rest and in transit. We're SOC 2 Type II certified and fully GDPR compliant. Your data security is our top priority.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time with no penalties or hidden fees. We believe in earning your business every month. Your data remains accessible for 90 days after cancellation.",
    },
    {
      question: "Do you offer training and support?",
      answer:
        "Yes! All plans include comprehensive documentation, video tutorials, and email support. Professional and Custom plans include priority 24/7 support and dedicated account managers.",
    },
    {
      question: "What makes Allura Tech different?",
      answer:
        "We combine powerful automation with simplicity. Unlike complex enterprise tools, our platform is designed for real businesses. You get enterprise-grade features without the enterprise complexity or cost.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Frequently Asked <span className="text-white/40">Questions</span>
          </h2>
          <p className="text-base text-white/50 max-w-2xl mx-auto font-light">
            Everything you need to know about Allura Tech
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/[0.02] border border-white/10 px-6 rounded-xl data-[state=open]:bg-white/[0.04]"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-base text-white">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-white/50 pb-5 text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
