import { DawaLogo } from './DawaLogo';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      label: 'About', 
      href: '#about',
      dropdown: [
        { label: 'Our Story', href: '#our-story' },
        { label: 'Leadership', href: '#leadership' },
      ]
    },
    { 
      label: 'Products', 
      href: '#products',
      dropdown: [
        { 
          label: 'Animal Health', 
          href: '/products/animal-health',
          onClick: () => navigate('/products/animal-health')
        },
        { 
          label: 'Pharmaceuticals', 
          href: '/products/pharmaceuticals',
          onClick: () => navigate('/products/pharmaceuticals')
        },
        { label: 'Medical Devices', href: '#medical-devices' },
      ]
    },
    { 
      label: 'Insights', 
      href: '#insights',
      dropdown: [
        { label: 'Blog', href: '/blog' },
        { label: 'Health Insights', href: '/blog/health-insights' },
        { label: 'Research', href: '/blog/research' }
      ]
    },
    { label: 'Become a Partner', href: '#partner' },
    { label: 'Investors', href: '#investors' },
    { label: 'Contact', href: '#contact' },
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-elegant' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <DawaLogo 
              className={`h-10 transition-all ${
                isScrolled ? 'text-primary-500' : 'text-white'
              }`} 
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href={item.href} 
                  className={`
                    text-sm font-medium tracking-wide uppercase
                    transition-colors duration-300
                    ${isScrolled ? 'text-primary-600 hover:text-primary-800' : 'text-white hover:text-gray-200'}
                    ${item.dropdown ? 'flex items-center' : ''}
                  `}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown 
                      size={16} 
                      className="ml-1 transform transition-transform group-hover:rotate-180" 
                    />
                  )}
                </a>

                {item.dropdown && activeDropdown === item.label && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 bg-white 
                    rounded-lg shadow-elegant border border-gray-100 
                    transition-all duration-300 ease-in-out"
                  >
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        onClick={subItem.onClick}
                        className="block px-4 py-3 text-sm text-primary-600 
                        hover:bg-primary-50 hover:text-primary-800 
                        first:rounded-t-lg last:rounded-b-lg"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`
                p-2 rounded-md focus:outline-none focus:ring-2
                ${isScrolled ? 'text-primary-600' : 'text-white'}
              `}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className="md:hidden absolute top-full left-0 w-full 
          bg-white shadow-lg border-t border-gray-200"
        >
          {navItems.map((item) => (
            <div key={item.label} className="border-b last:border-b-0">
              <div
                className="cursor-pointer"
              >
                <a
                  href={item.dropdown ? undefined : item.href}
                  onClick={(e) => {
                    if (item.dropdown) {
                      e.preventDefault();
                      toggleDropdown(item.label);
                    }
                  }}
                  className="block px-4 py-3 text-primary-600
                  hover:bg-primary-50 text-sm font-medium flex items-center justify-between"
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      size={16}
                      className={`ml-2 transform transition-transform ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </a>
              </div>
              {item.dropdown && (
                <div
                  className={`bg-primary-50 px-4 overflow-hidden transition-all duration-300 ${
                    activeDropdown === item.label ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      onClick={subItem.onClick}
                      className="block py-2 text-sm text-primary-700
                      hover:text-primary-900"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;