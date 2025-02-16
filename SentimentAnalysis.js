import React, { useState } from "react";

export function SentimentAnalysis() {
  const [token, setToken] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [loading, setLoading] = useState(false); // Added loading state

  const analyzeSentiment = () => {
    setLoading(true); // Set loading state to true while analyzing
    const sentiments = ["Positive", "Neutral", "Negative"];
    setTimeout(() => { // Simulate API call delay
      const randomSentiment = sentiments[Math.floor(Math.random() * sentiments.length)];
      setSentiment(randomSentiment);
      setLoading(false); // Stop loading once analysis is done
    }, 1500);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Real-Time Token Sentiment Analysis</h2>
      <input
        type="text"
        placeholder="Enter token name"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        className="p-2 border rounded-md text-black"
      />
      <button
        onClick={analyzeSentiment}
        className={`ml-2 p-2 rounded-md ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'}`}
        disabled={loading} // Disable button while loading
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
      {sentiment && (
        <div className="mt-4 text-xl font-bold">Sentiment: {sentiment}</div>
      )}
    </div>
  );
}
