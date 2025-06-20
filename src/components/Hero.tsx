
import { ArrowDown, Wheat, Shield, Users } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 transform rotate-12">
          <Wheat className="h-16 w-16 text-green-600" />
        </div>
        <div className="absolute top-32 right-20 transform -rotate-12">
          <Wheat className="h-12 w-12 text-yellow-600" />
        </div>
        <div className="absolute bottom-32 left-20 transform rotate-45">
          <Wheat className="h-14 w-14 text-green-500" />
        </div>
        <div className="absolute bottom-10 right-10 transform -rotate-45">
          <Wheat className="h-10 w-10 text-blue-600" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
              <span className="text-green-600">Farmers</span> Ally
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-2">
              किसान मित्र
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Your trusted companion for government schemes, subsidies, and farming support
            </p>
            <p className="text-base md:text-lg text-gray-500 mt-2">
              सरकारी योजनाओं और सब्सिडी के लिए आपका विश्वसनीय साथी
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Government Schemes</h3>
              <p className="text-gray-600 text-sm">Access PM-KISAN, Crop Insurance, and other schemes easily</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Support</h3>
              <p className="text-gray-600 text-sm">Connect with NGOs and donors for immediate help</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Wheat className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Simple & Secure</h3>
              <p className="text-gray-600 text-sm">Easy-to-use interface with fraud protection</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onGetStarted}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg min-w-[200px]"
            >
              Get Started
              <br />
              <span className="text-sm">शुरू करें</span>
            </button>
            
            <button
              onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 text-lg min-w-[200px]"
            >
              Learn More
              <br />
              <span className="text-sm">और जानें</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <ArrowDown className="h-8 w-8 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
