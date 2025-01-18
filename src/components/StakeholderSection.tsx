import { useState } from 'react';
import { Users, Building2, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

const StakeholderSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const stakeholders = [
    {
      title: 'Healthcare Professionals',
      icon: Users,
      description: 'Access scientific data, product info, and resources for your medical practice.',
      cta: 'Access HCP Portal',
      benefits: [
        'Product Monographs',
        'Medical Education',
        'Research Insights'
      ],
      color: 'bg-blue-900/10 text-blue-900',
    },
    {
      title: 'Potential Partners',
      icon: Building2,
      description: 'Explore strategic partnership opportunities and our extensive distribution network across East Africa.',
      cta: 'Partner With Us',
      benefits: [
        'Robust Supply Chain',
        'Market Expansion',
        'Collaborative Growth'
      ],
      color: 'bg-emerald-900/10 text-emerald-900',
    },
    {
      title: 'Investors',
      icon: BookOpen,
      description: 'Dive into our financial performance, innovative growth strategy, and compelling market presence.',
      cta: 'Investor Relations',
      benefits: [
        'Transparent Reporting',
        'Long-term Vision',
        'Sustainable Growth'
      ],
      color: 'bg-slate-900/10 text-slate-900',
    },
  ];

  return (
    <div className="py-24 bg-gray-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Your Gateway to Tailored Resources
          </h2>
          <p className="text-xl text-gray-600">
            Connecting stakeholders through innovative solutions and strategic insights
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stakeholders.map((stakeholder, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredCard(stakeholder.title)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`${stakeholder.color} rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
            >
              {/* Animated Background */}
              <div 
                className={`
                  absolute inset-0 bg-${stakeholder.color.split(' ')[0].split('-')[1]}-50 opacity-0 
                  group-hover:opacity-50 transition-opacity duration-300
                `}
              ></div>

              {/* Icon */}
              <div 
                className={`
                  mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center
                  bg-${stakeholder.color.split(' ')[0].split('-')[1]}-100 text-${stakeholder.color.split(' ')[0].split('-')[1]}-900
                  transition-transform group-hover:scale-110
                `}
              >
                <stakeholder.icon size={40} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {stakeholder.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {stakeholder.description}
              </p>

              {/* Benefits List */}
              <div className="mb-8 space-y-3">
                {stakeholder.benefits.map((benefit) => (
                  <div 
                    key={benefit} 
                    className="flex items-center text-gray-700 text-left"
                  >
                    <CheckCircle 
                      size={20} 
                      className={`mr-3 text-${stakeholder.color.split(' ')[0].split('-')[1]}-500`} 
                    />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button 
                className={`
                  w-full flex items-center justify-center py-3 rounded-full
                  bg-${stakeholder.color.split(' ')[0].split('-')[1]}-900 text-white font-semibold
                  hover:bg-${stakeholder.color.split(' ')[0].split('-')[1]}-800 transition-colors
                  group/button
                `}
              >
                {stakeholder.cta}
                <ArrowRight 
                  size={20} 
                  className="ml-2 group-hover/button:translate-x-1 transition-transform" 
                />
              </button>

              {/* Hover Indicator */}
              {hoveredCard === stakeholder.title && (
                <div 
                  className={`
                    absolute bottom-0 left-0 right-0 h-1 
                    bg-${stakeholder.color.split(' ')[0].split('-')[1]}-500 animate-pulse
                  `}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StakeholderSection;