import React, { useState } from "react";

export function SentimentAnalysis() {
  const [token, setToken] = useState("");
  const [sentiment, setSentiment] = useState(null);

  const analyzeSentiment = () => {
    const sentiments = ["Positive", "Neutral", "Negative"];
    const randomSentiment = sentiments[Math.floor(Math.random() * sentiments.length)];
    setSentiment(randomSentiment);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">NLP-Based Token Sentiment Analysis</h2>
      <input
        type="text"
        placeholder="Enter token name"
        value={token}
        onChange={(e) => setToken(e.target.value)}
