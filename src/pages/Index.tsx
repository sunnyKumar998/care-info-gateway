
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Heart, Stethoscope, Calendar, ArrowDown, Shield, AlertTriangle, CheckCircle } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "Donation Awareness",
      description: "Learn about blood donation, organ donation, and charity drives. Discover how you can make a difference in someone's life.",
      link: "/donations",
      color: "text-pink-600 bg-pink-50"
    },
    {
      icon: Stethoscope,
      title: "Basic Treatment Guide",
      description: "Get reliable information about treating common ailments like cold, flu, and minor injuries at home.",
      link: "/treatments",
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: Calendar,
      title: "Free Doctor Camps",
      description: "Stay updated on upcoming free medical camps in your area. Get access to quality healthcare services.",
      link: "/doctor-camps",
      color: "text-orange-600 bg-orange-50"
    }
  ];

  const healthPrecautions = [
    {
      icon: Shield,
      title: "Hand Hygiene",
      description: "Wash your hands frequently with soap and water for at least 20 seconds, especially before eating and after using the restroom.",
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      icon: CheckCircle,
      title: "Regular Exercise",
      description: "Engage in at least 30 minutes of moderate physical activity daily to maintain good cardiovascular health.",
      color: "text-cyan-600 bg-cyan-50"
    },
    {
      icon: AlertTriangle,
      title: "Vaccination Updates",
      description: "Keep your vaccinations up to date and consult healthcare providers about recommended immunizations.",
      color: "text-amber-600 bg-amber-50"
    },
    {
      icon: Heart,
      title: "Mental Health",
      description: "Practice stress management techniques, maintain social connections, and seek help when needed.",
      color: "text-rose-600 bg-rose-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-cyan-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Health,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Our Priority</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering communities with healthcare knowledge, donation awareness, and access to free medical services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donations"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Donations
            </Link>
            <Link
              to="/treatments"
              className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all duration-200 transform hover:-translate-y-1"
            >
              Treatment Guide
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-purple-400" />
        </div>
      </section>

      {/* Health Precautions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Essential <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Health Precautions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these important health guidelines to maintain your well-being and prevent common health issues.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthPrecautions.map((precaution, index) => {
              const Icon = precaution.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-l-4 border-gradient-to-b from-indigo-500 to-purple-500"
                >
                  <div className={`inline-flex p-3 rounded-xl ${precaution.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {precaution.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {precaution.description}
                  </p>
                </div>
              );
            })}
          </div>
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
                  className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200"
                >
                  <div className={`inline-flex p-3 rounded-xl ${feature.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <Link
                    to={feature.link}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join our community in promoting health awareness and helping those in need.
          </p>
          <Link
            to="/doctor-camps"
            className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg transform hover:-translate-y-1"
          >
            Find Free Medical Camps
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-pink-400 mr-2" />
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
