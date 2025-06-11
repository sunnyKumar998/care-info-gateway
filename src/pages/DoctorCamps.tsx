
import Navigation from "@/components/Navigation";
import { Calendar, MapPin, Clock, Heart, Stethoscope, Info } from "lucide-react";

const DoctorCamps = () => {
  const upcomingCamps = [
    {
      title: "Community Heart Health Check-up",
      date: "December 15, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Jinnah Hospital, Downtown",
      address: "123 Main Street, City Center",
      services: [
        "Blood pressure screening",
        "Cholesterol testing",
        "ECG examination",
        "Heart health consultation",
        "Lifestyle counseling"
      ],
      doctors: ["Dr. Sarah Johnson - Cardiologist", "Dr. Michael Chen - Internal Medicine"]
    },
    {
      title: "Diabetes Awareness & Screening Camp",
      date: "December 22, 2024",
      time: "8:00 AM - 5:00 PM",
      location: "Jinnah Medical Center",
      address: "456 River Road, Riverside District",
      services: [
        "Blood sugar testing",
        "HbA1c testing",
        "Diabetic foot examination",
        "Nutrition counseling",
        "Medication review"
      ],
      doctors: ["Dr. Emily Rodriguez - Endocrinologist", "Dr. David Kim - Family Medicine"]
    },
    {
      title: "Women's Health Screening",
      date: "January 5, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Jinnah Women's Health Center",
      address: "789 Oak Avenue, Northside",
      services: [
        "Breast examination",
        "Cervical cancer screening",
        "Bone density testing",
        "Reproductive health counseling",
        "Mental health screening"
      ],
      doctors: ["Dr. Lisa Thompson - Gynecologist", "Dr. Rachel Martinez - Women's Health"]
    },
    {
      title: "General Health Check-up Camp",
      date: "January 12, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Jinnah Community Health Center",
      address: "321 Sports Drive, West End",
      services: [
        "Complete physical examination",
        "Blood pressure and weight check",
        "Vision and hearing tests",
        "Basic laboratory tests",
        "Health education sessions"
      ],
      doctors: ["Dr. James Wilson - Family Medicine", "Dr. Maria Garcia - Internal Medicine", "Dr. Robert Lee - General Practice"]
    }
  ];

  const pastCamps = [
    {
      title: "Children's Health & Vaccination Drive",
      date: "November 18, 2024",
      location: "Jinnah Pediatric Center",
      served: "180 children",
      highlights: ["Free vaccinations", "Growth monitoring", "Dental check-ups"]
    },
    {
      title: "Senior Citizens Health Camp",
      date: "November 10, 2024",
      location: "Jinnah Senior Care Center",
      served: "120 seniors",
      highlights: ["Chronic disease management", "Medication review", "Fall prevention"]
    },
    {
      title: "Eye Care Screening Camp",
      date: "October 28, 2024",
      location: "Jinnah Eye Care Center",
      served: "200 patients",
      highlights: ["Vision tests", "Free eye glasses", "Cataract screening"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Free <span className="text-blue-600">Doctor Camps</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access quality healthcare services in your community through our free medical camps and health screening programs at Jinnah Hospital facilities.
          </p>
        </div>
      </section>

      {/* Upcoming Camps */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Medical Camps</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingCamps.map((camp, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 flex-1">{camp.title}</h3>
                  <div className="p-2 bg-blue-100 rounded-lg ml-4">
                    <Stethoscope className="h-6 w-6 text-blue-600" />
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                    <span className="font-medium">{camp.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-3 text-blue-600" />
                    <span>{camp.time}</span>
                  </div>
                  <div className="flex items-start text-gray-600">
                    <MapPin className="h-5 w-5 mr-3 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-medium">{camp.location}</div>
                      <div className="text-sm">{camp.address}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Services Offered</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {camp.services.map((service, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Medical Team</h4>
                  {camp.doctors.map((doctor, idx) => (
                    <div key={idx} className="text-gray-600 text-sm mb-1">{doctor}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What to Expect</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="p-3 bg-green-100 rounded-full w-fit mb-4">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Free Services</h3>
              <p className="text-gray-600">
                All medical consultations, basic tests, and screenings are provided completely free of charge.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="p-3 bg-blue-100 rounded-full w-fit mb-4">
                <Stethoscope className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Qualified Doctors</h3>
              <p className="text-gray-600">
                Our camps feature licensed physicians and specialists from Jinnah Hospital medical institutions.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="p-3 bg-purple-100 rounded-full w-fit mb-4">
                <Info className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Health Education</h3>
              <p className="text-gray-600">
                Receive valuable health information, preventive care tips, and lifestyle guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Camps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Camps</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pastCamps.map((camp, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{camp.title}</h3>
                <div className="text-sm text-gray-600 mb-4">
                  <div className="flex items-center mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    {camp.date}
                  </div>
                  <div className="flex items-center mb-1">
                    <MapPin className="h-4 w-4 mr-2" />
                    {camp.location}
                  </div>
                  <div className="font-medium text-green-600">{camp.served} served</div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Highlights</h4>
                  <ul className="space-y-1">
                    {camp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <div className="h-1 w-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Health Initiative
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of our mission to provide accessible healthcare to everyone in the community through Jinnah Hospital facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Volunteer with Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Get Updates
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorCamps;
