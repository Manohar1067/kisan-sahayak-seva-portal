
import { Wheat, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Wheat className="h-8 w-8 text-green-400" />
              <div>
                <h3 className="text-xl font-bold">Farmers Ally</h3>
                <p className="text-sm text-gray-400">किसान मित्र</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Empowering farmers across India with easy access to government schemes, 
              subsidies, and community support. Building a stronger agricultural future together.
            </p>
            <p className="text-gray-400 text-sm">
              भारत भर के किसानों को सरकारी योजनाओं और सब्सिडी तक आसान पहुंच प्रदान करना।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">PM-KISAN Scheme</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Crop Insurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Loan Waiver</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Help Request</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Fraud Prevention</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">help@farmersally.gov.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Farmers Ally. All rights reserved. | Made with ❤️ for Indian Farmers
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Help</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
