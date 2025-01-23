'use client';
import React from 'react';
import { IoIosCloudOutline } from 'react-icons/io';

const ComingSoon = () => {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center bg-gray-900">
      {/* Cloud Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <IoIosCloudOutline className="text-gray-600 opacity-30 blur-md" size={300} />
      </div>

      {/* Coming Soon Text */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-2 drop-shadow-md">
          Stay tuned for something exciting!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
