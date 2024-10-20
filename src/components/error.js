import React from 'react';
import { motion } from 'framer-motion';


const NotFound = () => {
  return (
    <motion.div
    className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center mt-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-6xl font-bold text-gray-800">404</h1>
    <p className="text-xl text-gray-600 mt-4">Oops! The page you're looking for doesn't exist.</p>
    <a
      href={"/"}
      className="mt-6 px-6 py-3 bg-success text-blue-600 font-semibold rounded-lg shadow-md hover:bg-primary-dark transition-colors"
    >
      Go back to Home
    </a>
  </motion.div>
  );
};

export default NotFound;


