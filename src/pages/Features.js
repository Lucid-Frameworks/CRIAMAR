import React from "react";
import { FaChartLine, FaBell, FaRobot, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

export function Features() {
  const featureList = [
    { icon: <FaRobot />, text: "AI-driven sentiment tracking for blockchain tokens." },
    { icon: <FaChartLine />, text: "Real-time analytics with historical trends." },
    { icon: <FaBell />, text: "Customizable alerts for market movements." },
    { icon: <FaDatabase />, text: "Decentralized data aggregation for unbiased insights." },
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">🚀 Key Features</h2>
      <ul className="mt-4 space-y-4">
        {featureList.map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-center space-x-3 text-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <span className="text-blue-500 text-2xl">{feature.icon}</span>
            <span>{feature.text}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
