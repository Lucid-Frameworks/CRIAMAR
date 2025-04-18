import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
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
    </footer>
  );
}
  