import React from "react";

export function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">About CRIAMAR</h2>
      <p className="text-lg">
        CRIAMAR leverages advanced AI to provide real-time sentiment analysis for blockchain tokens, helping investors and projects make data-driven decisions. By analyzing blockchain data and market sentiment, CRIAMAR gives a comprehensive view of token performance.
      </p>
      <p className="mt-4 text-md">
        Our platform integrates seamlessly with popular blockchain networks, offering quick, accurate sentiment insights on any token you’re interested in. Whether you're a developer, trader, or investor, CRIAMAR simplifies decision-making with data-driven insights.
      </p>

      <h3 className="text-2xl font-bold mt-8">Key Features</h3>
      <ul className="list-disc list-inside text-lg mt-4">
        <li>Real-time sentiment analysis for any blockchain token</li>
        <li>AI-driven insights for smarter investment decisions</li>
        <li>Comprehensive data and trend analysis</li>
        <li>Seamless integration with blockchain networks</li>
        <li>Easy-to-read, actionable insights with visual representations</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8">Get In Touch</h3>
      <p className="mt-4 text-lg">Have questions or want to learn more about CRIAMAR? Reach out to us through the contact page for further details or to get started.</p>
    </div>
  );
}
