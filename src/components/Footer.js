import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><a href="/" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="/" className="hover:text-primary transition-colors">Shipping & Returns</a></li>
              <li><a href="/" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="/" className="text-2xl hover:text-primary transition-colors"><i className="fab fa-facebook"></i></a>
              <a href="/" className="text-2xl hover:text-primary transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="/" className="text-2xl hover:text-primary transition-colors"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Your E-commerce Company. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}