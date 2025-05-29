
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Heart, Stethoscope, Calendar, ArrowDown } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "Donation Awareness",
      description: "Learn about blood donation, organ donation, and charity drives. Discover how you can make a difference in someone's life.",
      link: "/donations",
      color: "text-red-600 bg-red-50"
    },
    {
      icon: Stethoscope,
      title: "Basic Treatment Guide",
      description: "Get reliable information about treating common ailments like cold, flu, and minor injuries at home.",
      link: "/treatments",
      color: "text-green-600 bg-green-50"
    },
    {
      icon: Calendar,
      title: "Free Doctor Camps",
      description: "Stay updated on upcoming free medical camps in your area. Get access to quality healthcare services.",
      link: "/doctor-camps",
      color: "text-blue-600 bg-blue-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Health,{" "}
            <span className="text-blue-600">Our Priority</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering communities with healthcare knowledge, donation awareness, and access to free medical services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donations"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Donations
            </Link>
            <Link
              to="/treatments"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              Treatment Guide
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Help
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive platform designed to promote health awareness and community wellness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-6`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <Link
                    to={feature.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Learn More
                    <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our community in promoting health awareness and helping those in need.
          </p>
          <Link
            to="/doctor-camps"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Find Free Medical Camps
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-blue-400 mr-2" />
            <span className="text-2xl font-bold">HealthCare Hub</span>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering communities through health education and awareness.
          </p>
          <div className="flex justify-center space-x-8">
            <Link to="/donations" className="text-gray-400 hover:text-white transition-colors">
              Donations
            </Link>
            <Link to="/treatments" className="text-gray-400 hover:text-white transition-colors">
              Treatments
            </Link>
            <Link to="/doctor-camps" className="text-gray-400 hover:text-white transition-colors">
              Doctor Camps
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400">
            <p>&copy; 2024 HealthCare Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
