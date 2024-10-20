import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from '../components/Loader'

export default function ProductDetail({ products }) {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(p => p.Id === productId);
    setProduct(foundProduct);
    if (foundProduct) {
      setSelectedImage(foundProduct.Images[0].Img1);
    }
  }, [productId, products]);

  if (!product) return <Loader/>;


  const buynow =()=>{
    alert(product.Title);
  }

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
          src={selectedImage} alt={product.Title} 
          className="w-full h-auto rounded-lg shadow-lg"
          
          style={{
            width:'95%',
            height:'80%',
          }}
           />
          <div className="flex mt-4 space-x-2">
            {product.Images.map((image, index) => (
              <motion.img
                key={index}
                src={Object.values(image)[0]}
                alt={`${product.Title} - Image ${index + 1}`}
                className="w-20 h-20 object-cover rounded-md cursor-pointer"
                onClick={() => setSelectedImage(Object.values(image)[0])}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-4">{product.Title}</h1>
          <p className="text-gray-600 mb-4">{product.Description}</p>
          <div className="flex items-center mb-4">
            <span className="text-3xl font-bold text-primary mr-2">${product.ActualPrice}</span>
            <span className="text-xl text-gray-500 line-through">${product.MRP}</span>
          </div>
          <p className="mb-4">Category: {product.Category} - {product.SubCategory}</p>
          <h1 className="text-3xl font-bold mb-4">Detail :</h1>
          <p>{product.detail}</p>

          <motion.button
            className="text-black px-6 py-2 rounded-full text-lg font-semibold float-right hover:bg-red-700"
            onClick={buynow}
            style={{
              background:"#908d38"
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Buy Now
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}