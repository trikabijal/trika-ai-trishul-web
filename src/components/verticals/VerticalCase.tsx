
import { ReactNode } from "react";

interface VerticalCaseProps {
  title: string;
  description: string;
  results: string;
}

const VerticalCase = ({ title, description, results }: VerticalCaseProps) => {
  return (
    <div className="border border-gray-100 rounded-lg p-5 hover:border-trika-primary transition-colors">
      <h4 className="text-lg font-bold mb-3">{title}</h4>
      <p className="text-sm text-trika-gray mb-4">{description}</p>
      <div className="bg-trika-light rounded-md p-3">
        <p className="text-sm font-medium">Results:</p>
        <p className="text-sm text-trika-primary">{results}</p>
      </div>
    </div>
  );
};

export default VerticalCase;
