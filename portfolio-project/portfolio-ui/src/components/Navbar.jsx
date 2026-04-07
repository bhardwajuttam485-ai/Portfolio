import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Only add scroll listener on home page
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
        Uttam Bhardwaj
      </Link>

      <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        {location.pathname === '/' ? (
          <>
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Home
            </a>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About
            </a>
            <a
              href="#work"
              className={activeSection === 'work' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}
            >
              Work
            </a>
            <a
              href="#skills"
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
            >
              Skills
            </a>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
          </>
        ) : (
          <Link to="/" onClick={closeMobileMenu}>Home</Link>
        )}
      </nav>

      <div className="nav-icons">
        <button
          className="hamburger-menu"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </header>
  );
}