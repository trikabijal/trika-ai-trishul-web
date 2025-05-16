
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface VerticalOption {
  icon: ReactNode;
  title: string;
}

interface VerticalSelectorProps {
  verticals: VerticalOption[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

const VerticalSelector = ({ verticals, activeIndex, onSelect }: VerticalSelectorProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-2">
      {verticals.map((vertical, index) => (
        <button
          key={index}
          className={`w-full text-left p-4 rounded-lg flex items-center justify-between transition-all ${
            activeIndex === index
              ? "bg-trika-primary text-white"
              : "hover:bg-gray-100"
          }`}
          onClick={() => onSelect(index)}
        >
          <div className="flex items-center">
            <div className={activeIndex === index ? "text-white mr-3" : "text-trika-primary mr-3"}>
              {vertical.icon}
            </div>
            <span className="font-medium">{vertical.title}</span>
          </div>
          <ChevronRight className={`h-5 w-5 transition-transform ${
            activeIndex === index ? "rotate-90" : ""
          }`} />
        </button>
      ))}
    </div>
  );
};

export default VerticalSelector;
