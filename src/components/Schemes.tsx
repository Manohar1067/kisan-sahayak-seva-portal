
import { useState } from 'react';
import { ArrowDown, Check, X, Banknote, Shield, Sprout } from 'lucide-react';

interface SchemesProps {
  onNavigate: (section: string) => void;
}

const Schemes = ({ onNavigate }: SchemesProps) => {
  const [selectedScheme, setSelectedScheme] = useState<string | null>(null);
  const [showEligibility, setShowEligibility] = useState<string | null>(null);
  const [eligibilityAnswers, setEligibilityAnswers] = useState<Record<string, boolean>>({});

  const schemes = [
    {
      id: 'pmkisan',
      title: 'PM-KISAN',
      subtitle: 'प्रधानमंत्री किसान सम्मान निधि योजना',
      description: 'Direct income support of ₹6,000 per year to farmers',
      detailedDescription: `The PM-KISAN scheme provides direct income support to farmers by transferring ₹6,000 per year in three equal installments of ₹2,000 each directly to their bank accounts. This scheme aims to provide financial assistance to farmers for their agricultural and allied activities.

Key Benefits:
• ₹6,000 per year direct cash transfer
• Payment in 3 installments of ₹2,000 each
• Direct transfer to bank account
• No intermediaries involved
• Covers all landholding farmers`,
      icon: Banknote,
      color: 'green',
      eligibility: [
        {
          question: 'Do you own agricultural land?',
          key: 'owns_land'
        },
        {
          question: 'Is your land holding less than 2 hectares?',
          key: 'land_size'
        },
        {
          question: 'Do you have an active bank account?',
          key: 'bank_account'
        },
        {
          question: 'Are you an Indian citizen?',
          key: 'indian_citizen'
        }
      ]
    },
    {
      id: 'crop_insurance',
      title: 'Crop Insurance',
      subtitle: 'प्रधानमंत्री फसल बीमा योजना',
      description: 'Comprehensive insurance coverage for crop losses',
      detailedDescription: `The Pradhan Mantri Fasal Bima Yojana provides comprehensive insurance coverage to farmers against crop losses due to natural calamities, pests, and diseases.

Key Benefits:
• Low premium rates (1.5% for Rabi, 2% for Kharif crops)
• Quick settlement of claims
• Coverage for pre-sowing to post-harvest losses
• Use of technology for faster claim assessment
• Coverage for all food grains, oilseeds, and annual commercial crops`,
      icon: Shield,
      color: 'blue',
      eligibility: [
        {
          question: 'Are you a farmer (landowner or tenant)?',
          key: 'is_farmer'
        },
        {
          question: 'Do you cultivate notified crops?',
          key: 'grows_notified_crops'
        },
        {
          question: 'Is your area covered under the scheme?',
          key: 'area_covered'
        },
        {
          question: 'Can you provide required documents?',
          key: 'has_documents'
        }
      ]
    },
    {
      id: 'loan_waiver',
      title: 'Loan Waiver',
      subtitle: 'किसान ऋण माफी योजना',
      description: 'Relief from agricultural loans for eligible farmers',
      detailedDescription: `Various state and central government loan waiver schemes provide relief to farmers from agricultural debt burden, helping them restart their farming activities.

Key Benefits:
• Complete or partial loan waiver
• Relief from interest burden
• Fresh credit access post-waiver
• Reduced financial stress
• Support for small and marginal farmers

Note: Eligibility and implementation varies by state. Contact your local agricultural office for specific details.`,
      icon: Sprout,
      color: 'yellow',
      eligibility: [
        {
          question: 'Do you have an outstanding agricultural loan?',
          key: 'has_loan'
        },
        {
          question: 'Is your loan from a scheduled bank/cooperative?',
          key: 'bank_loan'
        },
        {
          question: 'Are you a small or marginal farmer?',
          key: 'small_farmer'
        },
        {
          question: 'Is your state offering loan waiver scheme?',
          key: 'state_scheme'
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          bg: 'bg-green-500',
          hover: 'hover:bg-green-600',
          light: 'bg-green-50',
          border: 'border-green-200',
          text: 'text-green-800'
        };
      case 'blue':
        return {
          bg: 'bg-blue-500',
          hover: 'hover:bg-blue-600',
          light: 'bg-blue-50',
          border: 'border-blue-200',
          text: 'text-blue-800'
        };
      case 'yellow':
        return {
          bg: 'bg-yellow-500',
          hover: 'hover:bg-yellow-600',
          light: 'bg-yellow-50',
          border: 'border-yellow-200',
          text: 'text-yellow-800'
        };
      default:
        return {
          bg: 'bg-gray-500',
          hover: 'hover:bg-gray-600',
          light: 'bg-gray-50',
          border: 'border-gray-200',
          text: 'text-gray-800'
        };
    }
  };

  const handleEligibilityAnswer = (schemeId: string, questionKey: string, answer: boolean) => {
    setEligibilityAnswers(prev => ({
      ...prev,
      [`${schemeId}_${questionKey}`]: answer
    }));
  };

  const calculateEligibility = (schemeId: string, questions: any[]) => {
    const answers = questions.map(q => eligibilityAnswers[`${schemeId}_${q.key}`]);
    const allAnswered = answers.every(answer => answer !== undefined);
    const allEligible = answers.every(answer => answer === true);
    
    return { allAnswered, allEligible, totalQuestions: questions.length, correctAnswers: answers.filter(a => a === true).length };
  };

  if (selectedScheme) {
    const scheme = schemes.find(s => s.id === selectedScheme)!;
    const colors = getColorClasses(scheme.color);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setSelectedScheme(null)}
            className="mb-6 flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowDown className="h-5 w-5 transform rotate-90" />
            <span>Back to All Schemes</span>
          </button>

          <div className={`${colors.light} rounded-2xl p-8 shadow-lg`}>
            <div className="flex items-center space-x-4 mb-6">
              <div className={`p-4 ${colors.bg} rounded-xl text-white`}>
                <scheme.icon className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{scheme.title}</h1>
                <p className="text-lg text-gray-600">{scheme.subtitle}</p>
              </div>
            </div>

            <div className="prose max-w-none mb-8">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {scheme.detailedDescription}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowEligibility(showEligibility === scheme.id ? null : scheme.id)}
                className={`${colors.bg} ${colors.hover} text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2`}
              >
                <Check className="h-5 w-5" />
                <span>Check Eligibility</span>
              </button>
              
              <button className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl border-2 border-gray-200 transition-all duration-300">
                Apply Now
              </button>
            </div>

            {showEligibility === scheme.id && (
              <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Eligibility Check</h3>
                
                <div className="space-y-4">
                  {scheme.eligibility.map((question, index) => (
                    <div key={question.key} className="border-b border-gray-200 pb-4">
                      <p className="text-gray-700 mb-3 font-medium">
                        {index + 1}. {question.question}
                      </p>
                      <div className="flex space-x-4">
                        <button
                          onClick={() => handleEligibilityAnswer(scheme.id, question.key, true)}
                          className={`px-4 py-2 rounded-lg font-medium transition-all ${
                            eligibilityAnswers[`${scheme.id}_${question.key}`] === true
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                          }`}
                        >
                          Yes / हाँ
                        </button>
                        <button
                          onClick={() => handleEligibilityAnswer(scheme.id, question.key, false)}
                          className={`px-4 py-2 rounded-lg font-medium transition-all ${
                            eligibilityAnswers[`${scheme.id}_${question.key}`] === false
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-red-100'
                          }`}
                        >
                          No / नहीं
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {(() => {
                  const eligibilityResult = calculateEligibility(scheme.id, scheme.eligibility);
                  if (eligibilityResult.allAnswered) {
                    return (
                      <div className={`mt-6 p-4 rounded-lg ${
                        eligibilityResult.allEligible ? 'bg-green-100 border border-green-300' : 'bg-red-100 border border-red-300'
                      }`}>
                        <div className="flex items-center space-x-2 mb-2">
                          {eligibilityResult.allEligible ? (
                            <Check className="h-6 w-6 text-green-600" />
                          ) : (
                            <X className="h-6 w-6 text-red-600" />
                          )}
                          <h4 className={`font-semibold ${
                            eligibilityResult.allEligible ? 'text-green-800' : 'text-red-800'
                          }`}>
                            {eligibilityResult.allEligible ? 'You are eligible!' : 'Not eligible'}
                          </h4>
                        </div>
                        <p className={`${
                          eligibilityResult.allEligible ? 'text-green-700' : 'text-red-700'
                        }`}>
                          {eligibilityResult.allEligible 
                            ? 'Congratulations! You meet all the eligibility criteria for this scheme. You can proceed with the application.'
                            : `You meet ${eligibilityResult.correctAnswers} out of ${eligibilityResult.totalQuestions} eligibility criteria. Please check the requirements again or contact your local agricultural office for guidance.`
                          }
                        </p>
                      </div>
                    );
                  }
                  return null;
                })()}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Government Schemes
          </h1>
          <p className="text-xl text-gray-600 mb-2">सरकारी योजनाएं</p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Explore various government schemes designed to support farmers and improve agricultural productivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {schemes.map((scheme) => {
            const colors = getColorClasses(scheme.color);
            return (
              <div
                key={scheme.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`${colors.bg} p-6 text-white`}>
                  <scheme.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{scheme.title}</h3>
                  <p className="text-sm opacity-90">{scheme.subtitle}</p>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {scheme.description}
                  </p>
                  
                  <div className="space-y-3">
                    <button
                      onClick={() => setSelectedScheme(scheme.id)}
                      className={`w-full ${colors.bg} ${colors.hover} text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105`}
                    >
                      Learn More
                    </button>
                    
                    <button
                      onClick={() => {
                        setSelectedScheme(scheme.id);
                        setTimeout(() => setShowEligibility(scheme.id), 500);
                      }}
                      className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-xl border-2 border-gray-200 transition-all duration-300"
                    >
                      Check Eligibility
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('home')}
            className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-8 rounded-xl shadow-lg border-2 border-gray-200 transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Schemes;
