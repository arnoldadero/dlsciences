import { useState } from 'react';
import { 
  Phone, Mail, MapPin, Send, Linkedin, Twitter, Facebook, 
  Instagram, ChevronRight, CheckCircle 
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic email validation
    if (email && /\S+@\S+\.\S+/.test(email)) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/dawalifesciences',
      color: 'blue' 
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/dawalifesciences',
      color: 'sky' 
    },
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/dawalifesciences',
      color: 'indigo' 
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/dawalifesciences',
      color: 'pink' 
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-20 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 bg-repeat" 
        style={{
          backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%, transparent)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo-white.png" 
                alt="Dawa Life Sciences Logo" 
                className="h-12 w-auto" 
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Pioneering healthcare solutions across East Africa, 
              committed to improving lives through innovative pharmaceutical research and development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    text-gray-400 hover:text-${social.color}-400 
                    transition-colors duration-300 group
                  `}
                >
                  <social.icon 
                    size={24} 
                    className="group-hover:scale-110 transition-transform" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#about" 
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <ChevronRight 
                      size={16} 
                      className="mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-all" 
                    />
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#products" 
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <ChevronRight 
                      size={16} 
                      className="mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-all" 
                    />
                    Products
                  </a>
                </li>
                <li>
                  <a 
                    href="#careers" 
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <ChevronRight 
                      size={16} 
                      className="mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-all" 
                    />
                    Careers
                  </a>
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#news" 
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <ChevronRight 
                      size={16} 
                      className="mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-all" 
                    />
                    News
                  </a>
                </li>
                <li>
                  <a 
                    href="#investors" 
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <ChevronRight 
                      size={16} 
                      className="mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-all" 
                    />
                    Investors
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <ChevronRight 
                      size={16} 
                      className="mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-all" 
                    />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400 space-x-3">
                <Phone size={20} className="text-blue-500" />
                <span>+254 (0) 20 123 4567</span>
              </li>
              <li className="flex items-center text-gray-400 space-x-3">
                <Mail size={20} className="text-green-500" />
                <span>info@dawalife.com</span>
              </li>
              <li className="flex items-center text-gray-400 space-x-3">
                <MapPin size={20} className="text-red-500" />
                <span>Thika, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Stay Connected</h4>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-full bg-gray-800 text-white 
                    placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500
                    transition-all duration-300"
                  required
                />
                <Send 
                  size={20} 
                  className="absolute right-4 top-1/2 -translate-y-1/2 
                    text-gray-400 hover:text-white cursor-pointer"
                  onClick={handleSubscribe}
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-900 text-white px-4 py-3 rounded-full 
                  hover:bg-blue-800 transition-colors flex items-center justify-center"
              >
                {subscribed ? (
                  <>
                    <CheckCircle size={20} className="mr-2 text-green-400" />
                    Subscribed
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
            {subscribed && (
              <p className="text-green-400 text-sm mt-2 text-center">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Dawa Life Sciences. 
            All rights reserved. 
            <span className="ml-4 text-sm">
              <a 
                href="/privacy-policy" 
                className="hover:text-white transition-colors mr-3"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-of-service" 
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;