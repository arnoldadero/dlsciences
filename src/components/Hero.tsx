import { useState } from 'react';
import { ChevronRight, Play, Shield,} from 'lucide-react';

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleVideoModal = () => {
    setIsVideoModalOpen(!isVideoModalOpen);
  };

  return (
    <div className="relative min-h-screen flex items-center bg-primary-900 overflow-hidden">
      {/* Elegant Gradient Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 
        opacity-90 transform -skew-y-6 origin-top-left"
      ></div>
      
      {/* Subtle Particle Background Effect */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 0%, transparent 20%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05) 0%, transparent 20%)
          `,
          backgroundSize: '100% 100%'
        }}
      ></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="text-accent-300" size={24} />
              <span className="text-sm font-medium text-accent-200 tracking-wide uppercase">
                Trusted Healthcare Partner
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-4">
              Advancing Healthcare <br />
              <span className="text-accent-300">Across East Africa</span>
            </h1>
            
            <p className="text-xl text-neutral-200 mb-6 leading-relaxed font-light">
              With over 1,000 product lines and 29 years of excellence, we're committed to improving lives through innovative pharmaceutical solutions that transform healthcare accessibility.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                className="bg-white text-primary-700 px-6 py-3 rounded-full 
                font-semibold hover:bg-neutral-50 transition-all duration-300 
                flex items-center shadow-elegant group"
              >
                Explore Our Products 
                <ChevronRight 
                  className="ml-2 group-hover:translate-x-1 transition-transform" 
                  size={20} 
                />
              </button>

              <button 
                onClick={handleVideoModal}
                className="bg-transparent border-2 border-white/20 text-white 
                px-6 py-3 rounded-full font-medium hover:bg-white/10 
                transition-all duration-300 flex items-center group"
              >
                <Play 
                  className="mr-2 text-accent-300 group-hover:scale-110 transition-transform" 
                  size={20} 
                  fill="currentColor" 
                />
                Watch Video
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden md:block">
            <div 
              className="bg-white/10 border border-white/20 rounded-2xl 
              p-6 transform transition-all duration-500 hover:scale-105 
              hover:shadow-elegant"
            >
              <img 
                src="/src/Dawa-Life-Sciences_4-1.jpg"
                alt="Dawa Life Sciences" 
                className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal (to be implemented) */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg max-w-4xl w-full relative">
            <button
              onClick={handleVideoModal}
              className="absolute top-2 right-2 bg-neutral-200 rounded-full p-1 hover:bg-neutral-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/72jFpYBt_mY?controls=0&loop=1&playlist=72jFpYBt_mY"
              title="YouTube video player"
              style={{ border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;