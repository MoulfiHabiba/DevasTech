import React from 'react';

import myImage from '../Images/ElMakam.png';
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <img src={myImage} alt="Website Logo" className="h-8 mr-2" />
          <h1 className="text-gray-800 text-2xl font-bold">EyeOnAlgeria</h1>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="font-bold text-gray-800 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Discover</a>
          <a href="#" className="font-bold text-gray-800 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Map</a>
          <a href="#" className="font-bold text-gray-800 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Events</a>
          <a href="#" className="font-bold text-gray-800 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Your Account</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
