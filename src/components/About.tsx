
import { Shield, Users, Smartphone, Heart, Award, Globe } from 'lucide-react';

interface AboutProps {
  onNavigate: (section: string) => void;
}

const About = ({ onNavigate }: AboutProps) => {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Trusted',
      description: 'Bank-level security with fraud protection to keep your data safe',
      hindi: 'सुरक्षित और विश्वसनीय'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Works perfectly on smartphones with simple, touch-friendly design',
      hindi: 'मोबाइल के लिए उपयुक्त'
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Available in Hindi, English, and regional languages',
      hindi: 'बहुभाषी सहायता'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Connect with NGOs, donors, and fellow farmers for support',
      hindi: 'समुदायिक सहायता'
    },
    {
      icon: Award,
      title: 'Government Verified',
      description: 'All schemes and information are verified from official sources',
      hindi: 'सरकारी सत्यापित'
    },
    {
      icon: Heart,
      title: 'Made for Farmers',
      description: 'Designed specifically for the Indian farming community',
      hindi: 'किसानों के लिए बनाया गया'
    }
  ];

  const stats = [
    { number: '50+', label: 'Government Schemes', hindi: 'सरकारी योजनाएं' },
    { number: '10+', label: 'Languages Supported', hindi: 'भाषाओं में उपलब्ध' },
    { number: '24/7', label: 'Support Available', hindi: 'सहायता उपलब्ध' },
    { number: '100%', label: 'Free to Use', hindi: 'निःशुल्क उपयोग' }
  ];

  return (
    <section id="about-section" className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Farmers Ally
          </h2>
          <p className="text-xl text-gray-600 mb-2">किसान मित्र के बारे में</p>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Farmers Ally is a comprehensive digital platform designed to bridge the gap between Indian farmers 
              and government schemes. We simplify access to subsidies, loans, and support programs while ensuring 
              security and ease of use.
            </p>
            <p className="text-base text-gray-500">
              किसान मित्र एक व्यापक डिजिटल प्लेटफॉर्म है जो भारतीय किसानों और सरकारी योजनाओं के बीच की दूरी को क़म करने के लिए डिज़ाइन किया गया है।
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-700 font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.hindi}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.hindi}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl mb-4 leading-relaxed max-w-4xl mx-auto">
            To empower every farmer in India with easy access to government schemes, subsidies, and community support, 
            while protecting them from fraud and ensuring their digital rights.
          </p>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            हमारा मिशन भारत के हर किसान को सरकारी योजनाओं, सब्सिडी और सामुदायिक सहायता तक आसान पहुंच प्रदान करना है।
          </p>
        </div>

        {/* How It Works */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Explore Schemes</h4>
              <p className="text-gray-600">Browse through available government schemes and find the ones suitable for you</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Check Eligibility</h4>
              <p className="text-gray-600">Use our simple eligibility checker to see if you qualify for the schemes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Apply & Get Support</h4>
              <p className="text-gray-600">Apply for schemes and get help from our community when needed</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready to Get Started?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('schemes')}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore Schemes
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 px-8 rounded-xl shadow-lg border-2 border-gray-200 transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
