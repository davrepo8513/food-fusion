import React from 'react';
import { useDispatch } from 'react-redux';
import { Star, Clock, Plus } from 'lucide-react';
import { addToCart } from '../../store/slices/cartSlice';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={16} className="star filled" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" size={16} className="star half-filled" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} className="star empty" />);
    }

    return stars;
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
        <div className="product-overlay">
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            aria-label={`Add ${product.title} to cart`}
          >
            <Plus size={20} />
            Add to Cart
          </button>
        </div>
        <div className="product-category">{product.category}</div>
      </div>

      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-meta">
          <div className="product-rating">
            <div className="stars">
              {renderStars(product.rating)}
            </div>
            <span className="rating-text">({product.rating})</span>
          </div>
          
          <div className="product-time">
            <Clock size={16} />
            <span>{product.cookTime}</span>
          </div>
        </div>

        <div className="product-footer">
          <div className="product-price">
            <span className="price">₹{product.price}</span>
          </div>
          
          <button 
            className="quick-add-btn"
            onClick={handleAddToCart}
            aria-label={`Quick add ${product.title} to cart`}
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;