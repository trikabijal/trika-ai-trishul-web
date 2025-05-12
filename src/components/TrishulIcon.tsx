
import React from 'react';

interface TrishulIconProps {
  className?: string;
  fill?: string;
  stroke?: string;
}

const TrishulIcon: React.FC<TrishulIconProps> = ({ 
  className = "w-10 h-10", 
  fill = "currentColor",
  stroke = "currentColor"
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 120"
      className={className + " trishul-animation"}
      fill="none"
      strokeWidth="3"
      stroke={stroke}
    >
      {/* Middle Prong */}
      <path 
        d="M50 10L50 90" 
        stroke={stroke} 
        strokeWidth="4"
      />
      <path
        d="M50 10C50 10 40 20 50 30C60 20 50 10 50 10Z"
        fill={fill}
        stroke={stroke}
      />
      
      {/* Left Prong */}
      <path
        d="M30 25C30 25 25 35 35 40C45 35 40 25 30 25Z"
        fill={fill}
        stroke={stroke}
      />
      <path
        d="M35 40L45 85"
        stroke={stroke}
        strokeWidth="4"
      />
      
      {/* Right Prong */}
      <path
        d="M70 25C70 25 60 35 65 40C75 35 70 25 70 25Z"
        fill={fill}
        stroke={stroke}
      />
      <path
        d="M65 40L55 85"
        stroke={stroke}
        strokeWidth="4"
      />
      
      {/* Handle */}
      <path
        d="M35 90L65 90"
        stroke={stroke}
        strokeWidth="4"
      />
      <path
        d="M50 90L50 110"
        stroke={stroke}
        strokeWidth="6"
      />
    </svg>
  );
};

export default TrishulIcon;
