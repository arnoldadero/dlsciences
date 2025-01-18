import { useState } from 'react';
import { 
  Heart, Brain, Microscope, Stethoscope, 
  PawPrint, ChevronRight, CheckCircle, TestTube 
} from 'lucide-react';

const ProductCategories = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    { 
      name: 'Cardiology', 
      count: '120+ Products',
      icon: Heart,
      description: 'Comprehensive cardiovascular solutions for heart health management.',
      color: {
        background: 'bg-primary-50',
        text: 'text-primary-700',
        iconBg: 'bg-primary-100'
      },
      specialties: [
        'Antihypertensives',
        'Anticoagulants',
        'Lipid Regulators'
      ]
    },
    { 
      name: 'Gastroenterology', 
      count: '85+ Products',
      icon: Microscope,
      description: 'Advanced treatments for digestive health and gastrointestinal disorders.',
      color: {
        background: 'bg-accent-50',
        text: 'text-accent-700',
        iconBg: 'bg-accent-100'
      },
      specialties: [
        'Acid Reducers',
        'Probiotics',
        'Anti-inflammatory'
      ]
    },
    { 
      name: 'Neurology', 
      count: '95+ Products',
      icon: Brain,
      description: 'Innovative neurological medications for complex brain and nerve conditions.',
      color: {
        background: 'bg-neutral-50',
        text: 'text-neutral-700',
        iconBg: 'bg-neutral-100'
      },
      specialties: [
        'Antiepileptics',
        'Migraine Treatments',
        'Neuropathic Pain'
      ]
    },
    { 
      name: 'Oncology', 
      count: '75+ Products',
      icon: Stethoscope,
      description: 'Cutting-edge oncological treatments supporting cancer patient care.',
      color: {
        background: 'bg-primary-50',
        text: 'text-primary-700',
        iconBg: 'bg-primary-100'
      },
      specialties: [
        'Chemotherapy Agents',
        'Targeted Therapies',
        'Supportive Care'
      ]
    },
    { 
      name: 'Animal Health', 
      count: '150+ Products',
      icon: PawPrint,
      description: 'Comprehensive veterinary solutions for animal wellness and disease management.',
      color: {
        background: 'bg-emerald-50',
        text: 'text-emerald-700',
        iconBg: 'bg-emerald-100'
      },
      specialties: [
        'Livestock Vaccines',
        'Companion Animal Medications',
        'Parasiticides'
      ]
    },
    { 
      name: 'General Medicine', 
      count: '200+ Products',
      icon: TestTube,
      description: 'Broad spectrum of essential medications covering various medical needs.',
      color: {
        background: 'bg-blue-50',
        text: 'text-blue-700',
        iconBg: 'bg-blue-100'
      },
      specialties: [
        'Antibiotics',
        'Pain Management',
        'Chronic Disease Treatments'
      ]
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-primary-900 mb-4">
            Our Product Categories
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive healthcare solutions across multiple medical specialties, 
            designed to address diverse patient needs with precision and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div 
              key={category.name}
              className={`
                ${category.color.background} ${category.color.text}
                rounded-xl p-6 transform transition-all duration-300
                hover:scale-105 hover:shadow-elegant
                flex flex-col justify-between
              `}
              onMouseEnter={() => setActiveCategory(category.name)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="flex items-center mb-4">
                <div className={`
                  ${category.color.iconBg} 
                  rounded-full p-3 mr-4 
                  transition-transform 
                  ${activeCategory === category.name ? 'scale-110' : ''}
                `}>
                  <category.icon 
                    size={24} 
                    className={category.color.text} 
                  />
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>

              <p className="text-sm mb-4 opacity-80">
                {category.description}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium opacity-70">
                  {category.count}
                </span>
                <button 
                  className={`
                    ${category.color.text} hover:${category.color.text}/80
                    flex items-center text-sm font-semibold
                    transition-colors group
                  `}
                >
                  View Products
                  <ChevronRight 
                    size={16} 
                    className="ml-1 group-hover:translate-x-1 transition-transform" 
                  />
                </button>
              </div>

              {activeCategory === category.name && (
                <div className="mt-4 border-t border-white/20 pt-4">
                  <h4 className="text-sm font-medium mb-2">Key Specialties:</h4>
                  <ul className="space-y-1">
                    {category.specialties.map((specialty) => (
                      <li 
                        key={specialty} 
                        className="flex items-center text-xs"
                      >
                        <CheckCircle 
                          size={12} 
                          className="mr-2 opacity-70" 
                        />
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCategories;