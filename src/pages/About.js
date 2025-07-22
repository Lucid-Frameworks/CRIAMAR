import React from "react";
import { Helmet } from "react-helmet-async";

export function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Helmet>
        <title>CRIAMAR | About</title>
        <meta name="description" content="Learn more about CRIAMAR’s mission, features, and how it empowers blockchain users." />
      </Helmet>

      <h2 className="text-3xl font-bold mb-4">About CRIAMAR</h2>
      <p className="text-lg">
        CRIAMAR leverages <strong>advanced AI</strong> to provide <strong>real-time sentiment analysis</strong> for blockchain tokens, helping investors and projects make data-driven decisions. By analyzing blockchain data and market sentiment, CRIAMAR gives a comprehensive view of token performance.
      </p>
      <p className="mt-4 text-md">
        Our platform integrates seamlessly with popular blockchain networks, offering quick, accurate sentiment insights on any token you’re interested in. Whether you're a <strong>developer</strong>, <strong>trader</strong>, or <strong>investor</strong>, CRIAMAR simplifies decision-making with data-driven insights.
      </p>

      <details className="mt-8">
        <summary className="cursor-pointer text-2xl font-bold">Key Features</summary>
        <ul className="list-disc list-inside text-lg mt-4" role="list">
          <li role="listitem">Real-time sentiment analysis for any blockchain token</li>
          <li role="listitem">AI-driven insights for smarter investment decisions</li>
          <li role="listitem">Comprehensive data and trend analysis</li>
          <li role="listitem">Seamless integration with blockchain networks</li>
          <li role="listitem">Easy-to-read, actionable insights with visual representations</li>
        </ul>
      </details>

      <h3 className="text-2xl font-bold mt-8">Get In Touch</h3>
      <p className="mt-4 text-lg">
        Have questions or want to learn more about CRIAMAR? Reach out to us through the contact page for further details or to get started.
      </p>
      <a href="/contact" className="inline-block mt-2 text-blue-400 hover:underline">
        Go to Contact Page → 
      </a>

      <details className="mt-8">
        <summary className="cursor-pointer text-2xl font-bold">Join Our Community</summary>
        <p className="mt-4 text-lg">
          Join the growing community of blockchain enthusiasts, investors, and developers using CRIAMAR to make smarter, data-driven decisions. Stay connected with us for updates and insights on the latest trends.
        </p>
      </details>
    </div>
  );
}
  