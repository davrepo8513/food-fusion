// Test file to verify all components are properly imported and working
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';

// Import all components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductCard from './components/ProductCard/ProductCard';
import Loading from './components/Loading/Loading';

// Import all pages
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Cart from './pages/Cart/Cart';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

// Test component
const TestComponents = () => {
  const testProduct = {
    id: 1,
    title: "Test Pizza",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop",
    category: "pizza",
    description: "Test pizza description",
    rating: 4.5,
    cookTime: "15-20 min"
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <h1>Component Test Page</h1>
          
          <section>
            <h2>Header Component</h2>
            <Header />
          </section>

          <section>
            <h2>Loading Component</h2>
            <Loading />
          </section>

          <section>
            <h2>Product Card Component</h2>
            <ProductCard product={testProduct} />
          </section>

          <section>
            <h2>Footer Component</h2>
            <Footer />
          </section>

          <section>
            <h2>Pages Test</h2>
            <p>All pages are available:</p>
            <ul>
              <li>Home - ✓</li>
              <li>Menu - ✓</li>
              <li>Cart - ✓</li>
              <li>About - ✓</li>
              <li>Contact - ✓</li>
            </ul>
          </section>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default TestComponents;