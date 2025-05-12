
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Briefcase, Globe, Database, Rocket } from "lucide-react";

const verticals = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Healthcare",
    cases: [
      {
        title: "Patient Care Automation",
        description: "AI agents that monitor patient data in real-time, flagging potential issues before they become critical and automating routine care tasks.",
        results: "30% reduction in administrative workload for nurses; 22% improvement in early intervention rates"
      },
      {
        title: "Medical Records Analysis",
        description: "Advanced NLP systems that extract, categorize, and analyze medical records to identify patterns and improve diagnostic accuracy.",
        results: "99.2% accuracy in data extraction; 28% faster diagnosis time"
      },
      {
        title: "Pharmaceutical Research Assistant",
        description: "An AI agent that accelerates drug discovery by analyzing research papers, clinical trials data, and molecular structures.",
        results: "40% reduction in early research phase timelines; 3.5x more potential compounds identified"
      }
    ]
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Finance",
    cases: [
      {
        title: "Fraud Detection System",
        description: "Real-time transaction monitoring with advanced pattern recognition to identify and prevent fraudulent activities before they complete.",
        results: "92% fraud detection rate; $4.3M in prevented losses within first quarter"
      },
      {
        title: "Investment Analysis Agent",
        description: "AI system that processes market data, company reports, and news to provide actionable investment insights.",
        results: "28% improvement in portfolio performance; 65% reduction in analysis time"
      },
      {
        title: "Automated Compliance Monitor",
        description: "Continuous regulatory compliance monitoring and documentation system that adapts to changing regulations.",
        results: "100% compliance documentation coverage; 71% reduction in manual compliance checks"
      }
    ]
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Retail",
    cases: [
      {
        title: "Inventory Optimization System",
        description: "AI solution that predicts inventory needs across multiple locations, optimizing stock levels and reducing waste.",
        results: "32% reduction in overstocking; 18% decrease in stockouts"
      },
      {
        title: "Customer Experience Agent",
        description: "Omnichannel customer service automation that provides personalized shopping assistance and support.",
        results: "88% customer satisfaction rate; 47% reduction in support tickets"
      },
      {
        title: "Dynamic Pricing Engine",
        description: "Real-time price optimization based on demand, competitor pricing, and market conditions.",
        results: "17% increase in profit margins; 23% improvement in competitive positioning"
      }
    ]
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Manufacturing",
    cases: [
      {
        title: "Predictive Maintenance Solution",
        description: "System that monitors equipment performance and predicts failures before they occur, scheduling maintenance only when needed.",
        results: "78% reduction in unexpected downtime; 34% decrease in maintenance costs"
      },
      {
        title: "Quality Control Agent",
        description: "Computer vision and sensor-based quality inspection system with continuous learning capabilities.",
        results: "99.7% defect detection rate; 56% faster quality checks"
      },
      {
        title: "Supply Chain Optimization",
        description: "End-to-end supply chain monitoring and optimization with real-time adjustments to changing conditions.",
        results: "27% reduction in logistics costs; 35% improvement in on-time deliveries"
      }
    ]
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Technology",
    cases: [
      {
        title: "DevOps Automation Suite",
        description: "Comprehensive CI/CD automation with intelligent testing, deployment, and monitoring capabilities.",
        results: "65% faster deployment cycles; 83% reduction in post-deployment issues"
      },
      {
        title: "Code Analysis & Optimization",
        description: "AI system that reviews code for bugs, security vulnerabilities, and performance improvements.",
        results: "42% reduction in security vulnerabilities; 37% improvement in code quality scores"
      },
      {
        title: "IT Support Automation",
        description: "Intelligent support system that resolves common issues automatically and routes complex problems to the right specialists.",
        results: "76% of tickets resolved without human intervention; 3.2 minute average response time"
      }
    ]
  }
];

const Verticals = () => {
  const [activeVertical, setActiveVertical] = useState(0);

  return (
    <section id="verticals" className="section-padding bg-trika-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-trika-purple bg-opacity-10 text-trika-purple text-sm font-medium">
            Industry Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforming Industries with{" "}
            <span className="text-gradient">Robust AI Solutions</span>
          </h2>
          <p className="text-lg text-trika-gray">
            We don't just build software—we craft robust, enterprise-class solutions 
            that deliver meaningful results across diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-md p-2">
              {verticals.map((vertical, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-4 rounded-lg flex items-center justify-between transition-all ${
                    activeVertical === index
                      ? "bg-trika-purple text-white"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveVertical(index)}
                >
                  <div className="flex items-center">
                    <div className={`mr-3 ${activeVertical === index ? "text-white" : "text-trika-purple"}`}>
                      {vertical.icon}
                    </div>
                    <span className="font-medium">{vertical.title}</span>
                  </div>
                  <ChevronRight className={`h-5 w-5 transition-transform ${
                    activeVertical === index ? "rotate-90" : ""
                  }`} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-trika-purple mr-3">{verticals[activeVertical].icon}</span>
                {verticals[activeVertical].title} Use Cases
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {verticals[activeVertical].cases.map((useCase, index) => (
                  <div key={index} className="border border-gray-100 rounded-lg p-5 hover:border-trika-purple transition-colors">
                    <h4 className="text-lg font-bold mb-3">{useCase.title}</h4>
                    <p className="text-sm text-trika-gray mb-4">{useCase.description}</p>
                    <div className="bg-trika-light rounded-md p-3">
                      <p className="text-sm font-medium">Results:</p>
                      <p className="text-sm text-trika-purple">{useCase.results}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button className="trika-gradient text-white px-6 hover:opacity-90">
                  Request a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verticals;
