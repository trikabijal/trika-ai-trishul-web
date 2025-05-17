
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AIReceptionistCaseStudy = () => {
  const openCalendly = () => {
    window.open("https://calendly.com/bijal-trika/30min", "_blank");
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12">
            <Button variant="outline" className="mb-6" asChild>
              <Link to="/case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Automating Customer Engagement with the AI Receptionist</h1>
            <div className="bg-trika-light px-4 py-1 rounded-full text-trika-primary text-sm font-medium inline-block mb-6">
              Customer Service
            </div>
            <p className="text-xl text-trika-gray max-w-3xl">
              How we helped businesses automate 80% of front-desk customer interactions and reduce manual workload by up to 60%.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Client Context</h2>
                  <p className="text-trika-gray mb-4">
                    Businesses today face a consistent challenge: managing a high volume of repetitive customer queries 
                    across channels like WhatsApp and phone calls. These interactions—often basic questions about service hours, 
                    pricing, or booking—consume valuable time from human staff who could be focusing on higher-value tasks.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                  <p className="text-trika-gray mb-4">
                    Receptionists are typically the first point of contact for prospects and returning customers. 
                    However, much of their time is spent answering the same set of frequently asked questions, scheduling 
                    appointments, collecting customer information, or confirming standard pricing. Scaling this without 
                    increasing headcount has become increasingly difficult, especially for service-based businesses.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">The Solution: AI Receptionist</h2>
                  <p className="text-trika-gray mb-4">
                    We developed the AI Receptionist, an intelligent automation layer designed to handle 80% of all 
                    front-desk customer interactions—on WhatsApp (both voice and text) and voice calls.
                  </p>
                  <p className="text-trika-gray mb-4">
                    The system is capable of understanding multiple languages and works in real time. It can:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-trika-gray">
                    <li>Answer questions from an ingested SOP document (e.g., working hours, services provided).</li>
                    <li>Provide rate information from a dynamic rate card (e.g., pricing based on cloth color, quality, and type).</li>
                    <li>Collect contact details and push them directly into the client's CRM.</li>
                    <li>Qualify leads by asking contextual questions and categorizing them into hot, warm, or cold buckets.</li>
                    <li>Set up appointments by checking customer availability and saving the schedule.</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">Business Impact</h2>
                  <p className="text-trika-gray mb-4">
                    By automating common interactions, the AI Receptionist allowed the client's human team to focus on more 
                    complex queries and sales efforts. Initial tests showed:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-trika-gray">
                    <li>A 40–60% reduction in manual receptionist workload.</li>
                    <li>Faster response times, especially during high-traffic periods.</li>
                    <li>Higher customer satisfaction, thanks to instant replies, even after hours.</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">Planned Enhancements</h2>
                  <p className="text-trika-gray mb-4">
                    The system is architected for easy extension. Future roadmap includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-trika-gray">
                    <li>Handling order tracking, refunds, cancellations.</li>
                    <li>Updating customer account information via chat.</li>
                    <li>Supporting full voice-call interactions with speech-to-intent processing.</li>
                  </ul>
                </section>
              </div>
            </div>
            
            <div className="lg:col-span-4">
              <div className="bg-trika-light p-6 rounded-xl sticky top-32">
                <h3 className="text-xl font-bold mb-4">Key Results</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-3xl font-bold text-trika-primary">40-60%</p>
                    <p className="text-sm text-trika-gray">Reduction in manual workload</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-3xl font-bold text-trika-primary">80%</p>
                    <p className="text-sm text-trika-gray">Front-desk interactions automated</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-3xl font-bold text-trika-primary">24/7</p>
                    <p className="text-sm text-trika-gray">Customer support availability</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button 
                    onClick={openCalendly} 
                    className="w-full bg-trika-primary hover:bg-trika-primary/90 text-white"
                  >
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-trika-light rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Looking to automate your customer interactions?</h2>
            <p className="text-lg text-trika-gray mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI Receptionist solution can be customized for your specific business needs.
            </p>
            <Button 
              onClick={openCalendly}
              className="orange-gradient text-white px-6 py-2 text-lg hover:opacity-90"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      <CTA />
      <Footer />
    </div>
  );
};

export default AIReceptionistCaseStudy;
