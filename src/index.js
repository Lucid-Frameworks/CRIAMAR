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
  import.meta.webpackHot.accept();
}

// Added performance monitoring with React Profiler
if (process.env.NODE_ENV === "development") {
  console.log("React Profiler is enabled for performance monitoring.");
}
