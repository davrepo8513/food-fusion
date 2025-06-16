import React from 'react';
import './Loading.css';

const Loading = ({ message = "Loading delicious food..." }) => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="food-icon">🍕</div>
        </div>
        <p className="loading-message">{message}</p>
      </div>
    </div>
  );
};

export default Loading;