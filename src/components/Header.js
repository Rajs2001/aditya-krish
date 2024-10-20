import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";
import AnimatedLogo from "./AnimatedLogo";

export default function Header() {
  const navigateCart = ()=>{
    window.location.href = '/cart';
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ height: isScrolled ? "60px" : "80px" }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <AnimatedLogo />
        </Link>

        {/* Search bar */}
        <SearchBar />

        {/* Navigation links */}
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link
                to="/"
                className="text-lg font-semibold hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg font-semibold hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-lg font-semibold hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="relative">
          <i 
          className="fas fa-shopping-cart text-2xl text-gray-600"
          onClick={navigateCart}
          style={{cursor:'pointer', }}
          />
          {/* <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
          
          </span> */}
        </div>
      </div>
    </motion.header>
  );
}
