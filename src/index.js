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
