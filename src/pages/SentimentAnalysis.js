import React, { useState } from "react";
import { motion } from "framer-motion";

export function SentimentAnalysis() {
  const [token, setToken] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeSentiment = () => {
    if (!token.trim()) {
      alert("Please enter a token name to analyze.");
      return;
    }

    setLoading(true);
    setSentiment(null);

    const sentiments = ["Positive", "Neutral", "Negative"];
    const randomSentiment = sentiments[Math.floor(Math.random() * sentiments.length)];

    setTimeout(() => {
      setSentiment(randomSentiment);
      setLoading(false);
    }, 1000); // Simulating network delay
  };

  const resetAnalysis = () => {
    setToken("");
    setSentiment(null);
  };

  const sentimentColors: Record<string, string> = {
    Positive: "text-green-500",
    Negative: "text-red-500",
    Neutral: "text-yellow-500",
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">NLP-Based Token Sentiment Analysis</h2>
      <input
        type="text"
        placeholder="Enter token name"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        className="p-2 border rounded-md text-black"
      />
      <div className="mt-4">
        <button
          onClick={analyzeSentiment}
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
        <button
          onClick={resetAnalysis}
          className="ml-4 p-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
        >
          Reset
        </button>
      </div>
      {sentiment && (
        <motion.div
          className={`mt-4 text-xl font-bold ${sentimentColors[sentiment] || "text-gray-500"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sentiment: {sentiment} (NLP-derived)
        </motion
