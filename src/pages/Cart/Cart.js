import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  Minus, 
  Plus, 
  Trash2, 
  ShoppingBag, 
  ArrowLeft, 
  CreditCard,
  Truck,
  Clock
} from 'lucide-react';
import { 
  removeFromCart, 
  addToCart, 
  updateQuantity, 
  clearCart 
} from '../../store/slices/cartSlice';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleIncreaseQuantity = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(removeFromCart(item.id));
  };

  const handleRemoveItem = (id) => {
    const item = items.find(item => item.id === id);
    if (item) {
      // Remove all quantities of this item
      for (let i = 0; i < item.quantity; i++) {
        dispatch(removeFromCart(id));
      }
    }
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      dispatch(clearCart());
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      alert('Order placed successfully! Thank you for your purchase.');
      dispatch(clearCart());
      setIsCheckingOut(false);
    }, 2000);
  };

  const deliveryFee = totalAmount > 500 ? 0 : 50;
  const tax = totalAmount * 0.05; // 5% GST
  const finalTotal = totalAmount + deliveryFee + tax;

  if (items.length === 0) {
    return (
      <div className="cart empty-cart">
        <div className="container">
          <div className="empty-cart-content">
            <div className="empty-cart-icon">
              <ShoppingBag size={80} />
            </div>
            <h2 className="empty-cart-title">Your cart is empty</h2>
            <p className="empty-cart-description">
              Looks like you haven't added any delicious items to your cart yet. 
              Start exploring our menu!
            </p>
            <Link to="/menu" className="btn btn-primary">
              <ArrowLeft size={20} />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="container">
        {/* Cart Header */}
        <div className="cart-header">
          <div className="cart-title-section">
            <h1 className="cart-title">Shopping Cart</h1>
            <p className="cart-subtitle">
              {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          <button 
            onClick={handleClearCart}
            className="clear-cart-btn"
            disabled={isCheckingOut}
          >
            <Trash2 size={18} />
            Clear Cart
          </button>
        </div>

        <div className="cart-content">
          {/* Cart Items */}
          <div className="cart-items">
            <div className="cart-items-header">
              <h3>Order Items</h3>
              <Link to="/menu" className="continue-shopping">
                <ArrowLeft size={16} />
                Continue Shopping
              </Link>
            </div>

            <div className="cart-items-list">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="item-details">
                    <h4 className="item-title">{item.title}</h4>
                    <p className="item-price">₹{item.price} each</p>
                  </div>

                  <div className="item-quantity">
                    <button 
                      className="quantity-btn"
                      onClick={() => handleDecreaseQuantity(item)}
                      disabled={isCheckingOut}
                    >
                      <Minus size={16} />
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                      className="quantity-input"
                      min="1"
                      disabled={isCheckingOut}
                    />
                    <button 
                      className="quantity-btn"
                      onClick={() => handleIncreaseQuantity(item)}
                      disabled={isCheckingOut}
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="item-total">
                    <span className="item-total-price">
                      ₹{item.totalPrice}
                    </span>
                    <button 
                      className="remove-item-btn"
                      onClick={() => handleRemoveItem(item.id)}
                      disabled={isCheckingOut}
                      title="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="order-summary">
            <div className="summary-card">
              <h3 className="summary-title">Order Summary</h3>

              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal ({totalQuantity} items)</span>
                  <span>₹{totalAmount}</span>
                </div>

                <div className="summary-row">
                  <span>Delivery Fee</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="free-delivery">FREE</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>

                <div className="summary-row">
                  <span>GST (5%)</span>
                  <span>₹{Math.round(tax)}</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-row total-row">
                  <span>Total</span>
                  <span>₹{Math.round(finalTotal)}</span>
                </div>
              </div>

              {totalAmount < 500 && (
                <div className="delivery-notice">
                  <Truck size={16} />
                  <span>Add ₹{500 - totalAmount} more for free delivery!</span>
                </div>
              )}

              <div className="delivery-info">
                <div className="delivery-item">
                  <Clock size={16} />
                  <span>Estimated delivery: 25-35 min</span>
                </div>
                <div className="delivery-item">
                  <Truck size={16} />
                  <span>Free delivery on orders over ₹500</span>
                </div>
              </div>

              <button 
                className={`checkout-btn ${isCheckingOut ? 'loading' : ''}`}
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? (
                  <>
                    <div className="loading-spinner"></div>
                  </>
                ) : (
                  <>
                    <CreditCard size={20} />
                    Proceed to Checkout
                  </>
                )}
              </button>

              <div className="payment-methods">
                <p>We accept:</p>
                <div className="payment-icons">
                  <span className="payment-icon">💳</span>
                  <span className="payment-icon">💰</span>
                  <span className="payment-icon">📱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;