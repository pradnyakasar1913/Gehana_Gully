import React, { useState } from 'react';
import './Products.css';

const dummyProducts = [
  { id: 1, name: "Diamond Earring", price: 700, category: "Earrings", image: "./Images/photo-1693212793204-bcea856c75fe.jpg" },
  { id: 2, name: "Gold Plated Necklace", price: 800, category: "Necklace", image: "./Images/marriage-gold-chain-designs-for-ladies.jpg" },
  { id: 3, name: "Kundan Earrings", price: 950, category: "Earrings", image: "./Images/ACE511_7.webp" },
  { id: 4, name: "Diva  Heart Earring", price: 250, category: "Earrings", image: "./Images/6AF7B266-C8F6-42B6-B29F-98E42764B001.webp" },
  { id: 5, name: "Gold Plated Chain", price: 800, category: "Necklace", image: "./Images/3025NAZ_1.webp" },
];

const categories = ["All", "Earrings", "Necklace"];

function Products() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? dummyProducts
      : dummyProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold">Featured Collection</h2>

      {/* Category Filter */}
      <div className="text-center mb-4">
        {categories.map(cat => (
          <button
            key={cat}
            className={`btn mx-2 ${selectedCategory === cat ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="row">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="product-card h-100 shadow-lg">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body text-center">
                <h5 className="product-title">{product.name}</h5>
                <p className="product-price">₹{product.price}</p>
                <button className="btn btn-warning rounded-pill px-4 mb-2" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <p className="text-center text-muted">No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
