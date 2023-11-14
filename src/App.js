import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Import Helmet for SEO
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Features = lazy(() => import("./pages/Features"));
const SentimentAnalysis = lazy(() => import("./pages/SentimentAnalysis"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log(`Navigated to: ${location.pathname}`);
  }, [location]);

  const pageTitles = {
    "/": "Home | My App",
    "/about": "About Us | My App",
    "/features": "Features | My App",
    "/sentiment": "Sentiment Analysis | My App",
    "/contact": "Contact Us | My App",
    "/dashboard": "Dashboard | My App",
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitles[location.pathname] || "My App"}</title>
      </Helmet>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-gray-900 text-white">
          <Navbar />
          <div className="flex-grow">
            <Suspense
              fallback={
                <div className="flex justify-center items-center min-h-screen">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features />} />
                <Route path="/sentiment" element={<SentimentAnalysis />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
