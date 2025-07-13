import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <div role="contentinfo">
        <p className="text-sm" aria-label="Copyright">
          &copy; {new Date().getFullYear()} CRIAMAR. All rights reserved.
        </p>

        <div className="mt-2 flex justify-center gap-4">
          <a href="https://twitter.com/criamar" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:scale-110 transition-transform duration-200">
            🐦
          </a>
          <a href="https://linkedin.com/company/criamar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform duration-200">
            🔗
          </a>
          <a href="mailto:contact@criamar.com" aria-label="Email" className="hover:scale-110 transition-transform duration-200">
            📧
          </a>
        </div>

        <div className="mt-4 text-sm text-gray-400">
          <p>Founded in 2025 by blockchain enthusiasts and AI experts.</p>
          <p>
            <a href="/privacy-policy" className="hover:underline text-gray-300" aria-label="Privacy Policy">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms-of-service" className="hover:underline text-gray-300" aria-label="Terms of Service">
              Terms of Service
            </a>
          </p>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          <p>Made with 💙 in the blockchain and AI community.</p>
        </div>

        <div className="mt-4">
          <a
            href="mailto:contact@criamar.com"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-xs sm:text-sm"
            aria-label="Email us"
          >
            ✉️ Email Us for Partnerships
          </a>
        </div>

        <div className="mt-2 text-xs text-gray-500">
          <p>v1.3.0 • Updated July 2025</p>
        </div>
      </div>
    </footer>
  );
}
