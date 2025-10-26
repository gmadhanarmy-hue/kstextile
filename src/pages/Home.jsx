import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = ({ products, addToCart }) => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Kalai Textile</h1>
          <p>Discover comfortable and stylish women's clothing & intimate wear</p>
          <Link to="/products" className="cta-button">Shop Now</Link>
        </div>
      </section>
      
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;