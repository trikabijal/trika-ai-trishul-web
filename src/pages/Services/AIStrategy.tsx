
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Check, ChartBar } from "lucide-react";
import { Link } from "react-router-dom";

const AIStrategy = () => {
  const openCalendly = () => {
    window.open("https://calendly.com/bijal-trika/30min", "_blank");
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
            <div className="bg-trika-secondary rounded-lg h-14 w-14 flex items-center justify-center">
              <Search className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">AI Strategy Consulting</h1>
          </div>
          
          <p className="text-xl text-trika-gray mb-12 max-w-3xl">
            Our consultants identify high-impact automation opportunities in your business, 
            with clear ROI and implementation strategies that ensure successful AI adoption.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold mb-6">Strategic AI Implementation</h2>
              <p className="text-lg text-trika-gray mb-6">
                AI adoption fails when it lacks strategic direction and measurable objectives. 
                Our consulting approach ensures you invest in AI solutions that align with your 
                business goals and deliver tangible value. With 25+ years of enterprise experience, 
                we help you navigate the complex AI landscape to find the right opportunities.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Our Consulting Process</h3>
              <div className="space-y-8 mb-8">
                <div className="flex gap-4">
                  <div className="bg-orange-100 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-trika-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Business Process Analysis</h4>
                    <p className="text-trika-gray">
                      We conduct a thorough review of your current business processes, 
                      identifying inefficiencies and opportunities for AI enhancement.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-orange-100 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-trika-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">AI Readiness Assessment</h4>
                    <p className="text-trika-gray">
                      We evaluate your technical infrastructure, data assets, and organizational 
                      culture to determine preparedness for AI implementation.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-orange-100 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-trika-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Opportunity Prioritization</h4>
                    <p className="text-trika-gray">
                      We rank AI opportunities based on potential business impact, implementation 
                      complexity, and expected ROI to create a strategic roadmap.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-orange-100 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-trika-primary font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Implementation Planning</h4>
                    <p className="text-trika-gray">
                      We develop detailed implementation plans with technology recommendations, 
                      resource requirements, timelines, and success metrics.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-100 mb-8">
                <div className="flex items-start gap-4">
                  <ChartBar className="h-10 w-10 text-trika-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">ROI-Driven Approach</h3>
                    <p className="text-trika-gray">
                      Our consulting focuses on measurable outcomes. Every AI initiative we recommend 
                      comes with clear ROI projections and success metrics to ensure your investment 
                      delivers tangible business value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-yellow-50 to-white rounded-xl p-6 border border-yellow-100">
              <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-trika-secondary mr-2 mt-0.5" />
                  <span>Comprehensive business process analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-trika-secondary mr-2 mt-0.5" />
                  <span>AI readiness assessment</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-trika-secondary mr-2 mt-0.5" />
                  <span>ROI forecasting and measurement</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-trika-secondary mr-2 mt-0.5" />
                  <span>Strategic implementation roadmap</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-trika-secondary mr-2 mt-0.5" />
                  <span>Technology selection guidance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-trika-secondary mr-2 mt-0.5" />
                  <span>Change management support</span>
                </li>
              </ul>
              
              <Button onClick={openCalendly} className="w-full gold-gradient text-white py-2">
                Schedule a Consultation
              </Button>
            </div>
          </div>
          
          <div className="bg-trika-light rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Industries We Serve</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Financial Services</h3>
                <p className="text-trika-gray">
                  AI strategies for risk assessment, fraud detection, and customer service automation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Healthcare</h3>
                <p className="text-trika-gray">
                  AI implementation for patient care, administrative efficiency, and clinical decision support.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Manufacturing</h3>
                <p className="text-trika-gray">
                  AI strategies for predictive maintenance, quality control, and supply chain optimization.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Retail</h3>
                <p className="text-trika-gray">
                  AI implementation for inventory management, customer experience, and demand forecasting.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to develop your AI strategy?</h2>
            <p className="text-lg text-trika-gray mb-6 max-w-2xl mx-auto">
              Let's identify the highest-impact AI opportunities for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={openCalendly}
                className="gold-gradient text-white px-6 py-2"
              >
                Book a Consultation
              </Button>
              <Button 
                variant="outline"
                className="border-trika-secondary text-trika-secondary hover:bg-trika-secondary hover:text-white"
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

export default AIStrategy;
