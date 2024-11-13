// components/NavBar.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X } from 'lucide-react';

const colorSchemes = {
  neonGreen: {
    primary: 'text-[#00ff00]',
    primaryBg: 'bg-[#00ff00]',
    hover: 'hover:text-[#33ff33]',
    border: 'border-[#00ff00]/20',
    bg: 'bg-[#1a1a1a]',
  },
  cyberPink: {
    primary: 'text-[#ff00ff]',
    primaryBg: 'bg-[#ff00ff]',
    hover: 'hover:text-[#ff33ff]',
    border: 'border-[#ff00ff]/20',
    bg: 'bg-[#1a1a1a]',
  },
  neonBlue: {
    primary: 'text-[#00ffff]',
    primaryBg: 'bg-[#00ffff]',
    hover: 'hover:text-[#33ffff]',
    border: 'border-[#00ffff]/20',
    bg: 'bg-[#1a1a1a]',
  },
  retroOrange: {
    primary: 'text-[#ff8c00]',
    primaryBg: 'bg-[#ff8c00]',
    hover: 'hover:text-[#ffa500]',
    border: 'border-[#ff8c00]/20',
    bg: 'bg-[#1a1a1a]',
  }
};

const NavBar = ({ navItems, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const colors = useMemo(() => colorSchemes.neonGreen, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
      const scrollPosition = window.scrollY + 100;

      const currentSection = sections.find(section => {
        if (!section) return false;
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        return scrollPosition >= offset && scrollPosition < offset + height;
      });

      if (currentSection) setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const LogoVariant = () => (
    <div className="flex items-center space-x-2">
      <span 
        className={`text-[28px] font-bold tracking-wider animate-pulse ${colors.primary}`}
        style={{ textShadow: '0 0 10px currentColor' }}
      >
        &lt;SC/&gt;
      </span>
    </div>
  );

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 
        ${isScrolled ? `${colors.bg}/95 backdrop-blur-md shadow-lg` : `${colors.bg}/50 backdrop-blur-sm`}
        ${colors.border}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div 
            onClick={() => scrollToSection('home')}
            className="cursor-pointer"
          >
            <LogoVariant />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center flex-1 space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-[16px] transition-all tracking-wider uppercase
                         hover:scale-110 relative group px-4 py-2 rounded-md
                         ${activeSection === item.toLowerCase() ? 
                           `${colors.primary} ${colors.primaryBg}/10` : 
                           colors.hover}`}
              >
                {item}
                <span 
                  className={`absolute -bottom-1 left-0 w-0 h-[1px] 
                           ${colors.primaryBg} transition-all group-hover:w-full`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${colors.primary} transition-colors`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden
          ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className={`px-4 py-2 ${colors.bg}/95 backdrop-blur-md ${colors.border}`}>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item);
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-3 text-[16px] tracking-wider uppercase
                       ${activeSection === item.toLowerCase() ? 
                         colors.primary : 
                         colors.hover}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;