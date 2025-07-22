import React from "react";
import { FaChartLine, FaBell, FaRobot, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const defaultFeatureList = [
  { icon: <FaRobot />, text: "AI-driven sentiment tracking for blockchain tokens." },
  { icon: <FaChartLine />, text: "Real-time analytics with historical trends." },
  { icon: <FaBell />, text: "Customizable alerts for market movements." },
  { icon: <FaDatabase />, text: "Decentralized data aggregation for unbiased insights." },
];

export function Features({ features = defaultFeatureList, isLoading = false }) {
  return (
    <div id="features" className="p-6 max-w-3xl mx-auto">
      <Helmet>
        <title>CRIAMAR | Features</title>
        <meta name="description" content="Explore CRIAMAR’s real-time analytics, AI insights, and decentralized data tools." />
      </Helmet>

      <h2 className="text-3xl font-bold mb-4 text-center">🚀 Key Features</h2>
      <p className="text-lg text-center mb-6">
        CRIAMAR provides a comprehensive suite of tools to empower investors, developers, and traders in the blockchain space. Discover our key features below.
      </p>
      {isLoading ? (
        <p className="text-center text-lg">Loading features...</p>
      ) : (
        <ul className="mt-4 space-y-4">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-center space-x-3 text-lg hover:bg-blue-800 p-2 rounded-md transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              aria-label={`Feature: ${feature.text}`}
            >
              <span
                className="text-blue-500 text-2xl"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {feature.icon}
              </span>
              <span>{feature.text}</span>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
}
