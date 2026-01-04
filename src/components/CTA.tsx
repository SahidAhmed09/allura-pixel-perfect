import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const whatsappLink = "https://wa.me/916900273892";

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center bg-white/[0.02] border border-white/10 p-12 md:p-16 rounded-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build <span className="text-white/40">Together?</span>
          </h2>
          <p className="text-base text-white/50 mb-8 max-w-2xl mx-auto font-light">
            Let's discuss your project and explore how we can bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="rounded-full group">
                Book A Discovery Call
                <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={16} />
              </Button>
            </a>
          </div>
          <p className="text-xs text-white/40 mt-6">
            Free consultation • No commitments • Let's talk about your project
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
