
import { Wheat, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

const Header = ({ currentSection, onNavigate }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'होम / Home', labelEn: 'Home' },
    { id: 'schemes', label: 'योजनाएं / Schemes', labelEn: 'Schemes' },
    { id: 'about', label: 'जानकारी / About', labelEn: 'About' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <Wheat className="h-8 w-8 text-green-600" />
            <div>
              <h1 className="text-xl font-bold text-green-800">Farmers Ally</h1>
              <p className="text-xs text-green-600">किसान मित्र</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentSection === item.id
                    ? 'bg-green-100 text-green-800 border-2 border-green-300'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                }`}
              >
                {item.labelEn}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 mb-2 ${
                  currentSection === item.id
                    ? 'bg-green-100 text-green-800 border-2 border-green-300'
                    : 'text-gray-700 hover:bg-green-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
