import React from 'react';

const CartItem = ({ item, updateQuantity }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-info">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">₹{item.price}</p>
      </div>
      <div className="quantity-controls">
        <button 
          className="quantity-btn"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
        >
          -
        </button>
        <span className="quantity">{item.quantity}</span>
        <button 
          className="quantity-btn"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
      <p className="cart-item-total">₹{(item.price * item.quantity)}</p>
    </div>
  );
};

export default CartItem;