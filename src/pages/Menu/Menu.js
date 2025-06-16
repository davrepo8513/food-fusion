import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Filter, Grid, List, Search } from 'lucide-react';
import { 
  fetchAllProducts, 
  setSelectedCategory, 
  setSearchTerm 
} from '../../store/slices/productsSlice';
import Loading from '../../components/Loading/Loading';
import './Menu.css';

// Lazy load components
const ProductCard = lazy(() => import('../../components/ProductCard/ProductCard'));

const Menu = () => {
  const dispatch = useDispatch();
  const { 
    filteredItems, 
    categories, 
    selectedCategory, 
    loading, 
    error,
    searchTerm 
  } = useSelector(state => state.products);

  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const handleCategoryChange = (category) => {
    dispatch(setSelectedCategory(category));
    setShowFilters(false);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setLocalSearchTerm(value);
    dispatch(setSearchTerm(value));
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const getSortedProducts = () => {
    const products = [...filteredItems];
    
    switch (sortBy) {
      case 'price-low':
        return products.sort((a, b) => a.price - b.price);
      case 'price-high':
        return products.sort((a, b) => b.price - a.price);
      case 'rating':
        return products.sort((a, b) => b.rating - a.rating);
      case 'name':
      default:
        return products.sort((a, b) => a.title.localeCompare(b.title));
    }
  };

  const sortedProducts = getSortedProducts();

  if (loading) {
    return <Loading message="Loading our delicious menu..." />;
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-content">
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
          <button 
            onClick={() => dispatch(fetchAllProducts())}
            className="btn btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="menu">
      <div className="container">
        {/* Page Header */}
        <div className="menu-header">
          <div className="menu-title-section">
            <h1 className="menu-title">Our Menu</h1>
            <p className="menu-subtitle">
              Discover our delicious selection of freshly prepared dishes
            </p>
          </div>

          {/* Search and Controls */}
          <div className="menu-controls">
            <div className="search-container">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search for dishes..."
                value={localSearchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>

            <div className="control-buttons">
              <button
                className={`filter-toggle ${showFilters ? 'active' : ''}`}
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={20} />
                Filters
              </button>

              <div className="view-toggle">
                <button
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={20} />
                </button>
                <button
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        <div className={`filters-panel ${showFilters ? 'show' : ''}`}>
          <div className="filters-content">
            <div className="filter-group">
              <h3 className="filter-title">Categories</h3>
              <div className="category-filters">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category === 'all' ? 'All Items' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <h3 className="filter-title">Sort By</h3>
              <select 
                value={sortBy} 
                onChange={handleSortChange}
                className="sort-select"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
                <option value="rating">Rating (High to Low)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="results-info">
          <p className="results-count">
            Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'item' : 'items'}
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
            {localSearchTerm && ` for "${localSearchTerm}"`}
          </p>
        </div>

        {/* Products Grid/List */}
        {sortedProducts.length === 0 ? (
          <div className="no-results">
            <div className="no-results-content">
              <div className="no-results-icon">🔍</div>
              <h3>No dishes found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  dispatch(setSelectedCategory('all'));
                  dispatch(setSearchTerm(''));
                  setLocalSearchTerm('');
                }}
                className="btn btn-primary"
              >
                Clear Filters
              </button>
            </div>
          </div>
        ) : (
          <div className={`products-container ${viewMode}`}>
            <Suspense fallback={<Loading />}>
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Suspense>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;