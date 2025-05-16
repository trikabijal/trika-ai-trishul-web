
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return <footer id="contact" className="bg-trika-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="mb-6 flex items-center">
              <img src="/lovable-uploads/3403717f-88e4-4c64-8bd4-cb96d69e826e.png" alt="Trika logo" className="w-10 h-10 mr-2 object-contain" />
              <a href="/" className="text-3xl font-bold">
                trika<span className="text-trika-purple">.</span>ai
              </a>
            </div>
            <p className="text-gray-300 mb-6">
              Where foundational computer science meets modern AI technology—creating robust, 
              enterprise-grade automation solutions that stand the test of time.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><HashLink smooth to="#about" className="text-gray-300 hover:text-white transition-colors">About Us</HashLink></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors">Team</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blogs" className="text-gray-300 hover:text-white transition-colors">Blogs</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/ai-agents" className="text-gray-300 hover:text-white transition-colors">AI Agents</Link></li>
              <li><Link to="/services/ai-strategy" className="text-gray-300 hover:text-white transition-colors">Consulting</Link></li>
              <li><Link to="/services/software-development" className="text-gray-300 hover:text-white transition-colors">Development</Link></li>
              <li><HashLink smooth to="#verticals" className="text-gray-300 hover:text-white transition-colors">Industries</HashLink></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 text-trika-primary" />
                <span className="text-gray-300">bijal@trika.ai</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 text-trika-primary" />
                <span className="text-gray-300">+91 98203 97328</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-700 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Trika.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
