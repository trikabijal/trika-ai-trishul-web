
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-trika-purple opacity-5 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-trika-gold opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <div className="trika-gradient p-1">
                <div className="bg-white p-8 rounded-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full trika-gradient flex items-center justify-center mr-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L10 8H14L12 4Z" fill="white" />
                        <path d="M12 20L14 16H10L12 20Z" fill="white" />
                        <path d="M20 12L16 10V14L20 12Z" fill="white" />
                        <path d="M4 12L8 14V10L4 12Z" fill="white" />
                        <circle cx="12" cy="12" r="2" fill="white" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">The Trika Philosophy</h3>
                  </div>
                  <p className="text-trika-gray mb-4">
                    Trika is a powerful synthesis of ancient wisdom and cutting-edge innovation. 
                    At its core, Trika draws from the Trishul of Lord Shiva—a divine symbol 
                    representing the power to create, preserve, and transform.
                  </p>
                  <p className="text-trika-gray mb-4">
                    These three prongs of the Trishul align seamlessly with our mission:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="gold-text-gradient font-bold mr-2">•</span>
                      <span><span className="font-medium">Create</span> intelligent AI agents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="gold-text-gradient font-bold mr-2">•</span>
                      <span><span className="font-medium">Preserve</span> business value through strategic automation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="gold-text-gradient font-bold mr-2">•</span>
                      <span><span className="font-medium">Transform</span> industries with modern technology</span>
                    </li>
                  </ul>
                  <p className="text-trika-gray">
                    In Sanskrit, Trika also means "triad"—the convergence of three forces. 
                    At Trika, we embody this triad through a unique fusion of mythical insight, 
                    technical mastery, and human-centric design.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="inline-block mb-3 px-3 py-1 rounded-full bg-trika-purple bg-opacity-10 text-trika-purple text-sm font-medium">
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building <span className="text-gradient">Enterprise-Class</span> AI Solutions
            </h2>
            <p className="text-lg text-trika-gray mb-6">
              With over 25 years of experience building enterprise software, we understand that 
              robust solutions are the foundation of successful digital transformation.
            </p>
            
            <div className="mb-8 p-6 bg-trika-light rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Why Our Solutions Don't Break</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full trika-gradient flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Enterprise-Grade Architecture</h4>
                    <p className="text-sm text-trika-gray">Designed with redundancy, scalability, and security at the core.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full trika-gradient flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Model Context Protocol</h4>
                    <p className="text-sm text-trika-gray">Our advanced MCP ensures consistent, reliable AI outputs across all scenarios.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full trika-gradient flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Multiple Capability Platform</h4>
                    <p className="text-sm text-trika-gray">Diversified AI capabilities that adapt and evolve without disrupting operations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full trika-gradient flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Rigorous Testing Protocol</h4>
                    <p className="text-sm text-trika-gray">Every solution undergoes extensive testing beyond industry standards.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-lg font-medium mb-4">
                "I've built Enterprise class software and solutions all my life (>25 years). 
                While new agencies build software that breaks, we build robust solutions that 
                stand the test of time and deliver consistent results."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-trika-purple flex items-center justify-center text-white text-xl font-bold">
                  BS
                </div>
                <div className="ml-4">
                  <p className="font-medium">Bijal Sanghavi</p>
                  <p className="text-sm text-trika-gray">Founder & CEO, Trika.ai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
