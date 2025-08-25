
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Check, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const SoftwareDevelopment = () => {
  const openCalendly = () => {
    window.open("https://calendly.com/bijal-trika/30-minute-ai-and-automation-conversation-clone", "_blank");
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <Button variant="outline" className="mb-6" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-trika-dark rounded-lg h-14 w-14 flex items-center justify-center">
              <Code className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Software Product Development</h1>
          </div>
          
          <p className="text-xl text-trika-gray mb-12 max-w-3xl">
            Leveraging 25+ years of enterprise software experience, we build robust, 
            scalable products that stand the test of time and meet your business objectives.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold mb-6">Enterprise-Grade Software Development</h2>
              <p className="text-lg text-trika-gray mb-6">
                In a world where software often breaks under real-world conditions, 
                our development team brings decades of experience building mission-critical 
                systems that remain reliable at scale. We combine foundational computer 
                science principles with modern development practices to create software 
                that works consistently and delivers long-term value.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Our Development Process</h3>
              <div className="space-y-8 mb-8">
                <div className="flex gap-4">
                  <div className="bg-orange-100 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-trika-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Requirements Engineering</h4>
                    <p className="text-trika-gray">
                      We work closely with stakeholders to define comprehensive requirements that 
                      align with your business goals and user needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-orange-100 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-trika-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Architecture Design</h4>
                    <p className="text-trika-gray">
                      Our architects design scalable, maintainable systems that can evolve 
                      with your business and integrate emerging technologies like AI.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-orange-100 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-trika-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Agile Development</h4>
                    <p className="text-trika-gray">
                      We use iterative development processes with continuous feedback to 
                      ensure the product meets your needs at every stage.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-orange-100 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-trika-primary font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">QA & Deployment</h4>
                    <p className="text-trika-gray">
                      Rigorous testing and streamlined deployment processes ensure high-quality, 
                      reliable software that works in production environments.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border border-gray-200 mb-8">
                <div className="flex items-start gap-4">
                  <Shield className="h-10 w-10 text-trika-dark flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Built to Last</h3>
                    <p className="text-trika-gray">
                      Our software is designed with robustness in mind. We implement comprehensive 
                      error handling, rigorous testing, and architecture that allows for future 
                      growth and change—ensuring your investment provides value for years to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-trika-dark mr-2 mt-0.5" />
                  <span>End-to-end product development</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-trika-dark mr-2 mt-0.5" />
                  <span>Model Context Protocol (MCP) integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-trika-dark mr-2 mt-0.5" />
                  <span>Multiple Capability Platform architecture</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-trika-dark mr-2 mt-0.5" />
                  <span>Enterprise-grade reliability built-in</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-trika-dark mr-2 mt-0.5" />
                  <span>Comprehensive testing and QA</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-trika-dark mr-2 mt-0.5" />
                  <span>AI capability integration</span>
                </li>
              </ul>
              
              <Button onClick={openCalendly} className="w-full bg-trika-dark text-white py-2 hover:bg-gray-700">
                Schedule a Consultation
              </Button>
            </div>
          </div>
          
          <div className="bg-trika-light rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Technology Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-bold text-lg mb-2">AI Infrastructure</h3>
                <p className="text-trika-gray">
                  LLM integration, embeddings, vector databases, agent frameworks
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-bold text-lg mb-2">Enterprise Backend</h3>
                <p className="text-trika-gray">
                  Scalable APIs, microservices, database optimization, integration patterns
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-bold text-lg mb-2">Modern Frontend</h3>
                <p className="text-trika-gray">
                  Responsive UI, design systems, state management, interactive dashboards
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-bold text-lg mb-2">DevOps</h3>
                <p className="text-trika-gray">
                  CI/CD pipelines, monitoring, containerization, cloud infrastructure
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to build software that works?</h2>
            <p className="text-lg text-trika-gray mb-6 max-w-2xl mx-auto">
              Let's discuss your product vision and create a solution that delivers lasting value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={openCalendly}
                className="bg-trika-dark text-white px-6 py-2 hover:bg-gray-700"
              >
                Book a Consultation
              </Button>
              <Button 
                variant="outline"
                className="border-trika-dark text-trika-dark hover:bg-trika-dark hover:text-white"
                asChild
              >
                <Link to="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SoftwareDevelopment;
