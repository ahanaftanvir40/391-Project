import { Link } from "react-router-dom";
import { Car, Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold">RentDrive</span>
            </div>
            <p className="text-gray-400">
              The trusted platform for vehicle rentals and driver services.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-sm">t</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-sm">in</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">For Renters</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Browse Vehicles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Insurance
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">For Owners</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  List Your Vehicle
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Protection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1-800-RENTDRIVE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@rentdrive.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Available Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 RentDrive. All rights reserved. | Privacy Policy | Terms
            of Service
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
