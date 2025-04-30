import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} CRIAMAR. All rights reserved.</p>
      
      <div className="mt-2 flex justify-center gap-4">
        <a href="https://twitter.com/criamar" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          🐦
        </a>
        <a href="https://linkedin.com/company/criamar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          🔗
        </a>
        <a href="mailto:contact@criamar.com" aria-label="Email">
          📧
        </a>
      </div>

      <div className="mt-4 text-sm text-gray-400">
        <p>Founded in 2025 by blockchain enthusiasts and AI experts.</p>
      </div>
    </footer>
  );
}
