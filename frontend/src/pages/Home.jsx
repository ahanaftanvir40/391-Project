import Hero from "../components/Hero";
import rent from "../assets/rent.jpg";
import listcar from "../assets/listcar.jpg";
import driver from "../assets/driver.jpg";
import addcar from "../assets/addcar.png";
import rentcar from "../assets/rentcar.png";
import hiredriver from "../assets/hiredriver.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Car,
  Users,
  Shield,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Menu,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-700">
      {/* Hero Section */}
      <section className="py-20 md:py-32  container mx-auto">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                  🚗 Trusted by 50,000+ users
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight dark:text-white">
                  Rent Any Vehicle,
                  <span className="text-orange-600"> Anywhere</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed dark:text-white/70">
                  Connect with vehicle owners in your area. List your car for
                  extra income or find the perfect ride for your next adventure.
                  Professional drivers available on demand.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                  <Link to='/vehicles'>
                    <Button
                      size="lg"
                      className="bg-orange-600 hover:bg-orange-700 text-lg px-8"
                    >
                      Start Renting
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                <Link to='/addvehicles'>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8"
                  >
                    List Your Vehicle
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4 ">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">50K+</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div> 
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">10K+</div>
                  <div className="text-sm text-gray-400">Vehicles Listed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">4.9★</div>
                  <div className="text-sm text-gray-400">Average Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/assets/hero2.png"
                alt="Modern car rental platform"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Instant Booking
                    </div>
                    <div className="text-sm text-gray-600">Available 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 ">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-orange-800">Features</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
              Whether you're looking to earn extra income or find the perfect
              vehicle, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">List Your Vehicle</CardTitle>
                <CardDescription className="text-base">
                  Turn your idle car into a money-making asset. Set your own
                  prices and availability.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Easy listing process
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Flexible pricing control
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Insurance coverage included
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Rent Safely</CardTitle>
                <CardDescription className="text-base">
                  Browse thousands of verified vehicles. Book instantly with
                  full insurance protection.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Verified vehicle owners
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 roadside assistance
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Instant booking confirmation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Hire a Driver</CardTitle>
                <CardDescription className="text-base">
                  Need a professional driver? Choose from our network of
                  licensed, experienced drivers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Licensed professionals
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Background checked
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Hourly or daily rates
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-orange-800">
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Get Started in 3 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* For Renters */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                For Renters
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Search & Browse
                    </h4>
                    <p className="text-gray-600 dark:text-white">
                      Find the perfect vehicle in your area using our smart
                      filters.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Book Instantly
                    </h4>
                    <p className="text-gray-600 dark:text-white">
                      Select your dates, add a driver if needed, and confirm
                      your booking.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Drive & Enjoy
                    </h4>
                    <p className="text-gray-600 dark:text-white">
                      Pick up your vehicle and hit the road with full insurance
                      coverage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Owners */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center dark:text-white">
                For Vehicle Owners
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      List Your Vehicle
                    </h4>
                    <p className="text-gray-600 dark:text-white">
                      Upload photos, set your price, and describe your vehicle
                      in minutes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Accept Bookings
                    </h4>
                    <p className="text-gray-600 dark:text-white">
                      Review rental requests and approve bookings that work for
                      you.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Earn Money</h4>
                    <p className="text-gray-600 dark:text-white">
                      Get paid automatically after each rental with our secure
                      payment system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Fully Insured</h3>
              <p className="text-sm text-gray-600 dark:text-white/70">
                Comprehensive coverage for every rental
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">24/7 Support</h3>
              <p className="text-sm text-gray-600 dark:text-white/70">
                Round-the-clock customer assistance
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Verified Users</h3>
              <p className="text-sm text-gray-600 dark:text-white/70">
                All users are identity verified
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Easy Process</h3>
              <p className="text-sm text-gray-600 dark:text-white/70">
                Simple booking and listing experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container px-4 md:px-6 text-center mx-auto">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-orange-100">
              Join thousands of users who are already earning money or finding
              great vehicles on RentDrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8"
              >
                List Your Vehicle
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 bg-transparent"
              >
                Find a Vehicle
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      

      {/* Fixed Chat Button */}
      <Link
        to="/chatai"
        className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Chat with AI
        <svg
          className="w-5 h-5 inline ml-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 17h8m0 0v8m0-8l-8-8m8 8L9 3m0 0v8m0-8H1"
          />
        </svg>
      </Link>
    </div>
  );
}

export default Home;
