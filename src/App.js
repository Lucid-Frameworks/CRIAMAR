import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Features = lazy(() => import("./pages/Features"));
const SentimentAnalysis = lazy(() => import("./pages/SentimentAnalysis"));
const NotFound = lazy(() => import("./pages/NotFound")); // Added NotFound page
const Contact = lazy(() => import("./pages/Contact")); // Added Contact page

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        <Navbar />
        <div className="flex-grow">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/sentiment" element={<SentimentAnalysis />} />
              <Route path="/contact" element={<Contact />} /> {/* Added Contact route */}
              <Route path="*" element={<NotFound />} /> {/* Added catch-all route */}
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
