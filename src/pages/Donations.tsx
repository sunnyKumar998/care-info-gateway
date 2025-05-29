
import Navigation from "@/components/Navigation";
import { Heart, Calendar, Info } from "lucide-react";

const Donations = () => {
  const donationTypes = [
    {
      type: "Blood Donation",
      icon: Heart,
      color: "text-red-600 bg-red-50 border-red-200",
      importance: "Every 2 seconds someone needs blood. Your single donation can save up to 3 lives.",
      eligibility: [
        "Age: 17-65 years",
        "Weight: Minimum 50 kg",
        "Hemoglobin: 12.5 g/dL or higher",
        "No recent illness or medication"
      ],
      process: [
        "Registration and health screening",
        "Mini physical examination",
        "Blood donation (8-10 minutes)",
        "Rest and refreshments"
      ],
      aftercare: [
        "Drink plenty of fluids",
        "Avoid heavy lifting for 24 hours",
        "Eat iron-rich foods",
        "Rest for at least 10-15 minutes"
      ]
    },
    {
      type: "Organ Donation",
      icon: Heart,
      color: "text-green-600 bg-green-50 border-green-200",
      importance: "One organ donor can save up to 8 lives and improve the lives of 50+ people through tissue donation.",
      eligibility: [
        "No age limit for donation",
        "Good overall health",
        "No history of cancer or HIV",
        "Registered as an organ donor"
      ],
      process: [
        "Register as an organ donor",
        "Inform family of your decision",
        "Carry donor card or register online",
        "Medical evaluation when needed"
      ],
      aftercare: [
        "Living donors: Follow medical advice",
        "Regular health check-ups",
        "Maintain healthy lifestyle",
        "Stay connected with medical team"
      ]
    },
    {
      type: "Charity Donations",
      icon: Heart,
      color: "text-blue-600 bg-blue-50 border-blue-200",
      importance: "Financial contributions help provide medical care, equipment, and support to those in need.",
      eligibility: [
        "No age restrictions",
        "Any amount is valuable",
        "Choose verified organizations",
        "Regular or one-time donations"
      ],
      process: [
        "Research trusted charities",
        "Choose donation method",
        "Make secure payment",
        "Receive donation receipt"
      ],
      aftercare: [
        "Keep donation records",
        "Track how funds are used",
        "Consider regular giving",
        "Share with friends and family"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Donation <span className="text-red-600">Awareness</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about different ways you can contribute to saving lives and supporting your community through various donation programs.
          </p>
        </div>
      </section>

      {/* Donation Types */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {donationTypes.map((donation, index) => {
            const Icon = donation.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg border-2 ${donation.color} p-8 md:p-12`}
              >
                <div className="flex items-center mb-8">
                  <div className={`p-4 rounded-full ${donation.color} mr-4`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{donation.type}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Importance */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                      <Info className="h-5 w-5 mr-2 text-blue-600" />
                      Why It Matters
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{donation.importance}</p>
                  </div>

                  {/* Eligibility */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">Eligibility</h3>
                    <ul className="space-y-2">
                      {donation.eligibility.map((criteria, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{criteria}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">Process</h3>
                    <ul className="space-y-2">
                      {donation.process.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                            {idx + 1}
                          </div>
                          <span className="text-gray-600">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Aftercare */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">Aftercare</h3>
                    <ul className="space-y-2">
                      {donation.aftercare.map((care, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="h-1.5 w-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{care}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Save Lives?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Contact your local blood bank, organ donation center, or charity organization to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Find Local Centers
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donations;
