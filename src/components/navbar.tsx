// components/Navbar.tsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">Alishba Rehman</div>
        <ul className="hidden md:flex space-x-8">
          <li>Home</li>
          <li>Pages</li>
          <li>Menus</li>
          <li>Blog</li>
          <li>Booking</li>
          <li>Shop</li>
        </ul>
        <button className="hidden md:block border px-4 py-2 rounded-lg">
          Book Table
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
