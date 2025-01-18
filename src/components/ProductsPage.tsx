import { useState, useMemo, FC } from 'react';
import { 
  TestTube, PawPrint, Search, Filter,
  ChevronDown,X
} from 'lucide-react';

// Define product types
interface Product {
  id: number;
  name: string;
  category: 'Animal Health' | 'Pharmaceuticals';
  subcategory: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  medicalDetails?: {
    activeIngredients: string[];
    dosage: string;
    administration: string;
    contraindications: string[];
    sideEffects: string[];
    storageConditions: string;
  };
}

// Mock product data
const unsplashImages: Record<'Pharmaceuticals' | 'Animal Health', string[]> = {
  'Pharmaceuticals': [
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNpbmV8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNpbmV8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaWNpbmV8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNpbmV8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNpbmV8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNpbmV8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=500&q=60'
  ],
  'Animal Health': [
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsJTIwaGVhbHRofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsJTIwaGVhbHRofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsJTIwaGVhbHRofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  ]
};

const generateProducts = (): Product[] => {
  const categories = [
    {
      category: 'Animal Health',
      subcategories: ['Veterinary Vaccines', 'Animal Nutrition', 'Parasite Control']
    },
    {
      category: 'Pharmaceuticals',
      subcategories: ['Cardiology', 'Neurology', 'Oncology']
    }
  ];

  const products: Product[] = [];

  categories.forEach((cat: { category: string; subcategories: string[] }) => {
    cat.subcategories.forEach((subcat: string) => {
      for (let i = 0; i < 40; i++) {
        // Use type assertion to tell TypeScript this is a valid key
        const imageUrl = unsplashImages[cat.category as keyof typeof unsplashImages][
          i % unsplashImages[cat.category as keyof typeof unsplashImages].length
        ];
        products.push({
          id: products.length + 1,
          name: `${cat.category} ${subcat} Product ${i + 1}`,
          category: cat.category as 'Animal Health' | 'Pharmaceuticals',
          subcategory: subcat,
          description: `Detailed description for ${cat.category} ${subcat} Product ${i + 1}`,
          imageUrl: imageUrl || '/default-product.svg', // Add a fallback image URL
          imageAlt: `Image for ${cat.category} ${subcat} Product ${i + 1}`,
          medicalDetails: {
            activeIngredients: [`Active Ingredient ${i + 1}`],
            dosage: 'Standard dosage',
            administration: 'Oral administration',
            contraindications: ['No known contraindications'],
            sideEffects: ['Minimal side effects'],
            storageConditions: 'Store in a cool, dry place'
          }
        });
      }
    });
  });

  return products;
};

