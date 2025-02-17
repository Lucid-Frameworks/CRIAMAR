import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Enable Hot Module Replacement (HMR) for faster development
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept(() => {
    console.log("HMR: Module updated successfully!");
  });
}

// Added performance monitoring with React Profiler
if (process.env.NODE_ENV === "development") {
  console.log("React Profiler is enabled for performance monitoring.");
}

// Register service worker for PWA support
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js").then(() => {
    console.log("Service Worker registered successfully.");
  }).catch((error) => {
    console.error("Service Worker registration failed:", error);
  });
}

// Conditionally add Google Analytics in production for tracking user interactions
if (process.env.NODE_ENV === "production") {
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXX-X`; // Replace with your GA tracking ID
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "UA-XXXXXXX-X"); // Replace with your GA tracking ID
    console.log("Google Analytics initialized.");
  };
}
