import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCard({ product, index }) {
  const btn_click = ()=>{
    alert ('Button clicked')
  }




  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Link to={`/product/${product.Id}`}>
        <img
          src={product.Images[0].Img1}
          alt={product.Title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{product.Title}</h3>
          <p className="text-gray-600 mb-2">{product.Category}</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-primary">
              ${product.ActualPrice}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ${product.MRP}
            </span>
          </div>
          <div className="flex justify-between items-center">
          <button
            onClick={btn_click}
            className="bg-green-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 mt-4 rounded-lg shadow-md transition duration-300 w-full"
            // style={{
            //   textAlign:'center',
            // }}
          >
            Buy Now
          </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
