
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Schemes from '../components/Schemes';
import About from '../components/About';
import Footer from '../components/Footer';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const navigateToSection = (section: string) => {
    setCurrentSection(section);
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'schemes':
        return <Schemes onNavigate={navigateToSection} />;
      case 'about':
        return <About onNavigate={navigateToSection} />;
      default:
        return (
          <>
            <Hero onGetStarted={() => navigateToSection('schemes')} />
            <About onNavigate={navigateToSection} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header currentSection={currentSection} onNavigate={navigateToSection} />
      {renderCurrentSection()}
      <Footer />
    </div>
  );
};

export default Index;
