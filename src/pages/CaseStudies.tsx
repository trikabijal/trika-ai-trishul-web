
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    title: "AXONO: Turning Meeting Notes into Actionable Tasks",
    industry: "Technology",
    challenge: "Organizations were struggling to transform AI-generated meeting notes into actionable tasks, resulting in lost commitments and reduced accountability.",
    solution: "We developed AXONO, a system that seamlessly converts meeting notes from email into structured tasks within tools like Jira, Asana, and Todoist without requiring behavioral change.",
    results: [
      "85% reduction in lost action items from meetings",
      "42% increase in post-meeting task completion rates",
      "2.5 hours saved per week per user on manual task entry"
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    link: "/case-studies/axono"
  },
  {
    title: "Automating Customer Engagement with the AI Receptionist",
    industry: "Customer Service",
    challenge: "Businesses were struggling to manage high volumes of repetitive customer queries across multiple channels, consuming valuable staff time.",
    solution: "We developed the AI Receptionist, an intelligent automation layer designed to handle 80% of all front-desk customer interactions on WhatsApp and voice calls.",
    results: [
      "40-60% reduction in manual receptionist workload",
      "Faster response times, especially during high-traffic periods",
      "Higher customer satisfaction with 24/7 availability"
    ],
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    link: "/case-studies/ai-receptionist"
  },
  {
    title: "Intelligent Document Processing for Legal Firm",
    industry: "Legal",
    challenge: "A law firm struggling with thousands of documents needed a solution to automatically extract, categorize, and summarize key information.",
    solution: "We developed an AI-powered document processing system that reduced manual review time by 75%.",
    results: [
      "75% reduction in document review time",
      "85% accuracy in legal information extraction",
      "Cost savings of over $500,000 annually"
    ],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
  {
    title: "Customer Support Automation for E-commerce",
    industry: "Retail",
    challenge: "A major online retailer was struggling with high support ticket volume and limited staff resources.",
    solution: "We built an AI agent that could handle 80% of customer inquiries without human intervention.",
    results: [
      "80% automation rate for customer inquiries",
      "Customer satisfaction improved by 32%",
      "Support team refocused on complex high-value cases"
    ],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
  },
  {
    title: "Predictive Maintenance for Manufacturing",
    industry: "Manufacturing",
    challenge: "A manufacturing plant was experiencing unexpected equipment failures causing costly production downtime.",
    solution: "We implemented a machine learning system that predicts equipment failure before it occurs.",
    results: [
      "98% accuracy in predicting failures 2 weeks in advance",
      "Downtime reduced by 63%",
      "Maintenance costs reduced by 42%"
    ],
    image: "https://images.unsplash.com/photo-1531758565361-4a9cc4833bba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  }
];

const CaseStudies = () => {
  const openCalendly = () => {
    window.open("https://calendly.com/bijal-trika/30-minute-ai-and-automation-conversation-clone", "_blank");
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12">
            <Button variant="outline" className="mb-6" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-trika-gray max-w-3xl">
              Explore how our AI solutions have delivered measurable results for clients 
              across different industries and use cases.
            </p>
          </div>
          
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="bg-trika-light px-4 py-1 rounded-full text-trika-primary text-sm font-medium inline-block mb-3">
                    {study.industry}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-lg text-trika-primary mb-1">Challenge</h3>
                      <p className="text-trika-gray">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-trika-primary mb-1">Solution</h3>
                      <p className="text-trika-gray">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-trika-primary mb-1">Results</h3>
                      <ul className="list-disc pl-5 text-trika-gray space-y-1">
                        {study.results.map((result, i) => (
                          <li key={i}>{result}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {study.link && (
                    <div className="mt-4">
                      <Button variant="outline" className="text-trika-primary border-trika-primary" asChild>
                        <Link to={study.link}>
                          View Full Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
                <div className={`rounded-xl overflow-hidden shadow-lg ${
                  index % 2 !== 0 ? 'lg:order-1' : ''
                }`}>
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-trika-light rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to achieve similar results?</h2>
            <p className="text-lg text-trika-gray mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can address your specific business challenges.
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
      
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default CaseStudies;
