import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Features = lazy(() => import("./pages/Features"));
const SentimentAnalysis = lazy(() => import("./pages/SentimentAnalysis"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

/**
 * ProtectedRoute: Restricts access to authenticated users.
 */
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem("authToken"); // Simple auth check
  return isAuthenticated ? element : <Navigate to="/" replace />;
};

/**
 * ErrorBoundary: Handles errors in lazy-loaded components with fallback UI.
 */
const ErrorBoundary = ({ children }) => (
  <Suspense
    fallback={
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
      </div>
    }
  >
    {children}
  </Suspense>
);

/**
 * AppContent: Manages routing, navigation, and layout structure.
 */
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    console.log(`Navigated to: ${location.pathname}`);
  }, [location]);

  return (
    <HelmetProvider>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        <Navbar />
        <main className="flex-grow">
          <ErrorBoundary> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/sentiment" element={<SentimentAnalysis />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

/**
 * App: Wraps the application with a router.
 */
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
