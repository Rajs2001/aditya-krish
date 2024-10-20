import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = productsData.filter(product => product.Category.toLowerCase() === category.toLowerCase());
    setProducts(filteredProducts);
  }, [category]);

  return (
    <div>
      <h1>{category} Products</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.Id} product={product} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
