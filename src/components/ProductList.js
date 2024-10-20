import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ProductList({ products }) {
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '200px 0px',
  });

  useEffect(() => {
    if (inView) {
      setVisibleProducts(prevVisible => [
        ...prevVisible,
        ...products.slice(prevVisible.length, prevVisible.length + 8)
      ]);
    }
  }, [inView, products]);

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {visibleProducts.map((product, index) => (
        <ProductCard key={product.Id} product={product} index={index} />
      ))}
      <div ref={ref}></div>
    </motion.div>
  );
}