import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function Home({ stats = { analyzed: "350+", realtime: "24/7", users: "12K+", tracked: "200+" } }) {
  return (
    <div className="p-6 text-center max-w-3xl mx-auto">
      <Helmet>
        <title>CRIAMAR | Home</title>
        <meta name="description" content="Real-time AI token sentiment tracking and analysis on CRIAMAR." />
      </Helmet>

      <h1 className="text-4xl font-bold mb-4">Welcome to CRIAMAR</h1>
      <p className="text-lg">
        CRIAMAR is an AI-powered platform that tracks and analyzes blockchain token sentiment in real-time.
      </p>
      <p className="mt-6 text-xl text-gray-600">
        Start exploring the platform to make smarter investment decisions and stay ahead of market trends!
      </p>
      <div className="mt-8">
        <Link
          to="/features"
          className="inline-block py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Explore Features
        </Link>
      </div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4">Key Statistics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="p-4 bg-gray-800 rounded-md text-white" aria-label="Tokens Analyzed">
            <h3 className="text-xl">Tokens Analyzed</h3>
            <motion.p
              className="text-2xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {stats.analyzed}
            </motion.p>
          </div>
          <div className="p-4 bg-gray-800 rounded-md text-white" aria-label="Real-time Data">
            <h3 className="text-xl">Real-time Data</h3>
            <p className="text-2xl">{stats.realtime}</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-md text-white" aria-label="Active Users">
            <h3 className="text-xl">Active Users</h3>
            <p className="text-2xl">{stats.users}</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-md text-white" aria-label="Tokens Tracked">
            <h3 className="text-xl">Tokens Tracked</h3>
            <p className="text-2xl">{stats.tracked}</p>
          </div>
              <p className="mt-2 text-sm text-gray-400">
            Or scroll down to learn more about how CRIAMAR works.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
