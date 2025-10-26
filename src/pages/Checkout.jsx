import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, clearCart }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paymentMethod: 'card'
  });

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    clearCart();
    navigate('/');
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <h1>Checkout</h1>
        <p>No items in cart</p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-container">
        <div className="checkout-form">
          <form onSubmit={handleSubmit}>
            <h3>Contact Information</h3>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <h3>Shipping Address</h3>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="zipCode"
              placeholder="ZIP Code"
              value={formData.zipCode}
              onChange={handleInputChange}
              required
            />

            <h3>Payment Information</h3>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleInputChange}
              required={formData.paymentMethod === 'card'}
            />

            <h3>Payment Method</h3>
            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={handleInputChange}
                />
                Credit/Debit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleInputChange}
                />
                Cash on Delivery
              </label>
            </div>

            <button type="submit" className="place-order-btn">
              Place Order - ₹{total}
            </button>
          </form>
        </div>

        <div className="order-summary">
          <div className="bill-header">
            <h3>FEMIII</h3>
            <p>225/225B NH road Town hall, Ukkadam, Coimbatore</p>
            <p>Phone: +91 8667412710</p>
            <p>Bill No: #{Math.floor(Math.random() * 10000) + 1000}</p>
            <hr/>
          </div>
          <h4>Order Summary</h4>
          {cartItems.map((item, index) => (
            <div key={item.id} className="summary-item">
              <span>{index + 1}. {item.name} x {item.quantity}</span>
              <span>₹{(item.price * item.quantity)}</span>
            </div>
          ))}
          <hr/>
          <div className="summary-total">
            <strong>Total: ₹{total}</strong>
          </div>
          <div className="bill-footer">
            <p>Thank you for shopping with us!</p>
            <p>GST No: 33XXXXX1234X1ZX</p>
            <p>Contact: +91 9791922636</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;