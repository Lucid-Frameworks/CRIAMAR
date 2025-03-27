import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; // Web vitals logging

const root = ReactDOM.createRoot(document.getElementById("root")!);

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

reportWebVitals(console.log); // Logs Core Web Vitals for performance tracking

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
