import React from 'react';
import { Link } from 'react-router-dom';

const Filter = () => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-2">Filter by Category</h3>
      <div className="flex space-x-4">
      <Link to={'/category'}><button className="px-4 py-2 bg-blue-500 text-white rounded">All</button></Link>
      <Link to={'/category'}><button className="px-4 py-2 bg-blue-500 text-white rounded">Electronics</button></Link>
      <Link to={'/category'}><button className="px-4 py-2 bg-blue-500 text-white rounded">Appliance</button></Link>
        {/* Add more categories as needed */}
      </div>
    </div>
  );
};

export default Filter;