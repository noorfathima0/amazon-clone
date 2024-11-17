import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#232f3e] text-white">
      <div className="max-w-[1500px] mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Get to Know Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About Amazon</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Investor Relations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Make Money with Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Sell products on Amazon</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Sell apps on Amazon</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Become an Affiliate</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Advertise Your Products</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Amazon Payment Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Amazon Rewards Visa</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Amazon Store Card</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Amazon Business Card</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Shop with Points</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Let Us Help You</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Your Account</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Your Orders</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Shipping Rates & Policies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Returns & Replacements</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <div className="text-2xl font-bold mb-4">amazon</div>
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Amazon Clone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}