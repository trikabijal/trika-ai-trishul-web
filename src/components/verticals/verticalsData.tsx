
import React from "react";
import { Users, Briefcase, Globe, Database, Rocket, MessageSquare } from "lucide-react";

interface Case {
  title: string;
  description: string;
  results: string;
}

export interface Vertical {
  icon: React.ReactNode;
  title: string;
  cases: Case[];
}

const verticalsData: Vertical[] = [
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
      },
      {
        title: "AI Receptionist for Healthcare",
        description: "Intelligent automation layer handling patient inquiries, appointment scheduling, and basic information collection across WhatsApp and voice calls.",
        results: "50% reduction in front-desk workload; 24/7 appointment scheduling capability"
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
      },
      {
        title: "AI Receptionist for Financial Services",
        description: "Multi-channel virtual assistant handling client inquiries, scheduling consultations, and qualifying leads for financial advisors.",
        results: "45% reduction in administrative work; improved lead qualification accuracy"
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
      },
      {
        title: "AI Receptionist for Retail",
        description: "WhatsApp and voice-enabled virtual assistant handling product inquiries, store hours, and appointment bookings.",
        results: "60% reduction in repetitive customer queries; increased customer satisfaction"
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
      },
      {
        title: "AI Receptionist for Manufacturing",
        description: "Automated customer service system handling supplier and client inquiries across multiple channels.",
        results: "40% reduction in administrative workload; improved information accuracy"
      }
    ]
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Technology",
    cases: [
      {
        title: "AXONO Meeting Notes System",
        description: "AI solution that transforms meeting notes into actionable tasks across project management tools, bridging the gap between conversation and execution.",
        results: "85% reduction in lost action items; 42% increase in post-meeting task completion rates"
      },
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
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Customer Service",
    cases: [
      {
        title: "AI Receptionist",
        description: "Intelligent automation layer handling customer inquiries, scheduling appointments, and qualifying leads across WhatsApp and voice calls.",
        results: "40-60% reduction in manual receptionist workload; faster response times; higher customer satisfaction"
      },
      {
        title: "Multilingual Support Bot",
        description: "AI-powered customer service solution that provides instant responses in multiple languages across various channels.",
        results: "24/7 availability in 12+ languages; 85% first-contact resolution rate"
      },
      {
        title: "Customer Feedback Analysis",
        description: "Advanced sentiment analysis system that processes customer feedback and identifies actionable insights.",
        results: "72% faster issue identification; 38% improvement in customer retention"
      },
      {
        title: "Self-Service Knowledge Base",
        description: "Intelligent search and recommendation system that helps customers find answers to their questions.",
        results: "65% reduction in support tickets; 91% customer satisfaction with self-service options"
      }
    ]
  }
];

export default verticalsData;
