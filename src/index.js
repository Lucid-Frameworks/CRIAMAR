import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; // Import web vitals logging

const root = ReactDOM.createRoot(document.getElementById("root"));

const onRender = (id, phase, actualDuration) => {
  console.log(`[React Profiler] ${id} took ${actualDuration}ms to render during ${phase}.`);
};

root.render(
  <React.StrictMode>
    <Profiler id="App" onRender={onRender}>
      <App />
    </Profiler>
  </React.StrictMode>
);

reportWebVitals(console.log); // Log web vitals for performance monitoring

// Enable Hot Module Replacement (HMR) for faster development
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("HMR: Module updated successfully!");
  });
}

// Register service worker for PWA support
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js", { scope: "/" })
    .then((registration) => {
      console.log("Service Worker registered successfully.");

      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        newWorker?.addEventListener("statechange", () => {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            console.log("New content available, please refresh.");
          }
        });
      });
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}

// Conditionally add Google Analytics in production for tracking user interactions
if (process.env.NODE_ENV === "production") {
  const GA_TRACKING_ID = "UA-XXXXXXX-X"; // Replace with your GA tracking ID

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID);
    console.log("Google Analytics initialized.");
  };
}
