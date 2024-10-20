import React, { useState, useEffect, useRef } from 'react';
import { useNavigate  } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const history = useNavigate ();
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchTerm.length > 2) {
      // Fetch suggestions based on searchTerm
      // This is a mock function, replace with actual API call
      fetchSuggestions(searchTerm).then(setSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    history(`/search?q=${searchTerm}`);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    history(`/search?q=${suggestion}`);
  };

  // Mock function to fetch suggestions
  const fetchSuggestions = async (term) => {
    // Replace this with actual API call
    return ['suggestion 1', 'suggestion 2', 'suggestion 3'].filter(s => s.includes(term));
  };

  return (
    <div className="relative" ref={searchRef}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-64 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </form>
      <AnimatePresence>
        {suggestions.length > 0 && (
          <motion.ul
            className="absolute z-10 w-full bg-white shadow-lg rounded-lg mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {suggestions.map((suggestion, index) => (
              <motion.li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
                whileHover={{ backgroundColor: '#f3f4f6' }}
              >
                {suggestion}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}