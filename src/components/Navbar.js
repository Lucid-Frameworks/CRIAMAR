import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const isAuthenticated = !!localStorage.getItem("authToken"); // Simple auth check

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-xl font-bold text-white">CRIAMAR</span>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/features" className="text-gray-300 hover:text-white">Features</Link>
          <Link to="/sentiment" className="text-gray-300 hover:text-white">Sentiment</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link> {/* Added Contact Page */}
          {isAuthenticated && (
            <Link to="/dashboard" className="text-green-400 hover:text-white font-semibold">
              Dashboard
            </Link> 
          )}
        </div>
      </div>
    </nav>
  );
}
