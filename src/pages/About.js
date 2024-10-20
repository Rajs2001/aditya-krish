import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
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
        About Our Company
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2010, our e-commerce company has grown from a small startup to a leading online retailer. 
            We're passionate about providing high-quality products and exceptional customer service to our valued customers.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to make online shopping easy, enjoyable, and accessible to everyone. We carefully curate our 
            product selection to ensure that we offer only the best items across various categories.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img src="/placeholder.svg" alt="About Us" className="rounded-lg shadow-lg" />
        </motion.div>
      </div>
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-700">We are committed to offering only the highest quality products to our customers.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-700">We constantly strive to innovate and improve our services and product offerings.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
            <p className="text-gray-700">Our customers' satisfaction is at the heart of everything we do.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}