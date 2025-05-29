
import Navigation from "@/components/Navigation";
import { Stethoscope, Info, Calendar } from "lucide-react";

const Treatments = () => {
  const treatments = [
    {
      condition: "Common Cold",
      symptoms: ["Runny or stuffy nose", "Sore throat", "Cough", "Sneezing", "Mild headache"],
      homeRemedies: [
        "Rest and sleep (8+ hours)",
        "Drink warm fluids (tea, soup, warm water)",
        "Use a humidifier or breathe steam",
        "Gargle with salt water",
        "Eat honey (not for children under 1 year)"
      ],
      whenToSeeDoctor: [
        "Symptoms last more than 10 days",
        "Fever above 101.3°F (38.5°C)",
        "Severe headache or sinus pain",
        "Difficulty breathing",
        "Persistent cough with blood"
      ],
      prevention: [
        "Wash hands frequently",
        "Avoid close contact with sick people",
        "Don't touch face with unwashed hands",
        "Disinfect surfaces regularly"
      ]
    },
    {
      condition: "Flu (Influenza)",
      symptoms: ["High fever", "Body aches", "Fatigue", "Cough", "Headache", "Chills"],
      homeRemedies: [
        "Complete bed rest",
        "Stay hydrated with fluids",
        "Take over-the-counter pain relievers",
        "Use cool compresses for fever",
        "Eat light, nutritious foods"
      ],
      whenToSeeDoctor: [
        "Difficulty breathing or shortness of breath",
        "Chest pain or pressure",
        "Sudden dizziness or confusion",
        "Severe or persistent vomiting",
        "Flu symptoms that improve but return with fever"
      ],
      prevention: [
        "Get annual flu vaccination",
        "Practice good hand hygiene",
        "Avoid crowded places during flu season",
        "Maintain healthy lifestyle"
      ]
    },
    {
      condition: "Minor Cuts & Scrapes",
      symptoms: ["Surface bleeding", "Pain or stinging", "Visible wound", "Possible dirt or debris"],
      homeRemedies: [
        "Clean hands before treating wound",
        "Stop bleeding with direct pressure",
        "Clean wound with water",
        "Apply antibiotic ointment",
        "Cover with sterile bandage"
      ],
      whenToSeeDoctor: [
        "Deep cuts that won't stop bleeding",
        "Signs of infection (pus, red streaks, warmth)",
        "Cuts from dirty or rusty objects",
        "Tetanus shot needed (last shot >5 years ago)",
        "Wound doesn't heal within a week"
      ],
      prevention: [
        "Use proper safety equipment",
        "Keep work areas clean and organized",
        "Handle sharp objects carefully",
        "Maintain first aid kit at home"
      ]
    },
    {
      condition: "Headache",
      symptoms: ["Head pain", "Tension in neck/shoulders", "Sensitivity to light", "Nausea (sometimes)"],
      homeRemedies: [
        "Rest in a quiet, dark room",
        "Apply cold or warm compress",
        "Stay hydrated",
        "Gentle neck and shoulder massage",
        "Practice relaxation techniques"
      ],
      whenToSeeDoctor: [
        "Sudden, severe headache unlike any before",
        "Headache with fever, stiff neck, confusion",
        "Headache after head injury",
        "Progressive headache that worsens",
        "Headache with vision changes"
      ],
      prevention: [
        "Maintain regular sleep schedule",
        "Stay hydrated throughout the day",
        "Manage stress levels",
        "Limit screen time and eye strain"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Basic <span className="text-green-600">Treatment</span> Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Learn how to treat common health conditions at home and when to seek professional medical help.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 max-w-4xl mx-auto">
            <div className="flex">
              <Info className="h-5 w-5 text-yellow-400 mr-3 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-yellow-800">Important Notice</h3>
                <p className="text-sm text-yellow-700 mt-1">
                  This information is for educational purposes only and should not replace professional medical advice. 
                  Always consult a healthcare provider for proper diagnosis and treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Stethoscope className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{treatment.condition}</h2>
              </div>

              <div className="space-y-6">
                {/* Symptoms */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Symptoms</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {treatment.symptoms.map((symptom, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Home Remedies */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Home Remedies</h3>
                  <ul className="space-y-2">
                    {treatment.homeRemedies.map((remedy, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="h-5 w-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-semibold mr-3 flex-shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span className="text-gray-600 text-sm">{remedy}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* When to See Doctor */}
                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    When to See a Doctor
                  </h3>
                  <ul className="space-y-2">
                    {treatment.whenToSeeDoctor.map((warning, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-red-700 text-sm font-medium">{warning}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prevention */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Prevention Tips</h3>
                  <ul className="space-y-2">
                    {treatment.prevention.map((tip, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Emergency Situations
          </h2>
          <p className="text-xl text-red-100 mb-8">
            If you experience severe symptoms or life-threatening conditions, seek immediate medical attention.
          </p>
          <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Numbers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-red-600">911</div>
                <div className="text-sm text-gray-600">Emergency Services</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">1-800-222-1222</div>
                <div className="text-sm text-gray-600">Poison Control</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">988</div>
                <div className="text-sm text-gray-600">Mental Health Crisis</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Treatments;
