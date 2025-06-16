import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Edit3, 
  Save, 
  X, 
  ShoppingBag,
  Heart,
  Clock,
  Star,
  Camera
} from 'lucide-react';
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    address: '123 Food Street, Mumbai, Maharashtra 400001',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  });

  const [editData, setEditData] = useState({ ...profileData });

  const orderHistory = [
    {
      id: '#ORD001',
      date: '2024-01-15',
      items: ['Margherita Pizza', 'Chocolate Cake'],
      total: 1299,
      status: 'Delivered'
    },
    {
      id: '#ORD002',
      date: '2024-01-10',
      items: ['Classic Burger', 'Iced Coffee'],
      total: 899,
      status: 'Delivered'
    },
    {
      id: '#ORD003',
      date: '2024-01-05',
      items: ['Veggie Pizza', 'Fresh Orange Juice'],
      total: 1199,
      status: 'Delivered'
    }
  ];

  const favorites = [
    {
      id: 1,
      name: 'Margherita Pizza',
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=100&h=100&fit=crop',
      price: 899
    },
    {
      id: 2,
      name: 'Classic Burger',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop',
      price: 699
    },
    {
      id: 3,
      name: 'Chocolate Cake',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=100&h=100&fit=crop',
      price: 499
    }
  ];

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({ ...profileData });
  };

  const handleSave = () => {
    setProfileData({ ...editData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ ...profileData });
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User size={20} /> },
    { id: 'orders', label: 'Orders', icon: <ShoppingBag size={20} /> },
    { id: 'favorites', label: 'Favorites', icon: <Heart size={20} /> }
  ];

  return (
    <div className="profile-page">
      <div className="container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar-section">
            <div className="avatar-container">
              <img src={profileData.avatar} alt="Profile" className="profile-avatar" />
              <button className="avatar-edit-btn">
                <Camera size={16} />
              </button>
            </div>
            <div className="profile-basic-info">
              <h1 className="profile-name">{profileData.name}</h1>
              <p className="profile-email">{profileData.email}</p>
              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-number">{orderHistory.length}</span>
                  <span className="stat-label">Orders</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{favorites.length}</span>
                  <span className="stat-label">Favorites</span>
                </div>
                <div className="stat">
                  <span className="stat-number">4.8</span>
                  <span className="stat-label">Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Navigation */}
        <div className="profile-nav">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Profile Content */}
        <div className="profile-content">
          {activeTab === 'profile' && (
            <div className="profile-details">
              <div className="section-header">
                <h2>Personal Information</h2>
                {!isEditing ? (
                  <button className="edit-btn" onClick={handleEdit}>
                    <Edit3 size={18} />
                    Edit Profile
                  </button>
                ) : (
                  <div className="edit-actions">
                    <button className="save-btn" onClick={handleSave}>
                      <Save size={18} />
                      Save
                    </button>
                    <button className="cancel-btn" onClick={handleCancel}>
                      <X size={18} />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="profile-form">
                <div className="form-group">
                  <label className="form-label">
                    <User size={18} />
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="form-input"
                    />
                  ) : (
                    <div className="form-value">{profileData.name}</div>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Mail size={18} />
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="form-input"
                    />
                  ) : (
                    <div className="form-value">{profileData.email}</div>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Phone size={18} />
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="form-input"
                    />
                  ) : (
                    <div className="form-value">{profileData.phone}</div>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <MapPin size={18} />
                    Address
                  </label>
                  {isEditing ? (
                    <textarea
                      value={editData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="form-textarea"
                      rows="3"
                    />
                  ) : (
                    <div className="form-value">{profileData.address}</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="orders-section">
              <div className="section-header">
                <h2>Order History</h2>
              </div>
              <div className="orders-list">
                {orderHistory.map(order => (
                  <div key={order.id} className="order-card">
                    <div className="order-header">
                      <div className="order-id">{order.id}</div>
                      <div className={`order-status ${order.status.toLowerCase()}`}>
                        {order.status}
                      </div>
                    </div>
                    <div className="order-details">
                      <div className="order-date">
                        <Clock size={16} />
                        {new Date(order.date).toLocaleDateString('en-IN')}
                      </div>
                      <div className="order-items">
                        {order.items.join(', ')}
                      </div>
                      <div className="order-total">
                        ₹{order.total}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'favorites' && (
            <div className="favorites-section">
              <div className="section-header">
                <h2>Favorite Items</h2>
              </div>
              <div className="favorites-grid">
                {favorites.map(item => (
                  <div key={item.id} className="favorite-card">
                    <img src={item.image} alt={item.name} className="favorite-image" />
                    <div className="favorite-info">
                      <h3 className="favorite-name">{item.name}</h3>
                      <div className="favorite-price">₹{item.price}</div>
                      <button className="add-to-cart-btn">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;