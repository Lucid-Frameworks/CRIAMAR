import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = !!localStorage.getItem("authToken"); // Simple auth check

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-xl font-bold text-white">CRIAMAR</span>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white transition-all duration-200">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-all duration-200">About</Link>
          <Link to="/features" className="text-gray-300 hover:text-white transition-all duration-200">Features</Link>
          <Link to="/sentiment" className="text-gray-300 hover:text-white transition-all duration-200">Sentiment</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition-all duration-200">Contact</Link>
          {isAuthenticated && (
            <Link to="/dashboard" className="text-green-400 hover:text-white font-semibold transition-all duration-200">
              Dashboard
            </Link>
          )}
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          <Link to="/" className="block py-2 hover:text-white transition-all duration-200">Home</Link>
          <Link to="/about" className="block py-2 hover:text-white transition-all duration-200">About</Link>
          <Link to="/features" className="block py-2 hover:text-white transition-all duration-200">Features</Link>
          <Link to="/sentiment" className="block py-2 hover:text-white transition-all duration-200">Sentiment</Link>
          <Link to="/contact" className="block py-2 hover:text-white transition-all duration-200">Contact</Link>
          {isAuthenticated && (
            <Link to="/dashboard" className="block py-2 text-green-400 hover:text-white transition-all duration-200">
              Dashboard
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
