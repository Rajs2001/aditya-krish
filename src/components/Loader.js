import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-primary"></div>
    </div>
  );
};

export default Loader;
