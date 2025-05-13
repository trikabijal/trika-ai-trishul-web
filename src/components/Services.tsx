
import { Bot, Search, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TrishulIcon from "./TrishulIcon";

const services = [
  {
    icon: <Bot className="h-8 w-8 text-white" />,
    title: "AI Agents Development",
    description:
      "We build intelligent AI agents that automate complex tasks and workflows, creating efficient systems that adapt and learn.",
    details: [
      "Custom agent creation tailored to your specific needs",
      "Integration with existing systems and workflows",
      "Ongoing optimization and maintenance",
      "Enterprise-grade reliability and security"
    ],
    color: "bg-trika-primary",
    link: "/services/ai-agents"
  },
  {
    icon: <Search className="h-8 w-8 text-white" />,
    title: "AI Strategy Consulting",
    description:
      "Our consultants identify high-impact automation opportunities in your business, with clear ROI and implementation strategies.",
    details: [
      "Comprehensive business process analysis",
      "AI readiness assessment",
      "ROI forecasting and measurement",
      "Strategic implementation roadmap"
    ],
    color: "bg-trika-secondary",
    link: "/services/ai-strategy"
  },
  {
    icon: <Code className="h-8 w-8 text-white" />,
    title: "Software Product Development",
    description:
      "Leveraging 25+ years of enterprise software experience, we build robust, scalable products that stand the test of time.",
    details: [
      "End-to-end product development",
      "Model Context Protocol (MCP) integration",
      "Multiple Capability Platform architecture",
      "Enterprise-grade reliability built-in"
    ],
    color: "bg-trika-dark",
    link: "/services/software-development"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-trika-accent bg-opacity-30 text-trika-primary text-sm font-medium">
            <TrishulIcon className="w-5 h-5" fill="none" stroke="currentColor" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Create, Preserve, Transform with the{" "}
            <span className="sun-gradient">Power of Trika</span>
          </h2>
          <p className="text-lg text-trika-gray">
            Reflecting the Trishul of Lord Shiva, our services create intelligent solutions,
            preserve business value, and transform industries through modern technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100 group hover:border-trika-primary"
            >
              <div className={`${service.color} rounded-lg h-14 w-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-trika-gray mb-6">{service.description}</p>
              <ul className="space-y-3 mb-6">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-trika-primary mr-2 mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <Button variant="link" className="text-trika-primary p-0 hover:underline" asChild>
                <Link to={service.link}>Learn more</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
