import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Users, Award } from 'lucide-react';
import { fetchAllProducts } from '../../store/slices/productsSlice';
import Loading from '../../components/Loading/Loading';
import './Home.css';

// Lazy load components
const ProductCard = lazy(() => import('../../components/ProductCard/ProductCard'));

const Home = () => {
  const dispatch = useDispatch();
  const { items: products, loading } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const featuredProducts = products.slice(0, 6);

  const stats = [
    { icon: <Users size={40} />, number: '10K+', label: 'Happy Customers' },
    { icon: <Star size={40} />, number: '4.9', label: 'Average Rating' },
    { icon: <Clock size={40} />, number: '30min', label: 'Delivery Time' },
    { icon: <Award size={40} />, number: '50+', label: 'Menu Items' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Delicious Food
                <span className="highlight"> Delivered</span>
                <br />
                Right to Your Door
              </h1>
              <p className="hero-description">
                Experience the finest culinary delights with Food-Fusion. 
                Fresh ingredients, authentic flavors, and lightning-fast delivery 
                make every meal memorable.
              </p>
              <div className="hero-buttons">
                <Link to="/menu" className="btn btn-primary">
                  Order Now
                  <ArrowRight size={20} />
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=600&fit=crop" 
                alt="Delicious Food"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Dishes</h2>
            <p className="section-description">
              Discover our most popular and delicious menu items
            </p>
          </div>

          {loading ? (
            <Loading message="Loading featured dishes..." />
          ) : (
            <div className="products-grid">
              <Suspense fallback={<Loading />}>
                {featuredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </Suspense>
            </div>
          )}

          <div className="section-footer">
            <Link to="/menu" className="btn btn-outline">
              View All Menu
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Food-Fusion?</h2>
            <p className="section-description">
              We're committed to providing the best food experience
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3 className="feature-title">Fast Delivery</h3>
              <p className="feature-description">
                Get your food delivered in 30 minutes or less, guaranteed fresh and hot.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🥘</div>
              <h3 className="feature-title">Fresh Ingredients</h3>
              <p className="feature-description">
                We use only the freshest, locally-sourced ingredients in all our dishes.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👨‍🍳</div>
              <h3 className="feature-title">Expert Chefs</h3>
              <p className="feature-description">
                Our experienced chefs craft each dish with passion and expertise.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3 className="feature-title">Easy Payment</h3>
              <p className="feature-description">
                Multiple payment options including cash, card, and digital wallets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Order?</h2>
            <p className="cta-description">
              Join thousands of satisfied customers and experience the Food-Fusion difference today!
            </p>
            <Link to="/menu" className="btn btn-primary btn-large">
              Start Ordering Now
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;