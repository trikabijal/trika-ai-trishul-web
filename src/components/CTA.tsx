
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 trika-gradient">
      <div className="container mx-auto px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Robust AI Solutions That Don't Break?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Don't waste resources on fragile AI implementations. Partner with Trika.ai 
            for enterprise-grade solutions built by veterans with 25+ years of experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-trika-purple hover:bg-opacity-90 text-lg px-8">
              Schedule a Consultation
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:bg-opacity-10 text-lg px-8 group">
              View Case Studies
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
