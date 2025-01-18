import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import ProductsPage from './components/ProductsPage';
import StakeholderSection from './components/StakeholderSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-transparent text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ProductCategories />
              <ProductsPage />
              <StakeholderSection />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;