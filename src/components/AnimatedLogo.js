import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedLogo() {
  return (
    <motion.div
      className="text-3xl font-bold text-primary"
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotate: 360 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1.5
      }}
      whileHover={{ scale: 1.1 }}
    >
      Logo
    </motion.div>
  );
}