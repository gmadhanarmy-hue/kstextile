import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Products = ({ products, addToCart }) => {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  return (
    <div className="products-page">
      <h1>Our Products</h1>
      
      <div className="filter-buttons">
        <button 
          className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'innerwear' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('innerwear')}
        >
          Innerwear
        </button>
        <button 
          className={filter === 'nightwear' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('nightwear')}
        >
          Nightwear
        </button>
        <button 
          className={filter === 'tops' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('tops')}
        >
          Tops
        </button>
        <button 
          className={filter === 'bottoms' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('bottoms')}
        >
          Bottoms
        </button>
        <button 
          className={filter === 'ethnic' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('ethnic')}
        >
          Ethnic Wear
        </button>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
};

export default Products;