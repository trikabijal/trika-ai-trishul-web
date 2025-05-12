import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-3 px-3 py-1 rounded-full bg-trika-purple bg-opacity-10 text-trika-purple text-sm font-medium">
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
            <p className="text-lg text-trika-gray mb-6">
              Just as this ancient philosophy recognizes the power of three interconnected 
              forces, our approach to AI automation integrates three essential elements:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-trika-purple bg-opacity-10 flex items-center justify-center text-trika-purple mr-3 mt-1">
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
                <div className="h-6 w-6 rounded-full bg-trika-purple bg-opacity-10 flex items-center justify-center text-trika-purple mr-3 mt-1">
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
                <div className="h-6 w-6 rounded-full bg-trika-purple bg-opacity-10 flex items-center justify-center text-trika-purple mr-3 mt-1">
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
              <img 
                src="/images/about-image.jpg" 
                alt="Trika.ai team" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
                }}
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg max-w-xs">
              <div className="flex items-center mb-2">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                <p className="font-medium">Success Rate</p>
              </div>
              <div className="text-2xl font-bold text-trika-purple mb-1">98.7%</div>
              <p className="text-sm text-trika-gray">Project success rate over 5 years</p>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg max-w-xs">
              <div className="flex items-center mb-2">
                <div className="h-3 w-3 rounded-full bg-trika-purple mr-2"></div>
                <p className="font-medium">Client Satisfaction</p>
              </div>
              <div className="text-2xl font-bold text-trika-purple mb-1">4.9/5</div>
              <p className="text-sm text-trika-gray">Average client satisfaction score</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
