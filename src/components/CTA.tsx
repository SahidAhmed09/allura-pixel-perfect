import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center bg-white/[0.02] border border-white/10 p-12 md:p-16 rounded-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Automate <span className="text-white/40">Smarter?</span>
          </h2>
          <p className="text-base text-white/50 mb-8 max-w-2xl mx-auto font-light">
            Join thousands of businesses already transforming their operations
            with Allura Tech. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="hero" size="lg" className="rounded-full group">
              Start Free Trial
              <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={16} />
            </Button>
            <Button variant="glass" size="lg" className="rounded-full">
              Schedule Demo
            </Button>
          </div>
          <p className="text-xs text-white/40 mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
