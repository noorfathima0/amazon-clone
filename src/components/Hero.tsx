import React from 'react';

export default function Hero() {
  return (
    <div className="relative">
      <div className="w-full h-[600px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=2000&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Amazon
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Shop millions of products with fast, free delivery
        </p>
        <button className="bg-[#febd69] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#f3a847] transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
}