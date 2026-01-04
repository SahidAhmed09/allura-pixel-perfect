import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does Allura Tech offer?",
      answer:
        "We provide AI automation, custom web development, mobile app development, and AI strategy consulting. Our full-stack expertise allows us to deliver complete digital solutions tailored to your business needs.",
    },
    {
      question: "How do we get started working together?",
      answer:
        "Simply book a discovery call with us! We'll discuss your project requirements, understand your goals, and create a customized proposal. There's no commitment required for the initial consultation.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. A simple website might take 2-4 weeks, while a full mobile app or complex automation system could take 2-3 months. We'll provide a detailed timeline after understanding your requirements.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes! We offer maintenance and support packages to ensure your solution continues to perform optimally. This includes updates, bug fixes, and feature enhancements as your business grows.",
    },
    {
      question: "What makes Allura Tech different from other agencies?",
      answer:
        "We combine expertise in AI, web, and mobile development under one roof. This means seamless integration across all your digital touchpoints and a single team that truly understands your entire tech ecosystem.",
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
            Everything you need to know about working with us
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
