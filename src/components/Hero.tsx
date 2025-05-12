
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 bg-gradient-to-br from-white to-trika-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-3 px-3 py-1 rounded-full bg-trika-purple bg-opacity-10 text-trika-purple text-sm font-medium">
              Enterprise-Grade AI Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Robust AI Automation with{" "}
              <span className="text-gradient">Ancient Wisdom</span>
            </h1>
            <p className="text-lg md:text-xl text-trika-gray mb-8 max-w-xl">
              Where spiritual symbolism meets state-of-the-art automation—empowering 
              businesses to evolve with clarity, precision, and transformative impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="trika-gradient text-white px-8 py-6 text-lg hover:opacity-90">
                Book a Consultation
              </Button>
              <Button variant="outline" className="group px-8 py-6 text-lg border-trika-purple text-trika-purple hover:bg-trika-purple hover:text-white">
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-trika-purple opacity-10 blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-trika-gold opacity-20 blur-3xl animate-pulse-slow"></div>
            
            <div className="relative z-10 bg-white rounded-xl shadow-xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="trika-gradient rounded-lg h-10 w-10 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L10 8H14L12 4Z" fill="white" />
                  <path d="M12 20L14 16H10L12 20Z" fill="white" />
                  <path d="M20 12L16 10V14L20 12Z" fill="white" />
                  <path d="M4 12L8 14V10L4 12Z" fill="white" />
                  <circle cx="12" cy="12" r="2" fill="white" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">25+ Years of Excellence</h3>
              <p className="text-trika-gray mb-6">
                While others build software that breaks, we build robust enterprise solutions 
                that stand the test of time. Our expertise spans over 25 years of delivering 
                mission-critical systems.
              </p>
              <div className="flex justify-between items-center border-t pt-6 border-gray-100">
                <div>
                  <p className="font-medium">Bijal Sanghavi</p>
                  <p className="text-sm text-trika-gray">Founder, Trika.ai</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-trika-purple font-medium">Experience That Matters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
