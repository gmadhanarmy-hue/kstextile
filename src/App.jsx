import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Address from './pages/Address';
import CustomerCare from './pages/CustomerCare';
import Email from './pages/Email';
import WhatsApp from './pages/WhatsApp';
import './App.css';

const products = [
  { id: 1, name: 'Cotton Bra Set', price: 899, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300', category: 'innerwear' },
  { id: 2, name: 'Silk Nighty', price: 1299, image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300', category: 'nightwear' },
  { id: 3, name: 'Crop Top', price: 599, image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300', category: 'tops' },
  { id: 4, name: 'High Waist Leggings', price: 799, image: 'https://images.unsplash.com/photo-1506629905607-d405d7d3b880?w=300', category: 'bottoms' },
  { id: 5, name: 'Lace Panty Set', price: 699, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300', category: 'innerwear' },
  { id: 6, name: 'Cotton Palazzo Pants', price: 999, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300', category: 'bottoms' },
  { id: 7, name: 'Sports Bra', price: 749, image: 'https://images.unsplash.com/photo-1566479179817-c0b5b4b8b1cc?w=300', category: 'innerwear' },
  { id: 8, name: 'Satin Nighty Gown', price: 1599, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300', category: 'nightwear' },
  { id: 9, name: 'Sudithar Top', price: 1199, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300', category: 'ethnic' },
  { id: 10, name: 'Churidar Set', price: 1899, image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300', category: 'ethnic' },
  { id: 11, name: 'Kurti', price: 899, image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300', category: 'ethnic' },
  { id: 12, name: 'Salwar Kameez', price: 2199, image: 'https://images.unsplash.com/photo-1506629905607-d405d7d3b880?w=300', category: 'ethnic' },
  { id: 13, name: 'Dupatta', price: 499, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300', category: 'ethnic' },
  { id: 14, name: 'Anarkali Dress', price: 2599, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300', category: 'ethnic' },
  { id: 15, name: 'Saree Blouse', price: 799, image: 'https://images.unsplash.com/photo-1566479179817-c0b5b4b8b1cc?w=300', category: 'ethnic' },
  { id: 16, name: 'Lehenga Choli', price: 3999, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300', category: 'ethnic' }
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => 
        prev.map(item => item.id === id ? { ...item, quantity } : item)
      );
    }
  };

  const clearCart = () => setCartItems([]);

  return (
    <Router>
      <div className="App">
        <Header cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
        <main>
          <Routes>
            <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
            <Route path="/products" element={<Products products={products} addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} updateQuantity={updateQuantity} />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} clearCart={clearCart} />} />
            <Route path="/address" element={<Address />} />
            <Route path="/customercare" element={<CustomerCare />} />
            <Route path="/email" element={<Email />} />
            <Route path="/whatsapp" element={<WhatsApp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;