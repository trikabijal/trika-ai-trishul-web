import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
const Footer = () => {
  return <footer className="bg-trika-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="mb-6">
              <a href="/" className="text-3xl font-bold">
                trika<span className="text-trika-purple">.</span>ai
              </a>
            </div>
            <p className="text-gray-300 mb-6">
              Where ancient wisdom meets modern AI technology—creating robust, 
              enterprise-grade automation solutions that stand the test of time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-trika-purple transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-trika-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-trika-purple transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">AI Agents</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Consulting</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Development</a></li>
              <li><a href="#verticals" className="text-gray-300 hover:text-white transition-colors">Industries</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 text-trika-purple" />
                <span className="text-gray-300">bijal@trika.ai</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 text-trika-purple" />
                <span className="text-gray-300">+91 98203 97328</span>
              </li>
              
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-700 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Trika.ai. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end space-x-6 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;