const ProductsPage: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleProductsCount, setVisibleProductsCount] = useState<number>(8);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const products = useMemo(() => generateProducts(), []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => 
      (selectedCategory ? product.category === selectedCategory : true) &&
      (selectedSubcategory ? product.subcategory === selectedSubcategory : true) &&
      (searchQuery ? 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) 
        : true
      )
    );
  }, [products, selectedCategory, selectedSubcategory, searchQuery]);

  const categories = [...new Set(products.map(p => p.category))];
  const subcategories = [...new Set(products.map(p => p.subcategory))];
  
  const availableCategories = categories.map(category => ({
    value: category,
    label: category,
    icon: category === 'Animal Health' ? PawPrint : TestTube
  }));

  const availableSubcategories = subcategories.map(subcategory => ({
    value: subcategory,
    label: subcategory,
    parentCategory: products.find(p => p.subcategory === subcategory)?.category
  }));

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleIngredientClick = (ingredient: string) => {
    console.log('Ingredient clicked:', ingredient);
  };

  const handleContaindicationClick = (contraindication: string) => {
    console.log('Contraindication clicked:', contraindication);
  };

  const handleEffectClick = (effect: string) => {
    console.log('Side effect clicked:', effect);
  };

  const CategoryFilter: FC = () => (
    <div className="flex flex-wrap gap-2">
      {availableCategories.map((category) => (
        <button
          key={category.value}
          onClick={() => setSelectedCategory(category.value)}
          className={`flex items-center px-3 py-1 rounded-full text-sm ${
            selectedCategory === category.value
              ? 'bg-primary-500 text-white'
              : 'bg-neutral-200 text-neutral-700'
          }`}
        >
          {category.icon && <category.icon className="mr-2 h-4 w-4" />}
          {category.label}
        </button>
      ))}
    </div>
  );

  const SubcategoryFilter: FC = () => (
    <div className="flex flex-wrap gap-2">
      {availableSubcategories
        .filter(
          (sub) => !selectedCategory || sub.parentCategory === selectedCategory
        )
        .map((subcategory) => (
          <button
            key={subcategory.value}
            onClick={() => setSelectedSubcategory(subcategory.value)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedSubcategory === subcategory.value
                ? 'bg-primary-500 text-white'
                : 'bg-neutral-200 text-neutral-700'
            }`}
          >
            {subcategory.label}
          </button>
        ))}
    </div>
  );

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setSearchQuery('');
  };

  const [isCategoryFilterOpen, setIsCategoryFilterOpen] = useState(false);
  const [isSubcategoryFilterOpen, setIsSubcategoryFilterOpen] = useState(false);

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-display font-bold text-primary-900 mb-4">
            Our Product Catalog
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Explore our comprehensive range of pharmaceutical and veterinary products,
            meticulously designed to meet diverse healthcare needs.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4">
            {/* Category Filter */}
            <div className="relative">
              <button
                onClick={() => setIsCategoryFilterOpen(!isCategoryFilterOpen)}
                className="flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <Filter size={16} />
                Categories
                <ChevronDown size={16} />
              </button>
              {isCategoryFilterOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-xl bg-white z-10 p-4">
                  <CategoryFilter />
                </div>
              )}
            </div>
            {/* Subcategory Filter */}
            <div className="relative">
              <button
                onClick={() => setIsSubcategoryFilterOpen(!isSubcategoryFilterOpen)}
                className="flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <Filter size={16} />
                Subcategories
                <ChevronDown size={16} />
              </button>
              {isSubcategoryFilterOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-xl bg-white z-10 p-4">
                  <SubcategoryFilter />
                </div>
              )}
            </div>

            {/* Search Input */}
            <div className="flex items-center bg-neutral-100 rounded-md px-3 py-2">
              <Search size={16} className="text-neutral-500 mr-2" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>

            {/* Reset Filters */}
            {(selectedCategory || selectedSubcategory || searchQuery) && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.slice(0, visibleProductsCount).map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              onClick={() => openProductModal(product)}
            >
              <img 
                src={product.imageUrl || '/default-product.svg'} 
                alt={product.imageAlt || product.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-neutral-600 text-sm mb-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-500">
                    {product.category} | {product.subcategory}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProductsCount < filteredProducts.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleProductsCount(prev => prev + 8)}
              className="bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-600 transition-colors"
            >
              Load More
            </button>
          </div>
        )}

        {/* Product Details Modal */}
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 relative">
                <button 
                  onClick={closeProductModal} 
                  className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-900"
                >
                  <X size={24} />
                </button>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2">
                    <img 
                      src={selectedProduct.imageUrl || '/default-product.svg'} 
                      alt={selectedProduct.imageAlt || selectedProduct.name} 
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold text-primary-900 mb-2">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-neutral-600 mb-4">
                      {selectedProduct.description}
                    </p>
                    
                    {selectedProduct.medicalDetails && (
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-primary-700">Active Ingredients</h3>
                          <ul className="list-disc pl-5">
                            {selectedProduct.medicalDetails.activeIngredients.map((ingredient, i) => (
                              <li 
                                key={i} 
                                onClick={() => handleIngredientClick(ingredient)}
                                className="cursor-pointer hover:text-primary-600"
                              >
                                {ingredient}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-semibold text-primary-700">Contraindications</h3>
                          <ul className="list-disc pl-5">
                            {selectedProduct.medicalDetails.contraindications.map((contraindication, i) => (
                              <li 
                                key={i} 
                                onClick={() => handleContaindicationClick(contraindication)}
                                className="cursor-pointer hover:text-primary-600"
                              >
                                {contraindication}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-semibold text-primary-700">Side Effects</h3>
                          <ul className="list-disc pl-5">
                            {selectedProduct.medicalDetails.sideEffects.map((effect, i) => (
                              <li 
                                key={i} 
                                onClick={() => handleEffectClick(effect)}
                                className="cursor-pointer hover:text-primary-600"
                              >
                                {effect}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-semibold text-primary-700">Dosage</h3>
                          <p>{selectedProduct.medicalDetails.dosage}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-primary-700">Administration</h3>
                          <p>{selectedProduct.medicalDetails.administration}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-primary-700">Storage Conditions</h3>
                          <p>{selectedProduct.medicalDetails.storageConditions}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default ProductsPage;