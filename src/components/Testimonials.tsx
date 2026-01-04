import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Allura Tech transformed our entire workflow. Their AI automation saved us 40+ hours per week and their web development team delivered a stunning platform.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthLabs",
      content: "The team at Allura built us a custom mobile app that exceeded all expectations. Professional, responsive, and incredibly skilled.",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "COO, ScaleUp Inc",
      content: "Working with Allura was seamless. They understood our vision and delivered an automation solution that revolutionized our operations.",
      avatar: "ER",
    },
    {
      name: "David Park",
      role: "Director, InnovateCo",
      content: "Their expertise in both AI and web development is unmatched. Allura delivered a complete digital transformation for our business.",
      avatar: "DP",
    },
    {
      name: "Lisa Thompson",
      role: "CTO, FutureTech",
      content: "Exceptional quality and attention to detail. The Allura team went above and beyond to ensure our project was a success.",
      avatar: "LT",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What Our Clients <span className="text-white/40">Say</span>
          </h2>
          <p className="text-base text-white/50 max-w-2xl mx-auto font-light">
            Trusted by businesses worldwide
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 h-full transition-all duration-500 hover:bg-white/[0.06] hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 text-sm font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-xs text-white/40">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-white/20 bg-white/5 hover:bg-white/10 text-white -left-4" />
            <CarouselNext className="border-white/20 bg-white/5 hover:bg-white/10 text-white -right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
