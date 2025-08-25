
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import VerticalCase from "./VerticalCase";

interface Case {
  title: string;
  description: string;
  results: string;
}

interface VerticalDetailProps {
  icon: ReactNode;
  title: string;
  cases: Case[];
  onRequestDemo: () => void;
}

const VerticalDetail = ({ icon, title, cases, onRequestDemo }: VerticalDetailProps) => {
  const openCalendly = () => {
    window.open("https://calendly.com/bijal-trika/30-minute-ai-and-automation-conversation-clone", "_blank");
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <span className="text-trika-primary mr-3">{icon}</span>
        {title} Use Cases
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cases.map((useCase, index) => (
          <VerticalCase 
            key={index}
            title={useCase.title}
            description={useCase.description}
            results={useCase.results}
          />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button 
          className="bg-trika-primary hover:bg-trika-primary/90 text-white px-6" 
          onClick={openCalendly}
        >
          Request a Demo
        </Button>
      </div>
    </div>
  );
};

export default VerticalDetail;
