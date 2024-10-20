import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import CategoryFilter from '../components/CategoryFilter';
import { motion } from 'framer-motion';

export default function HomePage({ products }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.Category === selectedCategory));
    }
  }, [selectedCategory, products]);

  const categories = ['All', ...new Set(products.map(product => product.Category))];

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        Welcome to Our Store
      </motion.h1>
      <CategoryFilter
        categories={categories}
        
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProductList products={filteredProducts} />
    </motion.div>
  );
}