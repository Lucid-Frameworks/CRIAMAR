import React from "react";

export function Home() {
  return (
    <div className="p-6 text-center max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Welcome to CRIAMAR</h1>
      <p className="text-lg">
        CRIAMAR is an AI-powered platform that tracks and analyzes blockchain token sentiment in real-time.
      </p>
      <p className="mt-6 text-xl text-gray-600">
        Start exploring the platform to make smarter investment decisions and stay ahead of market trends!
      </p>
      <div className="mt-8">
        <a href="/features" className="inline-block py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Explore Features
        </a>
      </div>
    </div>
  );
}
