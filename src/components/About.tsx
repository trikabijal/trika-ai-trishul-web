import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TrishulIcon from "./TrishulIcon";
const About = () => {
  return <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-orange-100 text-trika-primary text-sm font-medium">
              <TrishulIcon className="w-5 h-5" fill="none" stroke="currentColor" />
              About Trika.ai
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Where Ancient Wisdom Meets{" "}
              <span className="text-gradient">Modern Technology</span>
            </h2>
            <p className="text-lg text-trika-gray mb-6">
              Trika.ai is founded on the principle that the most powerful solutions 
              combine timeless wisdom with cutting-edge innovation. Our name draws 
              inspiration from the Sanskrit concept of "Trika" — the triad of 
              Consciousness, Energy, and Matter that forms the foundation of all existence.
            </p>
            <div className="flex items-center gap-6 mb-6 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-100">
              <TrishulIcon className="w-16 h-16 flex-shrink-0" fill="none" stroke="url(#about-trishul-gradient)" />
              <div>
                <h3 className="font-bold text-lg mb-2">The Power of Trishul</h3>
                <p className="text-trika-gray">The Trishul of Lord Shiva symbolizes the power to Create, Preserve, and Transform — mirroring our mission to 
- Create intelligent AI agents, 
- Preserve business value through strategic automation, and 
- Transform industries with modern technology.</p>
              </div>
            </div>
            
            <p className="text-lg text-trika-gray mb-6">
              Just as this ancient philosophy recognizes the power of three interconnected 
              forces, our approach to AI automation integrates three essential elements:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center text-trika-primary mr-3 mt-1">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg">Enterprise Experience</h3>
                  <p className="text-trika-gray">
                    25+ years building mission-critical software that doesn't break
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center text-trika-primary mr-3 mt-1">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg">AI Expertise</h3>
                  <p className="text-trika-gray">
                    Deep understanding of LLMs, agents, and automation architectures
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center text-trika-primary mr-3 mt-1">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg">Business Acumen</h3>
                  <p className="text-trika-gray">
                    Strategic focus on solutions that deliver measurable ROI
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="group">
              Meet Our Team
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/about-image.jpg" alt="Trika.ai team" className="w-full h-full object-cover" onError={e => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
            }} />
            </div>
            
            
            
            <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg max-w-xs">
              <div className="flex items-center mb-2">
                <div className="h-3 w-3 rounded-full bg-trika-primary mr-2"></div>
                <p className="font-medium">Client Satisfaction</p>
              </div>
              <div className="text-2xl font-bold text-trika-primary mb-1">4.9/5</div>
              <p className="text-sm text-trika-gray">Average client satisfaction score</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* SVG gradient definitions for the Trishul */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="about-trishul-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#F0B429" />
          </linearGradient>
        </defs>
      </svg>
    </section>;
};
export default About;