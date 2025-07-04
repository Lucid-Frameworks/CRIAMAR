import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; // Web vitals logging

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("❌ Root element not found");
const root = ReactDOM.createRoot(rootElement);

/**
 * React Profiler callback for performance measurement
 */
const onRender = (id: string, phase: string, actualDuration: number) => {
  console.log(`[Profiler] ${id} took ${actualDuration}ms to render during ${phase}.`);
};

root.render(
  <React.StrictMode>
    <Profiler id="App" onRender={onRender}>
      <App />
    </Profiler>
  </React.StrictMode>
);

console.log("✅ App successfully rendered to the DOM");

reportWebVitals(console.log); // Logs Core Web Vitals for performance tracking

/**
 * Enable Hot Module Replacement (HMR) for fast updates in development
 */
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log(`✅ HMR: Module updated successfully at ${new Date().toLocaleTimeString()}`);
  });
}

/**
 * Register Service Worker for PWA support and offline capabilities
 */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js", { scope: "/" })
    .then((registration) => {
      console.log("🚀 Service Worker registered successfully.");

      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        newWorker?.addEventListener("statechange", () => {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            console.log("🔄 New content available, please refresh.");
          }
        });
      });
    })
    .catch((error) => {
      console.error("❌ Service Worker registration failed:", error);
    });
}

/**
 * Google Analytics Setup (Only in Production)
 */
if (process.env.NODE_ENV === "production") {
  const GA_TRACKING_ID = "UA-XXXXXXX-X"; // Replace with actual GA tracking ID

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID);
    console.log("📊 Google Analytics initialized.");
  };
}
