import React, { useState } from 'react';
import { Search, ShoppingCart, MapPin, Menu, User } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#131921] text-white">
      <div className="max-w-[1500px] mx-auto">
        {/* Main Navbar */}
        <div className="flex items-center justify-between p-2 md:p-3 gap-2">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold cursor-pointer">amazon</span>
          </div>

          {/* Delivery Location */}
          <div className="hidden md:flex items-center space-x-1 cursor-pointer hover:outline outline-1 p-2">
            <MapPin size={20} />
            <div>
              <p className="text-xs text-gray-300">Deliver to</p>
              <p className="text-sm font-bold">United States</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex flex-1 items-center max-w-2xl">
            <div className="flex flex-1 items-center bg-white rounded-lg">
              <input
                type="text"
                placeholder="Search Amazon"
                className="flex-1 p-2 rounded-l-lg text-black focus:outline-none"
              />
              <button className="bg-[#febd69] p-3 rounded-r-lg hover:bg-[#f3a847]">
                <Search className="h-5 w-5 text-gray-800" />
              </button>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="cursor-pointer hover:outline outline-1 p-2">
              <p className="text-xs">Hello, Sign in</p>
              <p className="text-sm font-bold">Account & Lists</p>
            </div>
            <div className="cursor-pointer hover:outline outline-1 p-2">
              <p className="text-xs">Returns</p>
              <p className="text-sm font-bold">& Orders</p>
            </div>
            <div className="flex items-center cursor-pointer hover:outline outline-1 p-2">
              <ShoppingCart size={30} />
              <span className="font-bold">Cart</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Secondary Navbar */}
        <div className="bg-[#232f3e] p-2 flex items-center space-x-4 overflow-x-auto">
          <button className="flex items-center space-x-1 hover:outline outline-1 p-1">
            <Menu size={20} />
            <span>All</span>
          </button>
          <button className="hover:outline outline-1 p-1">Today's Deals</button>
          <button className="hover:outline outline-1 p-1">Customer Service</button>
          <button className="hover:outline outline-1 p-1">Registry</button>
          <button className="hover:outline outline-1 p-1">Gift Cards</button>
          <button className="hover:outline outline-1 p-1">Sell</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white h-full w-64 text-black p-4">
            <div className="flex items-center space-x-2 p-2 bg-[#232f3e] text-white">
              <User size={24} />
              <span className="font-bold">Hello, Sign In</span>
            </div>
            <div className="mt-4 space-y-4">
              <button className="block w-full text-left p-2 hover:bg-gray-100">
                Today's Deals
              </button>
              <button className="block w-full text-left p-2 hover:bg-gray-100">
                Customer Service
              </button>
              <button className="block w-full text-left p-2 hover:bg-gray-100">
                Registry
              </button>
              <button className="block w-full text-left p-2 hover:bg-gray-100">
                Gift Cards
              </button>
              <button className="block w-full text-left p-2 hover:bg-gray-100">
                Sell
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}