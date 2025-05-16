
import { useState } from "react";
import VerticalSelector from "./verticals/VerticalSelector";
import VerticalDetail from "./verticals/VerticalDetail";
import verticalsData from "./verticals/verticalsData";

const Verticals = () => {
  const [activeVertical, setActiveVertical] = useState(0);
  
  const handleDemo = () => {
    alert("Demo request form would appear here.");
  };

  return (
    <section id="verticals" className="section-padding bg-trika-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-orange-100 text-trika-primary text-sm font-medium">
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
            <VerticalSelector 
              verticals={verticalsData}
              activeIndex={activeVertical}
              onSelect={setActiveVertical}
            />
          </div>

          <div className="lg:col-span-9">
            <VerticalDetail 
              icon={verticalsData[activeVertical].icon}
              title={verticalsData[activeVertical].title}
              cases={verticalsData[activeVertical].cases}
              onRequestDemo={handleDemo}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verticals;
