
import Navigation from "@/components/Navigation";
import { Heart, Calendar, Info } from "lucide-react";

const Donations = () => {
  const donationTypes = [
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
      ],
      bankDetails: {
        accountName: "HealthCare Hub Foundation",
        accountNumber: "1234567890123456",
        bankName: "National Bank of Pakistan",
        branchCode: "0001"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Charity <span className="text-red-600">Donations</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Support our healthcare initiatives by contributing to our charity fund. Your donations help us provide better medical services to the community.
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

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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

                {/* Bank Details Section */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Bank Account Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-gray-600">Account Name:</span>
                      <p className="font-semibold text-gray-900">{donation.bankDetails.accountName}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Account Number:</span>
                      <p className="font-semibold text-gray-900">{donation.bankDetails.accountNumber}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Bank Name:</span>
                      <p className="font-semibold text-gray-900">{donation.bankDetails.bankName}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Branch Code:</span>
                      <p className="font-semibold text-gray-900">{donation.bankDetails.branchCode}</p>
                    </div>
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
            Your contribution makes a real difference in providing healthcare services to those in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Donate Now
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
