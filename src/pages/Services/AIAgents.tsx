
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bot, Check } from "lucide-react";
import { Link } from "react-router-dom";

const AIAgents = () => {
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
            <div className="bg-trika-primary rounded-lg h-14 w-14 flex items-center justify-center">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">AI Agents Development</h1>
          </div>
          
          <p className="text-xl text-trika-gray mb-12 max-w-3xl">
            We build intelligent AI agents that automate complex tasks and workflows, 
            creating efficient systems that adapt and learn to transform your business operations.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold mb-6">Enterprise-Grade AI Automation</h2>
              <p className="text-lg text-trika-gray mb-6">
                Our AI agents are built with enterprise needs in mind—reliable, secure, and 
                designed to integrate seamlessly with your existing systems and workflows. 
                Unlike fragile implementations that break under real-world conditions, 
                our solutions are robust and production-ready.
              </p>
              
              <h3 className="text-xl font-bold mb-4">How We Build AI Agents</h3>
              <div className="space-y-8 mb-8">
                <div className="flex gap-4">
                  <div className="bg-orange-100 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-trika-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Requirements Analysis</h4>
                    <p className="text-trika-gray">
                      We begin by deeply understanding your business processes, pain points, 
                      and automation objectives to identify high-ROI opportunities.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-orange-100 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-trika-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Agent Architecture Design</h4>
                    <p className="text-trika-gray">
                      We design a scalable architecture that combines LLMs, custom tools, 
                      integrations, and knowledge bases tailored to your specific use case.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-orange-100 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-trika-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Development & Testing</h4>
                    <p className="text-trika-gray">
                      Our experienced team builds the agent with rigorous testing to ensure 
                      reliability, accuracy, and performance in real-world scenarios.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-orange-100 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-trika-primary font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Deployment & Optimization</h4>
                    <p className="text-trika-gray">
                      We deploy your AI agent into production with monitoring systems and 
                      continually optimize its performance based on real usage data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-orange-50 to-white rounded-xl p-6 border border-orange-100">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-trika-primary mr-2 mt-0.5" />
                  <span>Custom agent creation tailored to your specific needs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-trika-primary mr-2 mt-0.5" />
                  <span>Integration with existing systems and workflows</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-trika-primary mr-2 mt-0.5" />
                  <span>Ongoing optimization and maintenance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-trika-primary mr-2 mt-0.5" />
                  <span>Enterprise-grade reliability and security</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-trika-primary mr-2 mt-0.5" />
                  <span>Scalable architecture for growing needs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-trika-primary mr-2 mt-0.5" />
                  <span>Performance monitoring and analytics</span>
                </li>
              </ul>
              
              <Button onClick={openCalendly} className="w-full orange-gradient text-white py-2">
                Schedule a Consultation
              </Button>
            </div>
          </div>
          
          <div className="bg-trika-light rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Common AI Agent Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Customer Service</h3>
                <p className="text-trika-gray">
                  AI agents that understand customer inquiries, respond accurately, and handle routine tasks.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Document Processing</h3>
                <p className="text-trika-gray">
                  Extract, summarize, and analyze information from various document types.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Data Analysis</h3>
                <p className="text-trika-gray">
                  AI-powered data analysts that generate insights from complex business data.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Process Automation</h3>
                <p className="text-trika-gray">
                  End-to-end workflow automation of multi-step business processes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Knowledge Management</h3>
                <p className="text-trika-gray">
                  Intelligent systems that organize, retrieve, and deliver company knowledge.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Decision Support</h3>
                <p className="text-trika-gray">
                  AI assistants that help professionals make better informed decisions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to automate with intelligent AI?</h2>
            <p className="text-lg text-trika-gray mb-6 max-w-2xl mx-auto">
              Let's discuss your specific needs and design an AI agent solution that delivers measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={openCalendly}
                className="orange-gradient text-white px-6 py-2"
              >
                Book a Consultation
              </Button>
              <Button 
                variant="outline"
                className="border-trika-primary text-trika-primary hover:bg-trika-primary hover:text-white"
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

export default AIAgents;
