import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';
import { setSearchTerm } from '../../store/slices/productsSlice';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { totalQuantity } = useSelector(state => state.cart);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchQuery));
    navigate('/menu');
    setIsMenuOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    dispatch(setSearchTerm(e.target.value));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <div className="logo-icon">🍕</div>
          <span className="logo-text">Food-Fusion</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
        </nav>

        {/* Search Bar */}
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search for food..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
        </form>

        {/* Right Side Icons */}
        <div className="header-actions">
          <Link to="/profile" className="action-btn">
            <User size={24} />
          </Link>
          
          <Link to="/cart" className="cart-btn">
            <ShoppingCart size={24} />
            {totalQuantity > 0 && (
              <span className="cart-badge">{totalQuantity}</span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
        <div className="mobile-nav-content">
          <Link to="/" className="mobile-nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/menu" className="mobile-nav-link" onClick={closeMenu}>
            Menu
          </Link>
          <Link to="/about" className="mobile-nav-link" onClick={closeMenu}>
            About
          </Link>
          <Link to="/contact" className="mobile-nav-link" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/profile" className="mobile-nav-link" onClick={closeMenu}>
            Profile
          </Link>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;