import React, { Profiler, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; // Web vitals logging

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.warn("❌ Root element not found, cannot render app.");
  throw new Error("❌ Root element not found");
}
const root = ReactDOM.createRoot(rootElement);

/**
 * React Profiler callback for performance measurement
 */
const onRender = (id: string, phase: string, actualDuration: number) => {
  console.log(`[Profiler] ${id} took ${actualDuration}ms to render during ${phase}.`);
};

useEffect(() => {
  console.log("✅ App initialized and mounted");
}, []); // Log when the app mounts

const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.ErrorBoundary
      fallback={<div>Something went wrong. Please try again later.</div>}
      onError={(error, info) => {
        console.error("Global error:", error, info);
      }}
    >
      {children}
    </React.ErrorBoundary>
  );
};

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Profiler id="App" onRender={onRender}>
        <App />
      </Profiler>
    </ErrorBoundary>
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
const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/service-worker.js", { scope: "/" });
      console.log("🚀 Service Worker registered successfully.");

      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        newWorker?.addEventListener("statechange", () => {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            console.log("🔄 New content available, please refresh.");
          }
        });
      });
    } catch (error) {
      console.error("❌ Service Worker registration failed:", error);
    }
  }
};

registerServiceWorker();

/**
 * Google Analytics Setup (Only in Production)
 */
if (process.env.NODE_ENV === "production") {
  const GA_TRACKING_ID = import.meta.env.VITE_GA_ID || "UA-XXXXXXX-X"; // Use env var first

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
